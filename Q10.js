"use strict";
// Q No.10.	Write a program that takes the number of units consumed 
// by a user if it is greater than 100 then add 10% tax if greater 
// than 200 then add 15% of tax so on up to if greater than 500 then 
// add 25% of tax. Where the tax amount will be calculated by the 
// amount of bill.
var unitsConsumed = 200;
var unitPrice = 5;
var billAmount = unitsConsumed * unitPrice;
var tax1 = 10 / billAmount * 100;
if (unitsConsumed > 100) {
    console.log("Total bil with 10% Tax is", (billAmount + tax1));
}
else {
}
