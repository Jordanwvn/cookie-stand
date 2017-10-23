'use strict';

//set objects for each store:

var firstAndPike = {
  minCustomers: 23, //minimum customers per hour
  maxCustomers: 65, //maximum customers per hour
  avgCookies: 6.3, //average cookies sold per customer per hour
  totalGenSales: 0, // counter to keep track of total sales
  genSales: [], //array for generated hours

  //function
  rdmCustomers: function() {
    return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
  }, //end method

  // generates random sales per hour and puts it in the genSales array
  generateSales: function() {
    for (var i = 6; i <= 20; i++) {

      // sets time equal to a 12 hour clock
      var time = i % 12;
      if(time === 0) {
        time = 12;
      }
      // decides if the time should be trailed by AM or PM
      var amPm = 'AM';
      if(i >= 12) {
        amPm = 'PM';
      }

      var randomAverage = Math.floor(this.rdmCustomers() * this.avgCookies);

      // adds to the running total of the hourly sales
      this.totalGenSales += randomAverage;

      // input the projected sales for this hour into the array
      this.genSales.push(time + ' ' + amPm + ': ' + randomAverage + ' cookies');

      // if this is the last iteration, add the total to the array
      if(i === 20){
        this.genSales.push('Total: ' + this.totalGenSales + ' cookies');
      }

      //console.log('array:',this.genSales);
      //console.log('total:',this.totalGenSales);
    }
  }
} // end object

firstAndPike.generateSales();

console.log('array:',firstAndPike.genSales);
console.log('total:',firstAndPike.totalGenSales);
