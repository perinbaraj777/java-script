// let a=Math.random(0,1);
// console.log(a);
// console.log(Math.sqrt(a));
// console.log(Math.abs(-10));
// console.log(Math.cbrt(8));
// console.log(Math.floor(2.5));
// console.log(Math.floor(2.1));
// console.log(Math.ceil(8.9))
// console.log(Math.pow(2,3));
// console.log(Math.round(8.5));
// console.log(Math.PI);

                                                      // finding area of circle
// let a=Math.PI;
// let r= 5;
// let radius=Math.pow(r,2);
// let area=(a*radius);
// console.log(area);

// 


                                                              // getting random  values
// console.log(Math.random(0,10));
// Math.random(50,100)
// let max=10;
//  let min=5;
// let a=Math.random()*(max-min)+min;
// console.log(Math.floor(a));// to get the round value round value



                                                 // getting the maximum value in an array using math object
// let a=[1,2,3,4,5,6,7,8,9];
// console.log(Math.max(...a)); //(...) spread operator is used to link  or call  to execute the math functionn in the array


// const a=new Date("05-04-2023");
// console.log(a);
                                          //for getting millisecond in to actual date
// const a= new Date();
// console.log(a.now());
// const a=Date.now();
// console.log(a);
// const ms=Date.now();
// // console.log(ms);
// const time=new Date;
// const date=time.getDate();
//  console.log(date);

//                                               // for geting current date
// var date=new Date();
//  console.log(date.getFullYear());


                                                 // for getting month
// var date=new Date();
//  console.log(date.getMonth());


                                              // for getting day
// var date=new Date();
//  console.log(date.getDay());
                                            //for getting hours//
// var date=new Date();
//  console.log(date.getHours());


                                              // set date or changing date/
// let a=new Date;
// a.setDate(7);
// console.log(a.getDate());


                                                                     // setting fullyear
// let a=new Date;
// a.setFullYear(2020);
// console.log(a.getFullYear());
                                                                    // setting month 
// let a=new Date;
// a.setMonth(4);
// console.log(a.getMonth());

                                                                // setting hours
// let a=new Date;
// a.setHours(21);
// console.log(a.getHours());

                                                        // checking time status task



//   var a=new Date;
//  var b=a.getHours();

// //  var b=a.setHours(22);
//  console.log(a.getHours());
//  if(b>=6&&b<10){
//     console.log("good morning");
//  }                              
//  else if(b>=10&&b<=15){
//     console.log("good afternoon");
//  }    
//  else if(b>=15&&b<=18){
//     console.log("good evening");
//  }  
//  else if(b>=18&&b<=23){
//     console.log("good night");
//  }   
//  else{
//     console.log("invalid time");
//  }  
                                                                        


                                                                    // escape sequence in string


// var a="\0i love\b my \0country\n i live in india\twhich is second largest in population\"uy \b hdgjs";
// var b="\0";
// console.log(a);


                                                                  // string  objects  

                                                                  //indexof() finding the words position in a
                                                                //   string


//    let paragraph="i love cats. which are so cute ansd dogs are enemey of cats";
//    console.log(paragraph.length);
//    let searchterm="cat";
//    let indexOfFirst=paragraph.indexOf(searchterm);
//    console.log(indexOfFirst);
//    console.log(paragraph.indexOf(searchterm,indexOfFirst+1))


                                                                            
                             // string objects

                             
                                                // slice() used to triming the string by index we given   
                                                
                                                
// var a= " hello world good  morning"
// console.log(a.slice(-4,-2));

//                                                               random 2nd method
//  var random=Math.floor(Math.random()*5)+1;
// console.log(random);
                                                           // random sample programs
// var min=2; 
// var max=10;
// random=Math.floor(Math.random()*(max-min)+1);
// console.log(random);


// let min=100;
// let max=120;
// let rand=Math.ceil(Math.random()*(max-min)+min);
// console.log(rand);


                                  // getting the  maximum   value from an array 
                                  // using the Math.max function
  
  // let a=["1,2,3,4,5,4,5,9,"];
  // console.log(Math.max(...a));                                
  
                                                      // date sample programs
  
  //  let date =new Date;                                                   
//  console.log(Date());             can get date by declaring variable and also in console

// let a =Date.now();
// // let b=new Date;                changing milisecond date to actual date
// console.log(b.getDate());


// let a=new Date();
// let b=a.getMonth();
// console.log(b)
                                                      // concatination of two strings

                                                      
// let a="ram";
// let b="kumar";
// console.log(a.concat(' ',b));


// let p="i love india and im proud to be an indian ,and india is my favourite country     ";
// console.log(p.replace('india','america'))        //replace only the first matching string the strilng

// console.log(p.replaceAll('india','america'))         //replace all the strilng

// console.log(p.toUpperCase());                       //changes to uppercase

// console.log(p.toLocaleLowerCase());                   changes to lowercase

 

// console.log(p.charAt(5));                            to get an character or single letter using index value(charAt())
// 


// console.log(p.charCodeAt(5));                          brings the ASCII code binary value of the given value

// console.log(p.split());                                //  gets whole  string in a format of an array


// let words=p.split(" ");                   get the words in a string by giving space between (" ")
// console.log(words[2]);



// let chars=p.split("");
// console.log(chars[3]);             //get the a single letter in a string by  without giving space between ("")



                                          //  toString()                   <<<<pending
  // let strng=new String("foo");
  // // console.log(strng);  
  // console.log(strng.toString());  
  
  

                                              // to count the number of vowels and consanants in a given string
                                                // by using the given sylabus
  //    let a=p.length;
//    console.log(a);
//    let b=searchterm.length;
// //  let c= getCount("a,e,i,o,u");
// //  console.log(c);
// for(i=0;i<=a;i++){
//   if(i===a&&e&&i&&o&&u){
//     c=i.length;

//     console.log(c);
//   }
//   else{
//     console.log("invalid")
//   }
// }



                                              //  to count the number of vowels and consanants in a given string

                                              // by str.match (regular expression)


// let vowels=p.match(/[aeiou]/gi);                  // gi (is regular expression) g (global search) is used check the whole strng for the vowels
//                                                                      //     i is used to accepts the vowels in uppercase and lowercase

// let consanants=p.match(/[^aeiou]/gi);   // ^ (not or power) is used to store the other letters other than the vowels 
// console.log("the total number of characters in given string: " +p.length); 
// console.log("the total number of vowels in given string: " +vowels.length);
// console.log("the total number of consanants in given string: " +consanants.length);     


                                        // include()
                                        // checks in "string" for a given specific "string" and output as boolean
                                        // if present output true 
                                        // if absent output as false

// console.log(p.includes("india"));      prints true
//  console.log(p.includes("africa"));       prints false


                                            //  trim()
                                            // used to remove unnecessary spaces in a paragraph in start and end
// console.log(p.trim());


                                        // subString
                                        // used to get or print the string content after the given index 
// console.log(p.substring(5));


// let b=/proud/gi;
// console.log(p.match(b));









                                                 //    ARRAY OBJECT
                                        //  unshift()        
  //  var colors=["blue","orange"];               is used to add an element in the start of the array
  // colors.unshift("orange");
  //  console.log(colors);   
   
                                      //  shift()
  //  var colors=["blue","orange"];           is used to remove an element in the start of an array 
  //  colors.shift();
  //   console.log(colors);     
  
  
                                                // splice():- for deleting an element in between the array
    //  var fruits=["a","b","c,","d","e"] ;
    //  fruits.splice(2,2);                      deletes c-d
    // fruits.splice(2);                                   deletes from 2 to full
    //  console.log(fruits);       
    
    

                                                      //  splice()
                                                    //  adding an element in between the array
    // var fruits=["a","b","c,","d","e"] ;
    // fruits.splice(2,0,"new element");      //adds the new element in the second index
    // fruits.splice(2,2,"new element");       // replaces  the second element with new element
    // console.log(fruits);  
  




                                                          //  PushManager()
                                                        // add an new element in  the last of the array
//     let fruits=["apple","orange"];
// console.log(fruits.push("banana"));
// console.log(fruits);
   
                                          //concat()
                                          //combines two arrays
// let a=[1,2,3,4];
// let b=[5,6,7,8];
// console.log(a.concat(b));




                                                                    //  slice()
                                                                    

// let a=[1,2,3,4,5,6,7,8,9];
// console.log(a.slice(1,3));   //get the value from 1st index  till 2nd index that is before the 3rd index 

// giving - values
// - means count from backward

// console.log(a.slice(4,-3));           //here -3rd index is included because it is the start of the negative value
                                     //so here 4 is start and -3 is also start so both the value of the index and between values will be displayed


                                    //  let a=["apple","banana","orange","gaiva","peaches"];

                                     // (start index will include and end index will be left)

                                     // console.log(a.slice(1)) ;   //prints from banana to peaches   

// console.log(a.slice(1,3)) ;  //prints from banana to orange

// console.log(a.slice(-2)) ;   //prints from gauva to peaches because (-2) is considered as last  of given index

// console.log(a.slice(-4,-2));    //here -2 is start index and -4 is end index


   //  index0f()
   //  used to the identify the index of the element in array



// console.log(a.indexOf("peaches"));       //prints the index of peaches if two peaches is there only the first peaches index will display


// console.log(a.indexOf("grapes"));   // if the value is not there index value will be in negative (-1)


                                                      //  includes()

                                          //used to check weather the given element is present 
                                          //in the array or not



// var x=["apple","orange","banana","papaya","peacock"]; 
// console.log(x.includes("orange"));                       //prints true

// console.log(x.includes("crow"));                    //prints false

// console.log(x.includes("apple","crow"));       // prints true because 1 element is present in array

// console.log(x.includes("crow","dog"));         //prints the false because both elements are absent





                                     // find()
                                    //  used to find an element in an array by giving condition

  //  var a=[1,2,3,4,5,6,7,8];
  //  var result=a.find(function(element)
  //  {
  //  return element>7;                     //can give any condition
  //  })    
  // console.log(result);                         



                                            //  filter()
                                            // used to get the  specific elements by declaring the condition  
//   var a=[1,7,3,2,5,6,7,8];
//   var result=a.filter(function(element)
//   {
//   return element>2;
//   })    
//  console.log(result);                         

                                                        //  findIndex()

                                                      //  gets the elements index which satisfies the condition in an array
// var a=[1,2,3,4,5,6,7,8];
//   var result=a.findIndex(function(element)
//   {
//   return element>5;
//   })    
//  console.log(result); 




                            //  ADVANCED OBJECTS OPERATIONS

                                                  // to  change  an property value inside an object 


// let person={
//   firstname:"surya",
//   lastname:"s",
//   age:32
// }
// person.age=15;               //replaces  the value as 15
// console.log(person);



       //to add an new property and value inside an object

// let person={
//     firstname:"surya",
//     lastname:"s",
//     age:32
//   }
//   person.gender="male";   //adds the new property and value to the object
//   console.log(person);
  
  
  


                           //function as a value
                                  
                                  //  is used to declare a function inside an object 

// let person={
//   firstname:"surya",
//   lastname:"s",
//   age:32,
//   run:function(){
//     let a=10;
//     let b=10;
//     let c=a+b;
//     console.log(c);

//   }
  
// }
// person.run()
// console.log(person);





                                    // ARRAY AS A VALUE
                                          // to declare an array inside
// let sports={
//   hockey:"national game",
//   circket:"famous game",
//   swiming:"intresting game",
//   habbit:["money","passion"]

// }
// console.log(sports.habbit);
// console.log(sports);
// console.log(sports["habbit"][1])

                                      

                                                          //OBJECT AS A VALUE

                                                          //to declare an object inside an object


// let sports={
//   hockey:"national game",
//   circket:"famous game",
//   swiming:"intresting game",
//   habbit:{
//     money:"a lot of expense",
//    condition :"passion"}
// }
// console.log(`${sports.hockey}  yuy ${ sports.habbit.condition  }`);     //back tick and dollarsymbol is used to add two conditions without + symbol
// console.log(sports.habbit.condition)                                     //prints passion 

