let num1=20;
   let num2=30;
   let operator="+";
   function evalnumbers(){
    if(operator=="+"){
      console.log(num1+num2);
    }
    else if(operator=="-"){
      console.log(num1-num2);
    }
    else if(operator=="*"){
      console.log(num1*num2);
    }
    else if(operator=="/"){
      console.log(num1/num2);
    }
    else if(operator=="%"){
      console.log(num1%num2);
    }
    else{
      console.log("invalid operation");
    }
   }
   evalnumbers();
   