'use strict';

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM']; // array of business hours
var storeArray = []; // array to hold all store objects
var form = document.getElementById('store-form'); // gets the element of from to access the DOM
var table = document.getElementById('table-body'); // find the body of the table


//consturctor for creating each store:
var Store = function(name, minCustomers, maxCustomers, avgCookies) { // constructor: make stores
  this.name = name; // location of store
  this.min = minCustomers; // minimum customers per day
  this.max = maxCustomers; // maximum customers per day
  this.avg = avgCookies; // averages amount of cookies bought per customer
  this.salesData = []; // array to hold the generated hourly sales
  this.dailySales = 0; // integer to hold the generated total daily sales
} // end Store constructor


Store.prototype.rdmCustomers = function() { // method: generate random number of customers for an hour
  return Math.random() * (this.max - this.min) + this.min; // return random amount between min and max
} // end rdmCustomers method


Store.prototype.generateSales = function() { // method: generate and store both hourly and daily sales
  for (var i = 0; i < storeHours.length; i++) { // for every hour of sales...
    var hourlyGeneratedSales = Math.floor(this.rdmCustomers() * this.avg); // generate hourly sales
    console.log('sales:', hourlyGeneratedSales);
    this.salesData.push(hourlyGeneratedSales); // add hourly sales to the array of sales
    this.dailySales += hourlyGeneratedSales; // add hourly sales to daily sales
  } // end for
} // end generateSales method

var createCell = function (input){ // function: fill a cell with the input value
  var cell = document.createElement('td'); // create a new cell
  cell.innerHTML = input; // fill that cell with the input argument
  table.appendChild(cell); // append the cell
} // end createCell function

Store.prototype.render = function() { // method: output store data into a table
  var tableRow = document.createElement('tr'); // create a new row
  createCell(this.name); // start the row with the name of the store
  for (var j = 0; j < this.salesData.length; j++) { // for every generated hourly sales...
    createCell(this.salesData[j]); // create a cell filled with the appropriate hourly sales
  } // end for loop
  createCell(this.dailySales); // end the row with the total sum of those sales
  table.appendChild(tableRow); // append the row those cells were in
} // end render method


var makeHeader = function() { // function: create a header using store hours
  var header = document.getElementById('table-header'); // find the header of the table
  var headerRow = document.createElement('tr'); // create a new row
  var headerData; // declare a variable to be used to fill the cells in this row

  headerData = document.createElement('th'); // create a new cell
  headerData.innerHTML = ''; // leave it empty, so the data aligns
  header.appendChild(headerData); // append the cell

  for (var k = 0; k < storeHours.length; k++) { // for every business hour...
    headerData = document.createElement('th'); // create a new cell
    headerData.innerHTML = storeHours[k]; // fill the cell with the corresponding business hour
    header.appendChild(headerData); // append the cell
  } // end for loop

  headerData = document.createElement('th'); // create a new cell
  headerData.innerHTML = 'Daily Location Total'; // fill the cell with "daily location total"
  header.appendChild(headerData); // append the cell

  header.appendChild(headerRow); // append the row
} // end makeHeader function


function formTable(event) { // function: generate the table upon form submission
  event.preventDefault(); // do not refresh the page upon form submission
  if (storeArray.length === 0){ // if this is the first time the table is generated...
    makeHeader(); // make the header
  } // end if

  var name = event.target.store.value; // get the store name from the form
  var minCustomers = parseInt(event.target.min.value); // get the minimum customers from the form
  var maxCustomers = parseInt(event.target.max.value); // get the maximum customers from the form
  var avgCookieSales = event.target.avg.value; // get the average sales per customer from the form

  storeArray.push(new Store(name, minCustomers, maxCustomers, avgCookieSales)); // generate a store object
  storeArray[storeArray.length-1].generateSales(); // generate the sales of that store
  storeArray[storeArray.length-1].render(); // output those sales to a table row
  form.reset(); // reset the form so the user can input another location if desired
} // end formTable function


form.addEventListener('submit', formTable); // if the form is submitted, run formTable
