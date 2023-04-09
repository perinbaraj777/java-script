
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

