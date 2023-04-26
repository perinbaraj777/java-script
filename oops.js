                                        //INHERITANCE
 
                                        // We create a class called Teacher subclass by using class and extends for
                                        //  creating an inheritance mechanism. The parent class is now Person and
                                        //  its child is Teacher. To inherit the parent class properties, 
                                        // we use the super() operator to initialize the arguments 
                                        // we need inside the constructor function. 
                                        
                                        
// class person{
//      age;
//      martial_status;
//      constructor(){
//         this.age=25;
//         this.martial_status="single";
//      }
//     display(){
//         console.log(`the persons age is ${this.age},and he is${this.martial_status}`);
//     }
// }

// class teacher extends  person
// {
   
    
    
// constructor(teacherstatus,teacherage,age){
//     super(age)
//     this.teacherage=23;
//     this.teacherstatus="single";
// }
// print(){
//     console.log(`the teachers age is, ${this.teacherage},which is less than the person and the persons age,${this.age},and she is also ,${this.teacherstatus}`);
// }
// }

// var obj=new teacher();
// obj.display();
// obj.print()







                                          //ENCAPSULATION
    




                                        //   JavaScript Encapsulation Example
                                        //   Let's see a simple example of encapsulation that contains two data members with its setter and getter methods.
//     class Student  
//     {  
//       constructor()  
//       {  
//          var name;  
//          var marks;  
//       }  
//           getName()  
//           {  
//             return this.name;  
//           }  
//         setName(name)  
//         {  
//           this.name=name;  
//         }  
          
//         getMarks()  
//         {  
//           return this.marks;  
//         }  
//       setMarks(marks)  
//       {  
//         this.marks=marks;  
//       }  
    
//       }  
//       var stud=new Student();  
//        stud.setName("John");  
//        stud.setMarks(80);  
//        document.writeln(stud.getName()+" "+stud.getMarks());  
// 
                                                                                     //   Test it Now
                                                                                       //   Output:
  
                                                                                         //   John 80







 //  JavaScript Encapsulation Example: Validate
//  In this example, we validate the marks of the student. 

// class Student  
//   {  
//     constructor()  
//     {  
//        var name;  
//        var marks;  
//     }  
//         getName()  
//         {  
//           return this.name;  
//         }  
//       setName(name)  
//       {  
//         this.name=name;  
//       }  
        
//       getMarks()  
//       {  
//         return this.marks;  
//       }  
//     setMarks(marks)  
//     {  
//         if(marks<0||marks>100)  
//         {  
//           alert("Invalid Marks");  
//         }  
//       else  
//         {  
//           this.marks=marks;  
//         }  
//     }  
//     }  
//     var stud=new Student();  
//      stud.setName("John");  
//      stud.setMarks(110);                                           //alert() invokes  
//      document.writeln(stud.getName()+" "+stud.getMarks());  













// In JavaScript, you can also use Object.defineProperty() method to add getters and setters. For example,

// const student = {
//     firstName: 'Monica'
// }

// // getting property
// Object.defineProperty(student, "getName", {
//     get : function () {
//         return this.firstName;
//     }
// });

// // setting property
// Object.defineProperty(student, "changeName", {
//     set : function (value) {
//         this.firstName = value;
//     }
// });

// console.log(student.firstName); // Monica

// // changing the property value
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah
// Run Code
// In the above example, Object.defineProperty() is used to access and change the property of an object.

// The syntax for using Object.defineProperty() is:

// Object.defineProperty(obj, prop, descriptor)
// The Object.defineProperty() method takes three arguments.

// The first argument is the objectName.
// The second argument is the name of the property.
// The third argument is an object that describes the property.









                           //MOODLE TASK
                           
  //   Use getter and setter method to access the private variable (password) for Registration details with
    //  name, age, email id and password as variables and display the details using display() function.
    // class registration{
    //     constructor(){
    //      var name;
    //      var age;
    //      var email_id;
    //      var password;
    //              }
    //  getFirstName(){
    //     return this.name;
    //  }            
    //  setFirstName(name){
    //     this.name=name;
    //  }
    //  getAge(){
    //     return this.age;
    //  }
    //  setAge(age){
    //     this.age=age;        
    //  }
    //  getEmail(){
    //     return this.email_id;
    //  }
    //  setEmail(email_id){
    //     this.email_id=email_id;

    //  }
    //  getpass(){
    //     return this.password;
    //  }
    //  setpass(password){
    //     this.password=password;
    //  }
    //  display(){
    //     console.log(`the name is ${reg.getFirstName()},and the age is ${reg.getAge()},the e mail id of ${reg.getFirstName()},is ${reg.getEmail()},and his password is ${reg.getpass()}`);
    // }
    // }
    // var reg=new registration();
    // reg.setFirstName("surya");
    // reg.setAge(23);
    // reg.setEmail("perinbaraj777@gmail.com");
    // reg.setpass(123456789);
  
    // console.log(reg.display());









                                             //CLASS
      //  Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

        //  The Person class should have a method called describe which returns a string with the following syntax: "name, age years old".
     //  So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
     
     
    // class person{
    //   name;
    //   age;
    //   constructor(name,age){
    //     this.name="surya";
    //     this.age=23;
    //   }
    //   describe(){
    //     console.log(this.name+" is "+this.age+" years  old");
    //   }

    // } 
    // var obj=new person();
    // obj.describe();





// class shape{
 
// constructor(name,sides,sideslength){
//   this.name=name;
//   this.sides=sides;
//   this.sideslength=sideslength;
// }
// calcperimeter(){
//   console.log("The perimeter of " +this.name+" is "+ this.sides*this.sideslength);
// }


// }
// var square=new shape("square",4,5);
// square.calcperimeter();

// var triangle=new shape("triangle",3,3);
// triangle.calcperimeter();







