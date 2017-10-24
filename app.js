'use strict';

//set consturctor for creating each store:
var Store = function(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name; // location of store
  this.min = minCustomers; // minimum customers per day
  this.max = maxCustomers; // maximum customers per day
  this.avg = avgCookies; // averages amount of cookies bought per customer
  this.salesData = []; // array to hold the generated hourly sales
  this.dailySales = 0; // integer to hold the generated total daily sales
}

// method to generate a random number of customers for an hour
Store.prototype.rdmCustomers = function() {
  return Math.random() * (this.max - this.min) + this.min;
}

// method that will generate hourly and daily sales, while updating the array and integer defined in the constructor
Store.prototype.generateSales = function() {

  // starts by making the first item in the array the name of the store
  this.salesData.push('<td>' + this.name + '</td>');

  for (var i = 6; i <= 20; i++) {
    // generates the sales for the hour based on averages
    var hourlyGeneratedSales = Math.floor(this.rdmCustomers() * this.avg);

    // adds the generated hourly sales to the running total of the daily sales
    this.dailySales += hourlyGeneratedSales;

    // inputs the projected sales for this hour into the array of sales
    this.salesData.push('<td>' + hourlyGeneratedSales + ' cookies</td>');

    // if this is the last iteration, adds the daily sales to the array
    if(i === 20){
      this.salesData.push('<td>' + this.dailySales + ' cookies</td>');
    } // end if
  } // end for

  // inputs the hourly sales and daily totals on a table in the document

  //declares variables for collaborating with the DOM
  var table = document.getElementById('table-content');
  var newRow = document.createElement('tr');
  var newData;

  // goes through the array and adds the values to a table row
  for (var j = 0; j < this.salesData.length; j++) {

    newData = document.createElement('td');
    newData.innerHTML = this.salesData[j];
    table.appendChild(newData);

  } // end for
  table.appendChild(newRow);

} // end method

// creating the stores with their data supplied by Pat
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 23, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitalHill = new Store('Capital Hill', 10, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// calling the functions
firstAndPike.generateSales();
seaTacAirport.generateSales();
seattleCenter.generateSales();
capitalHill.generateSales();
alki.generateSales();
