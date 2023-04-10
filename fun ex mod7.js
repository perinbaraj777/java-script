function findDaysInaYear(month,year){
    if(month<=12&&month<=1){
      console.log("invalid month")
    }
    else if(month==2&&year%4==0){
      
      console.log("29 days");
    
    }
    else if(month==2&&year%4!==0){
      console.log("28 days");
    }
    else if(month==4&&6&&8&&9&&11){
      console.log("30 days");
    
    }
    else{
      console.log("31 days");
    }
     }          
     findDaysInaYear(5,2023);                
    
    