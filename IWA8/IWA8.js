const leoName = 'Leo Musvaire';
const leoSurname = 'Musvaire'; 
const leoNumber = '2';
const leoStreet = 'Church St.';
const leoPostal = '3105';
const leoBalance = '-10';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';
const sarahNumber = '13';
const sarahStreet = 'William Close';
const sarahPostal = '0310';

// Only change below this line

//Concatinate name and surname 
const leo = {
  name: leoName + ' ' + leoSurname, 
  balance: leoBalance,
  'access id': '47afb389-8014-4d0b-aff3-e40203d2107f', 
  age: 24,
  address: {
    number: leoNumber,
    street: leoStreet,
    'postal-code': leoPostal,  // quote property with hyphen
  },
};

const sarah = {
  name: sarahName + ' ' + sarahSurname, // Concatenate first name and surname
  age: 62,
  'access id': '6b279ae5-5657-4240-80e9-23f6b635f7a8', 
  balance: sarahBalance,
  address: {
    number: sarahNumber,
    street: sarahStreet,
    'postal-code': sarahPostal, // quotes for property with hyphen
  },
};

// nested object properties u
console.log(leo, leo['address']['postal-code']); 

 // nested object properties 
console.log(sarah, sarah['address']['postal-code']);
