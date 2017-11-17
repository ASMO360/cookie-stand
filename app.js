'use strict';

var reportHeader = document.getElementById('bus-name');
reportHeader.textContent = 'SALMON COOKIES - REPORTS';


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

//creating table*****************************
//an array for the hours for top row of table.
var hrs = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
//totals row stuff
var columnTotals = [];
var footTotals = 0;
var footerData = [];

function grabColumnDataA (colT) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[colT];
    columnTotals.push(parseInt(n));
    console.log('grabColumnDataA output:',n);
  }
}









function columnTotalsF(){
  for(var t = 0; t < columnTotals.length; t++) {
    footTotals += columnTotals[t];
    console.log('colomntotals in func: ',columnTotals[t]);
    console.log('footTotals: ', footTotals);
  }
  footerData.push(footTotals);
  console.log(footerData);
}

console.log('columnTotals', columnTotals);

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
    var bodyRow = tblRow(stores[j].storeName, stores[j].hourlyCookie, stores[j].dayTotal);
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

//totals bottom row
function tableFooter (){
  var tfootEl = document.createElement('tfoot');
  tfootEl.className = 'tbl-foot-bottom';
  tfootEl.id = 'sales-tbl-foot';
  var bottomRow = tblRow('', columnTotals, '');
  tfootEl.appendChild(bottomRow);
  return tfootEl;
}

tableMaker();

var formEl = document.getElementById('newStoreCreator');
function sentSubmit(event){
  event.preventDefault();
  console.log('event listener is working', event.target.newStore.value);
  var newStoreName = event.target.newStore.value;
  console.log('newStore', newStore);
  var newMinCust = parseInt(event.target.minCustomer.value);
  console.log('newMinCust', newMinCust);
  var newMaxCust = parseInt(event.target.maxCustomer.value);
  console.log('newMaxCust', newMaxCust);
  var newAvg = parseInt(event.target.avgCookieSold.value);
  console.log('newAvg', newAvg);
  var newStore = new Store(newStoreName, newMinCust, newMaxCust, newAvg);
  console.log('new store added into the array: ', stores);
  let tblEl = document.getElementById('sales-tbl');
  tblEl.innerHTML = '';
  tableMaker();
}

formEl.addEventListener('submit', sentSubmit);
