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
var footData = [];

//totals for column
function grabColumnData (z) {
  for(var m = 0; m < stores.length; m++) { //pushes hourly cookie data into array
    var n = stores[m].hourlyCookie[z];
    columnTotals.push(parseInt(n));
    console.log('grabColumnDataA output:',n);
  }
  console.log('columnTotals', columnTotals); //sums the array of hourly cookie data
  function columnTotalsF(){
    for(var t = 0; t < columnTotals.length; t++) {
      footTotals += columnTotals[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  console.log('pop columnTotals', columnTotals);
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData(0);

//totals for column
var columnTotals1 = [];
function grabColumnData1 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals1.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  console.log('columnTotals1', columnTotals);
  function columnTotalsF(){
    for(var t = 0; t < columnTotals1.length; t++) {
      footTotals += columnTotals1[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData1(1);

//totals for column
var columnTotals2 = [];
function grabColumnData2 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals2.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals2.length; t++) {
      footTotals += columnTotals2[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData2(2);

//totals for column
var columnTotals3 = [];
function grabColumnData3 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals3.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals3.length; t++) {
      footTotals += columnTotals3[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData3(3);

//totals for column
var columnTotals4 = [];
function grabColumnData4 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals4.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals4.length; t++) {
      footTotals += columnTotals4[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData4(4);

//totals for column
var columnTotals5 = [];
function grabColumnData5 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals5.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals5.length; t++) {
      footTotals += columnTotals5[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData5(5);

//totals for column
var columnTotals6 = [];
function grabColumnData6 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals6.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals6.length; t++) {
      footTotals += columnTotals6[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData6(6);

//totals for column
var columnTotals7 = [];
function grabColumnData7 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals7.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals7.length; t++) {
      footTotals += columnTotals7[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData7(7);

//totals for column
var columnTotals8 = [];
function grabColumnData8 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals8.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals8.length; t++) {
      footTotals += columnTotals8[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData8(8);

//totals for column
var columnTotals9 = [];
function grabColumnData9 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals9.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals9.length; t++) {
      footTotals += columnTotals9[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData9(9);

//totals for column
var columnTotals10 = [];
function grabColumnData10 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals10.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals3.length; t++) {
      footTotals += columnTotals10[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData10(10);

//totals for column
var columnTotals11 = [];
function grabColumnData11 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals11.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals11.length; t++) {
      footTotals += columnTotals11[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData11(11);

//totals for column
var columnTotals12 = [];
function grabColumnData12 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals12.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals12.length; t++) {
      footTotals += columnTotals12[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData12(12);

//totals for column
var columnTotals13 = [];
function grabColumnData13 (z) {
  for(var m = 0; m < stores.length; m++) {
    var n = stores[m].hourlyCookie[z];
    columnTotals13.push(parseInt(n));
    console.log('grabColumnData output:',n);
  }
  function columnTotalsF(){
    for(var t = 0; t < columnTotals13.length; t++) {
      footTotals += columnTotals13[t];
    }
    console.log('footTotals: ', footTotals);
    footData.push(footTotals);
  }
  console.log('footData array: ', footData);
  columnTotalsF();
  footTotals = 0;
  console.log('zeroing footTotals', footTotals);
}
grabColumnData13(13);

//Next time I would figureout a Constructor to do the totals. #makeItWork

//ADDING TABLE

function tableMaker() {
  var tblEl = document.getElementById('sales-tbl');
  var header = tableHead();
  var body = tableBody();
  var footer = tableFooter();
  tblEl.appendChild(header);
  tblEl.appendChild(body);
  tblEl.appendChild(footer);
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
  var bottomRow = tblRow('Totals', footData, '');
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
