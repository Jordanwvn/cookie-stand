'use strict';

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM']; // business hours
var storeArray = []; // array to hold all store objects
var form = document.getElementById('store-form'); //

//consturctor for creating each store:
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
Store.prototype.render = function() {
  this.salesData.push(this.name); // pushes the name to the leftmost cell

  for (var i = 0; i < storeHours.length; i++) { // for every hour of sales
    var hourlyGeneratedSales = Math.floor(this.rdmCustomers() * this.avg); // generate hourly sales
    this.salesData.push(hourlyGeneratedSales); // add hourly sales to the array of sales
    this.dailySales += hourlyGeneratedSales; // add hourly sales to daily sales
    if(i === storeHours.length - 1){ // if this is the last iteration
      this.salesData.push(this.dailySales); // add total sales to the array of sales
    } // end if
  } // end for

  // inputs the hourly sales and daily totals on a table in the document

  //declares variables for collaborating with the DOM
  var table = document.getElementById('table-body');
  var tableRow = document.createElement('tr');
  var tableData;

  // goes through the array and adds the values to a table row
  for (var j = 0; j < this.salesData.length; j++) {

    tableData = document.createElement('td');
    tableData.innerHTML = this.salesData[j];
    table.appendChild(tableData);

  } // end for
  table.appendChild(tableRow);

} // end method

var makeHeader = function() {
  var header = document.getElementById('table-header');
  var headerRow = document.createElement('tr');
  var headerData;

  headerData = document.createElement('th');
  headerData.innerHTML = '';
  header.appendChild(headerData)

  for (var k = 0; k < storeHours.length; k++) {

    headerData = document.createElement('th');
    headerData.innerHTML = storeHours[k];
    header.appendChild(headerData);

  } // end for

  headerData = document.createElement('th');
  headerData.innerHTML = 'Daily Location Total';
  header.appendChild(headerData);

  header.appendChild(headerRow);
} // end makeHeader function


// var makeFooter = function(stores) {
//   var footer = document.getElementById('table-footer');
//   var table = document.getElementById('table');
//   var footerRow = document.createElement('tr');
//   var footerData;
//
//   footerData = document.createElement('th');
//   footerData.innerHTML = 'Totals';
//   footer.appendChild(footerData);
//
//   for (var l = 1; l < salesData.length + 2; l++) {
//
//     footerData = document.createElement('td');
//     var hourlyTotal = 0;
//
//     for (var m = 0; m < storeArray.length; m++) {
//       hourlyTotal += storeArray[m].salesData[l];
//     } // end m for
//
//     footerData.innerHTML = hourlyTotal;
//     footer.appendChild(footerData);
//   } // end l for
//   footer.appendChild(footerRow);
// } // end makeFooter function

// combines the table functions to one print command
// var printTable = function() {
//   makeHeader();
//   for (var n = 0; n < storeArray.length; n++) {
//     storeArray[n].render();
//   };
//   makeFooter(storeArray);
// }


function formTable(event) {
  event.preventDefault();

  //makes a header for only the first value entered
  if (storeArray.length === 0){
    makeHeader();
  }

  var name = event.target.store.value;
  var minCustomers = event.target.min.value;
  var maxCustomers = event.target.max.value;
  var avgCookieSales = event.target.avg.value;

  storeArray.push(new Store(name, minCustomers, maxCustomers, avgCookieSales));
  // printTable();
  storeArray[storeArray.length-1].render();
  // makeFooter();
  form.reset();
}

// creating the stores with their data supplied by Pat
//var storeArray = [new Store('1st and Pike', 23, 65, 6.3), new Store('SeaTac Airport', 3, 23, 1.2), new Store('Seattle Center', 11, 38, 3.7), new Store('Capital Hill', 10, 38, 2.3), new Store('Alki', 2, 16, 4.6)];

// calling the print function
form.addEventListener('submit', formTable);
