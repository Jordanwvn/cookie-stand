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

console.log('1st and Pike array:',firstAndPike.genSales);
console.log('1st and Pike total:',firstAndPike.totalGenSales);



var seaTacAirport = {
  minCustomers: 3, //minimum customers per hour
  maxCustomers: 23, //maximum customers per hour
  avgCookies: 1.2, //average cookies sold per customer per hour
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

seaTacAirport.generateSales();

console.log('SeaTac Airport array:',seaTacAirport.genSales);
console.log('Seatac Airport total:',seaTacAirport.totalGenSales);



var seattleCenter = {
  minCustomers: 11, //minimum customers per hour
  maxCustomers: 38, //maximum customers per hour
  avgCookies: 3.7, //average cookies sold per customer per hour
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

seattleCenter.generateSales();

console.log('Seattle Center array:',seattleCenter.genSales);
console.log('Seattle Center total:',seattleCenter.totalGenSales);



var capitalHill = {
  minCustomers: 10, //minimum customers per hour
  maxCustomers: 38, //maximum customers per hour
  avgCookies: 2.3, //average cookies sold per customer per hour
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

capitalHill.generateSales();

console.log('Capital Hill array:',capitalHill.genSales);
console.log('Capital Hill total:',capitalHill.totalGenSales);



var alki = {
  minCustomers: 2, //minimum customers per hour
  maxCustomers: 16, //maximum customers per hour
  avgCookies: 4.6, //average cookies sold per customer per hour
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

alki.generateSales();

console.log('Alki array:', alki.genSales);
console.log('Alki total:', alki.totalGenSales);
