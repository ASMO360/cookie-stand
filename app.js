'use strict';


//1st and Pike Store
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3
  custPerHr: function() {
    return Math.random() * (this.minCust, this.maxCust) + this.maxCust;
  };
};

// SeaTac Airport
var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2
};

//Seattle Center
var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7
};

//Capitol Hill
var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3
};

//Alki
var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6
};
