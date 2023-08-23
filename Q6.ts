// Q No.6.	Write a program that takes temperature and check it. 
// If it is cold then suggest the user to wear warm 
// clothes and so on according to the weather.
var tempr:number=36
if (tempr>=35) 
{
    console.log("Its Very Hot weather outside..Use Heat Stroke precautions")    
}
else if (tempr<35 && tempr>=25)
{
    console.log("The weather is warm outside. use soft clothes")
}
else if (tempr<25 && tempr>=18)
{
    console.log("The weather is normal outside")
}
else if (tempr<18 && tempr>=15)
{
    console.log("Its Autumn starting")
}
else 
{
    console.log("The weather is Cold outside. wear warm clothes")
}