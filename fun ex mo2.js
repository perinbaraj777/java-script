let sideleft=30;
let sideright=20;
let sidebottom=10;
if(sideleft==sideright==sidebottom){
  console.log("Equilateral triangle");
}
else if(sideleft==sideright||sideright==sidebottom){
  console.log("Isosceles triangle")
}
else{
  console.log("Scalene triangle");
}