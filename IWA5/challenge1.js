const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = 0;

const userLocation = 'RSA';
const currency = 'R';

let shipping = null;
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
let customers = 1;


if (userLocation === 'RSA') {
  shipping = 400;
} else if (userLocation === 'NAM') {
  shipping = 600;
} else {
  shipping = 800;
}

const totalCost = shoes + toys + shirts + batteries + pens;


if (totalCost >= 1000 && customers === 1) {
  if (userLocation === 'RSA' || userLocation === 'NAM') {
    shipping = 0;
  }
}


if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (userLocation === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('Price:', currency, totalCost + shipping);
}
