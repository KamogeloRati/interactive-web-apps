const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
        date: new Date(`${currentYear}-12-16`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`${currentYear}-01-04`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`${currentYear}-12-26`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`S ${currentYear}-01-01`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`${currentYear}-08-09`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(` ${currentYear}-09-24`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(` ${currentYear}-12-25 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(` ${currentYear}-06-16`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`${currentYear}-03-21`)
    },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

//check if there's a holiday with ID [9]
console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

// create a copy of the christmas holiday
let copied = { ...holidays[christmas] };

// Change name of christmas holiday to 'X-mas Day'
copied.name = 'X-mas Day';

// Set hours and minutes to midnight for Christmas date
copied.date.setHours(0);
copied.date.setMinutes(0);

// check if the new date is earliar than the original date
const isEarlier = copied.date < holidays[christmas].date;
if (isEarlier) holidays[christmas] = copied;

if (copied.date < holidays[christmas].date) {
  holidays[christmas] = copied;
  console.log('New date earlier: true');
} else {
  console.log('New date earlier: false');
}

// check if there's changes on the copied holiday
console.log('ID change:', holidays[christmas].id !== copied.id ? copied.id : false);
console.log('Name change:', holidays[christmas].name !== copied.name ? copied.name : false);
console.log('Date change:', holidays[christmas].date !== copied.date ? copied.date : false);

// Find the first and last holidays in the year by comparing the dates of all holidays  and format them as DD/MM/YYYY
const holidayDates = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = new Date(Math.min(...holidayDates));
const lastHolidayTimestamp = new Date(Math.max(...holidayDates));
const firstDay = String(firstHolidayTimestamp.getDate()).padStart(2, '0');
const firstMonth = String(firstHolidayTimestamp.getMonth() + 1).padStart(2, '0');
const lastDay = String(lastHolidayTimestamp.getDate()).padStart(2, '0');
const lastMonth = String(lastHolidayTimestamp.getMonth() + 1).padStart(2, '0');

console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

// Select a random holiday date and format it as DD/MM/YYYY
const randomHolidayId = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHolidayDate = holidays[randomHolidayId].date;
const randomDay = String(randomHolidayDate.getDate()).padStart(2, '0');
const randomMonth = String(randomHolidayDate.getMonth() + 1).padStart(2, '0');
console.log(`${randomDay}/${randomMonth}/${currentYear}`);
