'use strict';


// VARIABLE DECLARATIONS


var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM']; // array of business hours
var storeArray = []; // array to hold all store objects


// DOM CALLS


var form = document.getElementById('store-form'); // gets the element of from to access the DOM
var table = document.getElementById('table-body'); // find the body of the table
var header = document.getElementById('table-header'); // find the header of the table
var footer = document.getElementById('footer-row');


// CONSTRUCTOR


// consturctor for creating each store:
var Store = function(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name; // location of store
  this.min = minCustomers; // minimum customers per day
  this.max = maxCustomers; // maximum customers per day
  this.avg = avgCookies; // averages amount of cookies bought per customer
  this.salesData = []; // array to hold the generated hourly sales
  this.dailySales = 0; // integer to hold the generated total daily sales
} // end Store constructor


// PROTOTYPE METHODS


// method: generate random number of customers for an hour
Store.prototype.rdmCustomers = function() {
  return Math.random() * (this.max - this.min) + this.min; // return random amount between min and max
} // end rdmCustomers method


// method: generate and store both hourly and daily sales
Store.prototype.generateSales = function() {
  for (var i = 0; i < storeHours.length; i++) { // for every hour of sales...
    var hourlyGeneratedSales = Math.floor(this.rdmCustomers() * this.avg); // generate hourly sales
    this.salesData.push(hourlyGeneratedSales); // add hourly sales to the array of sales
    this.dailySales += hourlyGeneratedSales; // add hourly sales to daily sales
  } // end for
} // end generateSales method


// HELPER FUNCTIONS


// function: for each hour, add a table cell with the sum of all store sales during that hour
var makeHourlySums = function() {
  var hourlySum = ''; // reset the sum
  for (var hour = 0; hour < storeHours.length; hour++) { // for every hour...
    var runningTotal = 0; // set a running total to zero
    for (var store = 0; store < storeArray.length; store++) { // then, for every store...
      runningTotal += storeArray[store].salesData[hour]; // add to the running total
    } // end store loop
    hourlySum += '<td>' + runningTotal + '</td>'; // fill the hourly sum with the final running total
  }  // end hour loop
  return hourlySum; // return the hourly sum
} // end sumSales function


// function: generate a table cell with the current sum of daily sales of all stores
var makeDailySum = function() {
  var dailySum = 0; // set the counter to 0
  for (var o = 0; o < storeArray.length; o++) { // for every store location...
    dailySum += storeArray[o].dailySales; // add the daily sales to the counter
  } // end for
  return '<td>' + dailySum + '</td>'; // return the counter
} // end sumSums function


// function: make a footer for the table
var makeFooter = function () {
  footer.innerHTML = ''; // clear the previous footer
  footer.innerHTML = '<th>Totals</th>' + makeHourlySums() + makeDailySum(); // fill the footer with generated totals
} // end makeFooter function


// function: fill a cell with the input value
var createCell = function (input, parent, type){
  var cell = document.createElement(type); // create a new cell
  cell.innerHTML = input; // fill that cell with the input argument
  parent.appendChild(cell); // append the cell
} // end createCell function


// function: create a header using store hours
var makeHeader = function() {
  var headerRow = document.createElement('tr'); // create a new row
  createCell('', header, 'th'); // start the row with a blank cell
  for (var k = 0; k < storeHours.length; k++) { // for every business hour...
    createCell(storeHours[k], header, 'th'); // create a cell with store hours
  } // end for loop
  createCell('Daily Location Total', header, 'th'); // end the row with 'daily location total'
  header.appendChild(headerRow); // append the row
} // end makeHeader function


// function: output store data into a table
var render = function(store) {
  var tableRow = document.createElement('tr'); // create a new row
  createCell(store.name, table, 'td'); // start the row with the name of the store
  for (var j = 0; j < store.salesData.length; j++) { // for every generated hourly sales...
    createCell(store.salesData[j], table, 'td'); // create a cell filled with the appropriate hourly sales
  } // end for loop
  createCell(store.dailySales, table, 'td'); // end the row with the total sum of those sales
  table.appendChild(tableRow); // append the row those cells were in
} // end render method


// EVENT HANDLER


// function: generate the table upon form submission
function formTable(event) {
  event.preventDefault(); // do not refresh the page upon form submission
  if (storeArray.length === 0){ // if this is the first time the table is generated...
    makeHeader(); // make the header
} // end if
  var name = event.target.store.value; // get the store name from the form
  var min = parseInt(event.target.min.value); // get the minimum customers from the form
  var max = parseInt(event.target.max.value); // get the maximum customers from the form
  var avg = event.target.avg.value; // get the average sales per customer from the form
  storeArray.push(new Store(name, min, max, avg)); // generate a store object from those values
  storeArray[storeArray.length-1].generateSales(); // generate the sales of that store
  render(storeArray[storeArray.length-1]); // output those sales to a table row
  makeFooter(); // output the sums of all sales in a row of totals
  form.reset(); // reset the form so the user can input another location if desired
} // end formTable function


// EVENT LISTENER


form.addEventListener('submit', formTable); // if the form is submitted, run formTable
