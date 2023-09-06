import { TABLES, COLUMNS, state,updateDragging  } from './data.js';
import { html,createOrderHtml, moveToColumn,updateDraggingHtml } from './view.js';


/**
 
 * 
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */

// Define the createOrderData function
function createOrderData({ title, table, column }) {
    const id = generateUniqueId();
    const created = new Date();
    // Define any other properties you need for an order
  
    return { id, title, table, column, created };
  }

  document.querySelectorAll('.drop-area').forEach((dropArea) => {
    dropArea.addEventListener('dragover', handleDragOver);
});






const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}




function createDraggableOrder(orderText, table, column) {
    const orderData = {
        title: orderText,
        table: table,     
        column: column,   
    };
    const orderElement = createOrderHtml(orderData);
    orderElement.id = `order-${generateUniqueId()}`; // Set a unique ID

    document.querySelector(`[data-column="${column}"]`).appendChild(orderElement);
}

// Generate a unique ID for the order element
function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}


const handleDragStart = (event) => {
    const dataTransfer = event.dataTransfer;
    const itemId = event.target.dataset.id; 
    dataTransfer.setData('item-id', itemId); 
    event.target.classList.add('dragging');
}

const handleDragEnd = (event) => {
    
    const draggedOrder = document.querySelector('.order.dragging');
    if (draggedOrder) {
        draggedOrder.classList.remove('dragging');
    }

    
    const itemId = event.dataTransfer.getData('item-id');

    
    if (state.orders && state.orders[itemId]) {
        // Get the new column (if any) that the order is dropped into
        const overColumn = state.dragging.over;

        if (overColumn) {
            // Update the order's column in the state
            state.orders[itemId].column = overColumn;
        }

        // Clear the dragging state
        updateDragging({ over: null });
    // Trigger a re-render to reflect changes in the view
    renderOrders(); 
} else {
    console.error(`Order with ID ${itemId} not found in state.orders.`);
}
};



function renderOrders() {
    // Iterate over the state.orders object and update the view accordingly
    for (const orderId in state.orders) {
        const order = state.orders[orderId];
        const orderElement = document.querySelector(`[data-id="${orderId}"]`);

        // Check if the order element exists in the DOM
        if (orderElement) {
            // Update the order's position based on the 'column' property in the state
            const columnElement = html.columns[order.column];
            columnElement.appendChild(orderElement);
        }
    }
}



const handleHelpToggle = (event) => {
    // Toggle the visibility of the help overlay
    if (html.help.overlay.hasAttribute('open')) {
        html.help.overlay.removeAttribute('open');
    } else {
        html.help.overlay.setAttribute('open', '');
    }
};



const handleAddToggle = (event) => {
    // Toggle the visibility of the add overlay
    if (html.add.overlay.hasAttribute('open')) {
        html.add.overlay.removeAttribute('open');
    } else {
        html.add.overlay.setAttribute('open', '');
    }
};


const handleAddSubmit = (event) => {
    event.preventDefault();

    // Get the values from the form
    const title = html.add.title.value;
    const table = html.add.table.value;
    
    // Check if the title is not empty
    if (!title) {
        alert('Please enter an item .');
        return;
    }

 // Add an order status property
 const orderData = {
    title: title,
    table: table,
    column: 'ordered',
    status: 'pending', // Add an order status property
};


    // Create an order object
    const order = createOrderData({ title, table, column: 'ordered' });

  
    state.orders[order.id] = order;

    // Create the order HTML element
    const orderElement = createOrderHtml(order);

    // Append the order element to the "ordered" column
    html.columns.ordered.appendChild(orderElement);

    // Clear the form
    html.add.title.value = '';

    // Close the "Add Order" overlay
    html.add.overlay.removeAttribute('open');
};





const handleEditToggle = (event) => {
    // Toggle the visibility of the edit overlay
    if (html.edit.overlay.hasAttribute('open')) {
        html.edit.overlay.removeAttribute('open');
    } else {
        html.edit.overlay.setAttribute('open', '');
    }

    // Populate the edit form with data from the selected order
    const selectedOrder = document.querySelector('.order.selected');
    if (selectedOrder) {
        const orderId = selectedOrder.dataset.id;
        const orderData = state.orders[orderId];

        html.edit.title.value = orderData.title;
        html.edit.table.value = orderData.table;
        html.edit.id.value = orderId;
        html.edit.column.value = orderData.column;
    }
};






const handleEditSubmit = (event) => {
    event.preventDefault();

    // Get the values from the edit form
    const orderId = html.edit.id.value;
    const title = html.edit.title.value;
    const table = html.edit.table.value;
    const column = html.edit.column.value;

    // Update the order data in the state
    state.orders[orderId].title = title;
    state.orders[orderId].table = table;
    state.orders[orderId].column = column;

    // Update the order element in the view
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);
    if (orderElement) {
        orderElement.querySelector('[data-order-title]').textContent = title;
        orderElement.querySelector('[data-order-table]').textContent = table;
    }

    // Close the edit overlay
    html.edit.overlay.removeAttribute('open');
};




const handleDelete = (event) => {
    // Get the order ID from the edit form
    const orderId = html.edit.id.value;

    // Remove the order from the state and the view
    delete state.orders[orderId];
    const orderElement = document.querySelector(`[data-id="${orderId}"]`);
    if (orderElement) {
        orderElement.remove();
    }

    // Close the edit overlay
    html.edit.overlay.removeAttribute('open');
};



html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart);
    htmlColumn.addEventListener('dragend', handleDragEnd);

    
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver);
}

const handleDrop = (event) => {
    event.preventDefault(); // Prevent the default behavior of dropping outside a valid drop target

    // Perform logic to handle the drop here
    const column = event.currentTarget;
    const itemId = event.dataTransfer.getData('text/plain');
    
    
};