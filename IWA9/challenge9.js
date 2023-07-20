const salary = 4000;
const lodging = 'apartment';
const size = 'large';

// changing of syntax

const expenses = {
  food: 51.7501,
  transport: 10.2,
};

const tax = {
  734: '3%',
  234: '20%',
  913: '12%',
  415: '38%',
  502: '42%',
};

const rent = {
  none: 0,
  'small-room': 200,
  'large-room': 300,
  'small-apartment': 400,
  'large-apartment': 800,
  'small-house': 1200,
  'large-house': 2400,
};



const taxAsDecimal = parseFloat(tax['913']) / 100;
const startingAfterTax = salary * (1 - taxAsDecimal);
const type = `${lodging}-${size}`; // Use template literals to create the type variable
const balance = startingAfterTax - expenses['transport'] - expenses['food'] - rent[type];
console.log(balance.toFixed(2));