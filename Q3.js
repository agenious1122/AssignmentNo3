"use strict";
// Q3 - Write a program that converts given number of 
// days in to weeks and days such as 17 days = 2 weeks and 3 days.
var num1 = 91;
var weeks = num1 / 7;
var roundWeeks = Math.floor(weeks);
var days = num1 % 7;
console.log(roundWeeks, "weeks and", days, "Days");
