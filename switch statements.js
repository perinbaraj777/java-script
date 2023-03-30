var marks=prompt("enter marks");
switch (marks){
    case marks >= 35 && marks <= 100:
        document.write("pass");
        break;
        case marks <= 34:
            document.write("fail");
            break;
            default:
                document.write("Invalid");
}


// sitch excercise
var weeks=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var weeks=prompt("enter the day");
switch(weeks){
    case weeks="sunday":
        document.write("the entered day is a holiday");
        break;
        case weeks="monday":
            document.write("the entered day is a working day");
            break;
            case weeks="tuesday":
        document.write("the entered day is a working day");
        break;
}


