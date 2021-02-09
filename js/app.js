'use strict';

// get the each store element by id

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');


let seattle = {
  name: 'Seattle',
  minCustHourly: 23,
  maxCustHourly: 65,
  avgCookiesSoldPerCust: 6.3,
  cookiesSoldHourly: [],
  dailyStoreTotal: 0,

  randomCustHourly: function () {
    return Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly + 1) + this.minCustHourly);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldHourly: function () {
    for (let i = 0; i < hours.length; i++) {
      let custPerHour = this.randomCustHourly();
      //console.log(custPerHour);
      let hourlyTotal = Math.ceil(custPerHour * this.avgCookiesSoldPerCust);
      //console.log(hourlyTotal);
      //do something // return some math here
      //return Math.floor(this.custPerHour);
      this.cookiesSoldHourly.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
    console.log(this.cookiesSoldHourly);
  },
  // a method to render the list items
  render: function () {
    this.calcCookiesSoldHourly();
    console.log('this is render method');
    // do something
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `total: ${this.dailyStoreTotal} cookies`;
    seattleList.appendChild(li);
  }


};

let tokyo = {
  name: 'Tokyo',
  minCustHourly: 3,
  maxCustHourly: 24,
  avgCookiesSoldPerCust: 1.2,
  cookiesSoldHourly: [],
  dailyStoreTotal: 0,

  randomCustHourly: function () {
    return Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly + 1) + this.minCustHourly);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldHourly: function () {
    for (let i = 0; i < hours.length; i++) {
      let custPerHour = this.randomCustHourly();
      //console.log(custPerHour);
      let hourlyTotal = Math.ceil(custPerHour * this.avgCookiesSoldPerCust);
      //console.log(hourlyTotal);
      //do something // return some math here
      //return Math.floor(this.custPerHour);
      this.cookiesSoldHourly.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
    console.log(this.cookiesSoldHourly);
  },
  // a method to render the list items
  render: function () {
    this.calcCookiesSoldHourly();
    console.log('this is render method');
    // do something
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `total: ${this.dailyStoreTotal} cookies`;
    tokyoList.appendChild(li);
  }


};

let dubai = {
  name: 'Dubai',
  minCustHourly: 11,
  maxCustHourly: 38,
  avgCookiesSoldPerCust: 3.7,
  cookiesSoldHourly: [],
  dailyStoreTotal: 0,

  randomCustHourly: function () {
    return Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly + 1) + this.minCustHourly);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldHourly: function () {
    for (let i = 0; i < hours.length; i++) {
      let custPerHour = this.randomCustHourly();
      //console.log(custPerHour);
      let hourlyTotal = Math.ceil(custPerHour * this.avgCookiesSoldPerCust);
      //console.log(hourlyTotal);
      //do something // return some math here
      //return Math.floor(this.custPerHour);
      this.cookiesSoldHourly.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
    console.log(this.cookiesSoldHourly);
  },
  // a method to render the list items
  render: function () {
    this.calcCookiesSoldHourly();
    console.log('this is render method');
    // do something
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `total: ${this.dailyStoreTotal} cookies`;
    dubaiList.appendChild(li);
  }


};

let paris = {
  name: 'Paris',
  minCustHourly: 20,
  maxCustHourly: 38,
  avgCookiesSoldPerCust: 2.3,
  cookiesSoldHourly: [],
  dailyStoreTotal: 0,

  randomCustHourly: function () {
    return Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly + 1) + this.minCustHourly);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldHourly: function () {
    for (let i = 0; i < hours.length; i++) {
      let custPerHour = this.randomCustHourly();
      //console.log(custPerHour);
      let hourlyTotal = Math.ceil(custPerHour * this.avgCookiesSoldPerCust);
      //console.log(hourlyTotal);
      //do something // return some math here
      //return Math.floor(this.custPerHour);
      this.cookiesSoldHourly.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
    console.log(this.cookiesSoldHourly);
  },
  // a method to render the list items
  render: function () {
    this.calcCookiesSoldHourly();
    console.log('this is render method');
    // do something
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `total: ${this.dailyStoreTotal} cookies`;
    parisList.appendChild(li);
  }


};

let lima = {
  name: 'Lima',
  minCustHourly: 2,
  maxCustHourly: 16,
  avgCookiesSoldPerCust: 4.6,
  cookiesSoldHourly: [],
  dailyStoreTotal: 0,

  randomCustHourly: function () {
    return Math.floor(Math.random() * (this.maxCustHourly - this.minCustHourly + 1) + this.minCustHourly);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldHourly: function () {
    for (let i = 0; i < hours.length; i++) {
      let custPerHour = this.randomCustHourly();
      //console.log(custPerHour);
      let hourlyTotal = Math.ceil(custPerHour * this.avgCookiesSoldPerCust);
      //console.log(hourlyTotal);
      //do something // return some math here
      //return Math.floor(this.custPerHour);
      this.cookiesSoldHourly.push(hourlyTotal);
      this.dailyStoreTotal += hourlyTotal;
    }
    console.log(this.cookiesSoldHourly);
  },
  // a method to render the list items
  render: function () {
    this.calcCookiesSoldHourly();
    console.log('this is render method');
    // do something
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourly[i]} cookies`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `total: ${this.dailyStoreTotal} cookies`;
    limaList.appendChild(li);
  }


};



// Executable code
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
