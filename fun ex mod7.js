
function findDaysInaYear(month,year){
  
       if(month==2 && year%4==0){
       
       console.log("29 days");
     
     }
     else if(month==2 && year%4!==0){
       console.log("28 days");
     }
     else if(month==4 || month==6 || month==8 || month==9 || month==11){
       console.log("30 days");
     
     }
    
     else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
       console.log("31 days");
     }
     else{
      console.log("invalid");
     }
      }          
      findDaysInaYear(0,2024);                
     
                                         