'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let myForm = document.getElementById('store-form');

let salesTable = document.getElementById('sales-table');

const cityArray = [];

function renderAllCities() {
  for (let i = 0; i < cityArray.length; i++) {
    cityArray[i].render();
  }
}

// HEADER ROW FUNCTION//
function headerFunction() {

  let headRow = document.createElement('tr');
  salesTable.appendChild(headRow);

  let cell = document.createElement('th');
  headRow.appendChild(cell);

  for (let i = 0; i < hours.length; i++) {
    let headCell = document.createElement('th');
    headCell.textContent = hours[i];
    headRow.appendChild(headCell);
  }

  let totalHeaderCell = document.createElement('th');
  totalHeaderCell.textContent = 'Daily Location Total';
  headRow.appendChild(totalHeaderCell);
}

//headerFunction();

//FOOTER Function //
function footerFunction() {
  //let table = document.querySelector('table');
  let footRow = document.createElement('tr');
  salesTable.appendChild(footRow);

  // created Total as a name
  let cell = document.createElement('td');
  cell.textContent = 'Totals';
  footRow.appendChild(cell);

  let totalCounter = 0;

  for (let i = 0; i < hours.length; i++) {
    let cell = document.createElement('td');
    let hourlyCounter = 0;

    for (let j = 0; j < cityArray.length; j++) {
      let city = cityArray[j];
      hourlyCounter += city.randomCookie[i];
    }

    totalCounter += hourlyCounter;
    cell.textContent = hourlyCounter;
    footRow.appendChild(cell);
  }

  // gave as total in daily location total
  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = totalCounter;
  footRow.appendChild(dailyTotal);
}

// CONSTRUCTION FUNCTION//

function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.randomCookie = [];
  this.totalCookies = 0;
}
// Prototype methods //
Store.prototype.randomGen = function(maxCust, minCust) {
  return Math.floor(Math.random () * (maxCust - minCust + 1) + minCust);
};
// prototype methods //
Store.prototype.render = function() {
  let chRow = document.createElement('tr');

  let cityName = document.createElement('td');
  cityName.textContent = this.name;
  chRow.appendChild(cityName);

  for (let i = 0; i < hours.length; i++) {
    let total = this.randomGen(this.maxCust, this.minCust) * this.avgCookie;
    let cookiesSold = Math.floor(total);
    this.randomCookie.push(cookiesSold);
    this.totalCookies += cookiesSold;

    let cookiesSoldPerHour = document.createElement('td');
    cookiesSoldPerHour.textContent = cookiesSold;
    chRow.appendChild(cookiesSoldPerHour);
  }

  let totalChart = document.createElement('td');
  totalChart.textContent = this.totalCookies;
  chRow.appendChild(totalChart);

  salesTable.appendChild(chRow);
};

// EXECUTABLE //

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

cityArray.push(seattle, tokyo, dubai, paris, lima);


function renderArrays() {
  for (let i = 0; i < cookieSalesArray.length; i++) {
    cookieSalesArray[i].render();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let storeName = event.target.storeName.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgCookieBought = parseFloat(event.target.avgCookieBought.value);

  let newStore = new Store(storeName, minCust, maxCust, avgCookieBought);

  salesTable.deleteRow(-1);

  cityArray.push(newStore);

  salesTable.textContent = '';
  headerFunction();
  renderAllCities();
  footerFunction();

  myForm.reset();
}

myForm.addEventListener('submit', handleSubmit);

// This is how we start the application and create first cookie table
headerFunction();
renderAllCities();
footerFunction();
