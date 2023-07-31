

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

document.addEventListener("DOMContentLoaded", function() {
  // Helper function to disable a button
  function disableButton(button) {
    button.disabled = true;
    button.style.filter = 'grayscale(100%)';
  }

  // Helper function to enable a button
  function enableButton(button) {
    button.disabled = false;
    button.style.filter = 'grayscale(0%)';
  }

  // Get all the book containers and iterate through them
  const bookContainers = document.querySelectorAll('div[id^="book"]');
  bookContainers.forEach((bookContainer, index) => {
    // Get the status element for this book
    const statusElement = bookContainer.querySelector('.status');

    // Get the buttons for this book
    const reserveButton = bookContainer.querySelector('.reserve');
    const checkoutButton = bookContainer.querySelector('.checkout');
    const checkinButton = bookContainer.querySelector('.checkin');

    // Get the status key (e.g., 'shelf', 'reserved', etc.) for this book
    const statusKey = statusElement.textContent.trim().toLowerCase();

    // Update status text color based on STATUS_MAP
    statusElement.style.color = STATUS_MAP[statusKey].color;

    // Update button properties based on STATUS_MAP
    if (STATUS_MAP[statusKey].canReserve) {
      enableButton(reserveButton);
    } else {
      disableButton(reserveButton);
    }

    if (STATUS_MAP[statusKey].canCheckout) {
      enableButton(checkoutButton);
    } else {
      disableButton(checkoutButton);
    }

    if (STATUS_MAP[statusKey].canCheckIn) {
      enableButton(checkinButton);
    } else {
      disableButton(checkinButton);
    }
  });
});

  