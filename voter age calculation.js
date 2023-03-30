let name=prompt("enter your name");
let age=prompt("enter your age");
var smallage= 18 - age;
if(age > 18 && age <= 80){
    document.write("hi"+name +"you are eligible for vote");
}
else if(age < 18)
{
    
    document.write("sorry"+name+"you have to wait"+smallage+"more years to place your first vote"); 
}
else
{
    document.write("senior citizen ..thank you for your vote")
}


