// Given data
const data = {
  lists: [
    ['first', [15, 11, 13, 7, 5]],
    ['second', [2, 6, 8, 4, 14, 12, 10]],
    ['third', [9, 3, 1]],
  ],
};

// Create an empty array to store the results
const result = [];

// Define the extractBiggest function
const extractBiggest = () => {
  const [firstLabel, firstArray] = data.lists[0]; // Destructure the first array
  const [secondLabel, secondArray] = data.lists[1]; // Destructure the second array
  const [thirdLabel, thirdArray] = data.lists[2]; // Destructure the third array

  const firstLastValue = firstArray[firstArray.length - 1]; // Get the last value of the first array
  const secondLastValue = secondArray[secondArray.length - 1]; // Get the last value of the second array
  const thirdLastValue = thirdArray[thirdArray.length - 1]; // Get the last value of the third array

  if (firstLastValue >= secondLastValue && firstLastValue >= thirdLastValue) {
    data.lists[0][1].pop(); // Remove the largest value from the first array
    return firstLastValue;
  } else if (secondLastValue >= firstLastValue && secondLastValue >= thirdLastValue) {
    data.lists[1][1].pop(); // Remove the largest value from the second array
    return secondLastValue;
  } else {
    data.lists[2][1].pop(); // Remove the largest value from the third array
    return thirdLastValue;
  }
};

// Fill the result array by calling the extractBiggest function 15 times
for (let i = 0; i < 15; i++) {
  result.push(extractBiggest());
}

// final result array which will be added to the empty array we created 
console.log(result);
