// Q No.7.	Write a program that checks if the given number 
// is  divisible by 3 or 5 or both or not divisible by anyone 
// show output accordingly.
var num:number=20
if (num%3==0 && num%5==0) 
{
    console.log("The given number is divisible by 5 and 3 both")    
} 
else if (num%3==0 && num%5!=0) 
{
    console.log("The given number is divisible by 3 but not by 5")        
}
else if (num%3!=0 && num%5==0) 
{
    console.log("The given number is divisible by 5 but not by 3")        
}
else 
    console.log("The given number is not divisible by 3 nor by 5")
