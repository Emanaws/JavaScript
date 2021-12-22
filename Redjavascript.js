//Arithmetic Example
function AddtwoNumbers(a, b) {
    alert(a + b);
}
function MultiplytwoNumbers(a, b) {
    alert(a * b);
}
function GetModules(a, b) {
    alert(a % b);
}
function CompareTwoNumbers(a, b) {
    alert(a !== b);
}
//Logical Operator Example
function LogicalOperator(a, b) {
    alert(!a == 4 && !b == 4);

}
//Assignment Example
function AssignmentExample(a, b) {
    var number1;
    var number2;
    var sum;
    a += a;   //a=a+a;
    number1 = a;
    number2 = b;
    sum = number1 + number2;
    alert(sum);
}
// Conditional Operator
function ConditionalExample(a, b) {
    alert(a > b ? a + a : a + b);
}
// If Statement Example

function ConditionalIf(a, b) {
    if (a > b) {
        alert(" a is greater than b");
    }
    else if (a < b) {
        alert(" a is less than b");
    }
    else {
        alert(" a and b  are equal");
    }
}
function EvenorOdd(a) {
    if (a % 2 == 0) {
        alert(" the number is even");
    }
    else {
        alert(" the number is odd");
    }
}
function GetGrade(mark) {
    var grade = "";
    if (mark >= 90) {
        grade = "A";
    }
    else if (mark >= 80) {
        grade = "B"
    }
    else if (mark >= 70) {
        grade = "C"
    }
    else if (mark >= 60) {
        grade = "D"
    }
    else if (mark < 60) {
        grade = "F"
    }
    alert(grade);
}
// switch statement example
function GetRemarkwithSwitch(grade) {
    var remark;
    switch (grade) {
        case 'A': remark = 'Excelent ';
            break;
        case 'B': remark = 'Very Good ';
            break;
        case 'C': remark = 'Good ';
            break;
        case 'D': remark = 'Fair';
            break;
        default: remark = 'Fail ';
            break;
    }
    alert(remark);
}
// while loops Example
function whileloop(a) {
    while (a >= 1) {
        alert(a);
        a = a - 1;
    }
}
function DowhileLoop(a) {
    alert(a)
    a = a - 1;
    while (a >= 1);
}
function ForLoop() {
    for (i = 10; i >= 0; i--) {
        for (j = 0; j <= i; j++) {
            document.writeln(j)
        }
        document.write("<br/>")
    }
    for (i = 0; i <= 10; i++) {
        for (j = 0; j <= i; j++) {
            document.writeln(j)
        }
        document.write("<br/>")
    }
}
function getFullName(firstname, lastname) {
    alert(firstname + " " + lastname);
}
//Event Example
function divClicked() {
    alert("you clicked me-------- I am Redwan")
}
function mouseOver() {
    alert(" The Mouse is inside!-----Hello");
}
function mouseOut() {
    alert(" The mouse is out------Hello")
}
function gotoCookieTutorial(Pagename) {
    window.location = Pagename

}
function alertExample() {
    alert(" This is warning massage!")
}
function ConfirmationExample() {
    confirm(" Are you sure you want close?")
}
function promptExample() {
 data = prompt(" Please Enter Data")
 document.write(data);
}
function SayHello(name){
    var greeting =Greeting();
    alert(greeting + ' ' + name);
}
function Greeting() {
    return 'Good afternoon'
}
// Object in javaScript
function ObjectExample() {
    // Student = new Object();
    // Student.firstname = 'Redwan';
    // Student.lastname = 'Omer';
    // Student.Sex = 'M'
    Student = {
        firstname: 'Redwan',
        lastname: 'Omer',
        sex: 'M',
    }
    // document.write(Student.lastname + "," + Student.firstname +  " Gender is " + Student.sex);
    document.getElementById('Student').innerHTML=
    Student.lastname + "," + Student.firstname +  " Gender is " + Student.sex;
}

//     document.write( Student.lastname + "," + Student.firstname +  " Gender is " + Student.Sex);
    // getFullName: function(){
    //     return this.firstname +this.lastname + "Gender is"  + this. Sex;

    // }  
//    document.getElementById( 'Student') .innerhtml = 
//     Student.getFullName();