function leapyear(year){
    if((year%4==0)&&(year%4 !=100)|| (year%400 == 0)){
      console.log("leap year");
    }
    else{
      console.log("not a leapyear");
    }
   }
   leapyear(2005);