let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => {
  const isString = typeof calculated === 'string'; // triple equals (===) for comparison
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated; // Use parseInt to convert the numerical string to a number
  calculated = calculatedAsNumber + 1; // Update the value of calculated
}

const calcUser = () => {
  logCalc(); 
  // Call logCalc function to update calculated
  
  // Check if calculated is greater than 2, set user to 'John'
  if (calculated > 2) user = 'John'; 

  // Check if calculated is greater than 2, set state to 'requesting'
  if (calculated > 2) state = 'requesting'; 

  // Check if calculated is greater than 3, set state to 'idle'
  if (calculated > 3) state = 'idle'; 
}

const checkUser = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`); 
  }
}

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
