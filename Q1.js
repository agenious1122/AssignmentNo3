"use strict";
// Q1 - Write a program to convert the temperature 
// from Celsius to Fahrenheit and vice verse.C = (F − 32) × 5⁄9
//F = C(9⁄5) + 32
var temp = 96;
var cels = (temp - 32) * 5 / 9;
console.log("The temprature in celsiusis is", cels);
var faranH = (temp * 5 / 9) + 32;
console.log("The temprature in Faranhite is", faranH);
