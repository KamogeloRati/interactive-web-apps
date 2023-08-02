// Provided values, do not change these
firstName = 'John';
age = 35;
hobby = 'Coding';

// Define the logTwice function to log the provided parameter twice
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

// Rename the function "hobby" to "introduction" since "hobby" is a viriable
function introduction() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

// Call the renamed function "greet" instead of the original "hobby"
introduction();
