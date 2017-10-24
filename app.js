'use strict';

var storeHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM']; // business hours

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
Store.prototype.render = function() {

  // starts by making the first item in the array the name of the store
  this.salesData.push(this.name);

  for (var i = 6; i <= 20; i++) {
    // generates the sales for the hour based on averages
    var hourlyGeneratedSales = Math.floor(this.rdmCustomers() * this.avg);

    // adds the generated hourly sales to the running total of the daily sales
    this.dailySales += hourlyGeneratedSales;

    // inputs the projected sales for this hour into the array of sales
    this.salesData.push(hourlyGeneratedSales);

    // if this is the last iteration, adds the daily sales to the array
    if(i === 20){
      this.salesData.push(this.dailySales);
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


var makeFooter = function(stores) {
  var footer = document.getElementById('table-footer');
  var footerRow = document.createElement('tr');
  var footerData;

  footerData = document.createElement('th');
  footerData.innerHTML = 'Totals';
  footer.appendChild(footerData);

  for (var l = 1; l < storeHours.length + 2; l++) {

    footerData = document.createElement('td');
    var hourlyTotal = 0;

    for (var m = 0; m < storeArray.length; m++) {
      hourlyTotal += storeArray[m].salesData[l];
    } // end m for

    footerData.innerHTML = hourlyTotal;
    footer.appendChild(footerData);
  } // end l for
  footer.appendChild(footerRow);
} // end makeFooter function

// creating the stores with their data supplied by Pat
// var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
// var seaTacAirport = new Store('SeaTac Airport', 3, 23, 1.2);
// var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
// var capitalHill = new Store('Capital Hill', 10, 38, 2.3);
// var alki = new Store('Alki', 2, 16, 4.6);

var storeArray = [new Store('1st and Pike', 23, 65, 6.3), new Store('SeaTac Airport', 3, 23, 1.2), new Store('Seattle Center', 11, 38, 3.7), new Store('Capital Hill', 10, 38, 2.3), new Store('Alki', 2, 16, 4.6)];

// calling the functions
makeHeader();
storeArray[0].render();
storeArray[1].render();
storeArray[2].render();
storeArray[3].render();
storeArray[4].render();
makeFooter(storeArray);
