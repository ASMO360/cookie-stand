'use strict';

var stores = [];

function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.dayTotal = 0;
  this.hourlyCookie = [];
  this.hourlyCookiePusher();
  stores.push(this);
}

Store.prototype.randomCookiePerHour = function() {
  return Math.round((Math.random()) * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
};

Store.prototype.hourlyCookiePusher = function(){
  for(var i = 14; i > 0; i--){
    var cPh = this.randomCookiePerHour();
    this.hourlyCookie.push(cPh);
    this.dayTotal += cPh;//daily total
  }
};

var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
console.log('store name: ', firstAndPike);
console.log('stores',stores);

var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
console.log('store name: ', seaTac);
console.log('stores',stores);

var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
console.log('store name: ', seaCenter);
console.log('stores',stores);

var capHill = new Store('Capitol Hill', 20, 38, 2.3);
console.log('store name: ', capHill);
console.log('stores',stores);

var alki = new Store('Alki', 2, 16, 4.6);
console.log('store name: ', alki);
console.log('stores',stores);

var fillTableEL = document.getElementById('sales-toprow');
var topcelldataEl = document.createElement('td');
topcelldataEl.className = 'top-row-cells';
topcelldataEl.id = 'tbl-head-top';
fillTableEL.appendChild(fillTableEL);

for(var i = )








//
//
//
//
//
//
//
//
// //1st and Pike Store
// var firstAndPike = {
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   dayTotal: 0,
//   hourlyCookie: [],
//   //get the cookies per hour inside the object!!
//   cPh: function(){
//     return Math.round((Math.random()) * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
//   }
// };
//
// function cPh(){
//   return Math.round((Math.random()) * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
// };
//
// for(var i = 15; i > 0; i--){
//   //old code commented out incase I need to refer to it for the time being.
//   // var ranCph = Math.random();
//   // var cPh = Math.round((ranCph) * (firstAndPike.maxCust - firstAndPike.minCust) + firstAndPike.minCust * firstAndPike.avgCookie);
//   // console.log(cPh);
//   firstAndPike.hourlyCookie.push(firstAndPike.cPh());
//   // console.log('1st cookie push round:' + i + '.', firstAndPike.hourlyCookie);
//   firstAndPike.dayTotal += firstAndPike.cPh();
// }
// document.write(firstAndPike.dayTotal += firstAndPike.cPh());
// // var  hourlyCookie = firstAndPike.getElementById ('sixAm');
//
// //document.getElementByTagName('li')
// document.getElementById('firstPike').innerhtml
//
//
// // SeaTac Airport
// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2
// };
//
// //Seattle Center
// var seaCenter = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7
// };
//
// //Capitol Hill
// var capHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3
// };
//
// //Alki
// var Alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6
// };
