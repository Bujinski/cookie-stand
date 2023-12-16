'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeSection  = document.getElementById('stores');

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  customerNumber: 0, //will hold a random number of customers
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNum: function () {
    this.customerNumber = this.randomNumCustomer (this.minCust, this.maxCust);
    return this.customerNumber;
  },

  cookiePurchase: [],
  totalCookies: 0,

  render: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.ceil(this.avgCookieBought * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieItem = document.createElement('li');
      cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      storeList.appendChild(cookieItem);
    }
    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
    storeList.appendChild(cookieTotal);
  },

};

seattle.render(); //to invoke the code

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  customerNumber: 0, //will hold a random number of customers
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNum: function () {
    this.customerNumber = this.randomNumCustomer (this.minCust, this.maxCust);
    return this.customerNumber;
  },

  cookiePurchase: [],
  totalCookies: 0,

  render: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.ceil(this.avgCookieBought * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieItem = document.createElement('li');
      cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      storeList.appendChild(cookieItem);
    }
    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
    storeList.appendChild(cookieTotal);
  },

};

tokyo.render();

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  customerNumber: 0, //will hold a random number of customers
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNum: function () {
    this.customerNumber = this.randomNumCustomer (this.minCust, this.maxCust);
    return this.customerNumber;
  },

  cookiePurchase: [],
  totalCookies: 0,

  render: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.ceil(this.avgCookieBought * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieItem = document.createElement('li');
      cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      storeList.appendChild(cookieItem);
    }
    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
    storeList.appendChild(cookieTotal);
  },

};

dubai.render();

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  customerNumber: 0, //will hold a random number of customers
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNum: function () {
    this.customerNumber = this.randomNumCustomer (this.minCust, this.maxCust);
    return this.customerNumber;
  },

  cookiePurchase: [],
  totalCookies: 0,

  render: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.ceil(this.avgCookieBought * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);

    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieItem = document.createElement('li');
      cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      storeList.appendChild(cookieItem);
    }
    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
    storeList.appendChild(cookieTotal);
  },

};

paris.render();

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  customerNumber: 0, //will hold a random number of customers
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNum: function () {
    this.customerNumber = this.randomNumCustomer (this.minCust, this.maxCust);
    return this.customerNumber;
  },

  cookiePurchase: [],
  totalCookies: 0,

  render: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookiesBought = Math.ceil(this.avgCookieBought * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
      this.cookiePurchase.push(cookiesBought);
    }
    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    storeSection.appendChild(storeHeading);

    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);
    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieItem = document.createElement('li');
      cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      storeList.appendChild(cookieItem);
    }
    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
    storeList.appendChild(cookieTotal);
  },

};
lima.render();
