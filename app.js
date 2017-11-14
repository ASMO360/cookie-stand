'use strict';



//1st and Pike Store
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  dayTotal: 0,
  hourlyCookie: [],
  cPh: function(){
    return Math.round((Math.random()) * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
  }
};


for(var i = 15; i > 0; i--){
  // var ranCph = Math.random();
  // var cPh = Math.round((ranCph) * (firstAndPike.maxCust - firstAndPike.minCust) + firstAndPike.minCust * firstAndPike.avgCookie);
  // console.log(cPh);
  firstAndPike.hourlyCookie.push(firstAndPike.cPh());
  // console.log('1st cookie push round:' + i + '.', firstAndPike.hourlyCookie);
  firstAndPike.dayTotal += firstAndPike.cPh();
}
document.write(firstAndPike.dayTotal += firstAndPike.cPh());
// var  hourlyCookie = firstAndPike.getElementById ('sixAm');




//
//
//
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
