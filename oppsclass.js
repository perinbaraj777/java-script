class car{
    name;
    age;
  
  constructor()
  {
    this.name="ram";
    this.age=25;
  }
  
  display()
  {
    console.log(`name=${this.name},age=${this.age}`);
  
  }}
  var result=new car();
  result.display();