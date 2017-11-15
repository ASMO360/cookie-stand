'use strict';

var stores = [];

function Store(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
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


//instantiation
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

//Creating array with the store name, hourly cookie totals, and daily totals info for the rows
//pushing name into 1st cell
console.log('alki.storeName', alki.storeName);
var rowAlki = [];
rowAlki.push(alki.storeName);
console.log ('row alki array: ',rowAlki);


//pushing cookie data into array
//this is not working!!!!!!
console.log('alki.hourlyCookie: ', alki.hourlyCookie);
var alkiCoookieData = function(){
  for(var k = 0; k > 15; k++) {
    return rowAlki.push(alki.hourlyCookie[k]);
  }
  console.log('rowAlki2ndpass', rowAlki);
};
alkiCoookieData();


//pushing total to array
rowAlki.push(alki.dayTotal);
console.log('rowAlki final array:', rowAlki);


//creating table*****************************
//an array for the hours for top row of table.
var hrs = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
//ADDING TABLE

function tableMaker() {
  var tblEl = document.getElementById('sales-tbl');
  var header = tableHead();
  var body = tableBody();
  tblEl.appendChild(header);
  tblEl.appendChild(body);
}
//create table header
function tableHead() {
  var theadEl = document.createElement('thead');
  theadEl.className = 'tbl-head-top';
  theadEl.id = 'sales-tbl-head';
  var topRow = tblRow('', hrs, 'Totals');
  theadEl.appendChild(topRow);
  return theadEl;
}

//create table body
function tableBody() {
  var tbodyEl = document.createElement('tbody');
  for(var j = 0; j < stores.length; j++) {
    var bodyRow = tblRow(stores[j].name, stores[j].hourlyCookie, stores[j].dayTotal);
    tbodyEl.appendChild(bodyRow);
  }
  return tbodyEl;
}

//function to create tablerows
function tblRow (storeInfo, cookieInfo, totalsInfo) {
  var tREl = document.createElement('tr');
  var tDElhead = document.createElement('td');
  tDElhead.textContent = storeInfo;
  tREl.appendChild(tDElhead);

  for(var i = 0; i < cookieInfo.length; i++){
    var tDELhead2 = document.createElement('td');
    tDELhead2.textContent = cookieInfo[i];
    tREl.appendChild(tDELhead2);
  }

  var tDElhead3 = document.createElement('td');
  tDElhead3.textContent = totalsInfo;
  tREl.appendChild(tDElhead3);

  return tREl;
}

tableMaker();









// var trheadEl = document.createElement('tr');
// console.log('tr head creation: ',trheadEl);
// trheadEl.className = 'tbl-head-row';
// trheadEl.id = 'sales-tbl-head-row';
// theadEl.appendChild(trheadEl);
//
// for(var i = 0; i < 16; i++) {
//   var tdheadEl = document.createElement('td');
//   console.log('td head creation: ',tdheadEl);
//   tdheadEl.textContent = hrs[i];
//   trheadEl.appendChild(tdheadEl);
// }
//
// var tbodyEl = document.createElement('tbody');
// console.log('tbody', tbodyEl);
// tbodyEl.className = 'tbl-body';
// tbodyEl.id = 'sales-tbl-body';
// tblEl.appendChild(tbodyEl);
//
// var tRbodyEl1 = document.createElement('tr');
// console.log('tRbody row 1', tRbodyEl1);
// tRbodyEl1.className = 'tbl-body-row1';
// tRbodyEl1.id = 'sales-tbl-body-row1';
// tbodyEl.appendChild(tRbodyEl1);
//
//
// //First and Pike table info
// for(var j = 0; i < 16; i++) {
//   var tDbody = document.createElement('td');
//   console.log('tDbody loop', tDbody);
//   tDbody.textContent = Store.alki.hourlyCookie[j];
//   tRbodyEl1.appendChild(tDbody);
// }

//test to create a header via JS
var reportHeader = document.getElementById('bus-name');
reportHeader.textContent = 'SALMON COOKIES - REPORTS';
