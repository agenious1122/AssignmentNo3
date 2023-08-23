// Q5 - Create a program that determines the category of a user-provided 
// age. If the age is between 0 and 12, print "Child." 
// If it's between 13 and 19, print "Teenager." Otherwise, 
// print "Adult."
var age:number=25
if(age>=0 && age<=12){
    console.log("You are a Child")
}
else if(age>12 && age<=19)
{
    console.log("You are a Teenager")
}
else
{
    console.log("You are an Adult")
}