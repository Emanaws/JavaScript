function ArrayDeclaration() {
    var Student = ["Redwan", "Omer", "Adem", "Nejat"];
    document.write(Student[3]);
}
// function NewArray() {
//     var fruits = new Array( "apple", "orange", "mango" );
//     document.write(fruits[0])
// }
function DisplayArrays() {
    //       var Student = new Array ("Redwan", "Omer", "Adem", "Nejat")
    //   document.getElementById("student") .innerHTML = student()
    var student = new Array("Redwan", "Omer", "Adem", "Nejat");
    document.getElementById("students").innerHTML = student
    // document.getElementById("students").innerHTML=typeof(student)

}
function jsonExample() {
    var students = {
        firstname: "Redwan",
        lastname: "Omer",
        Age: "100"
    };
    document.getElementById("jsonstudent").innerHTML
        = "<b>FirstName:</b/>" + students.firstname + "<br> " +
        "<b>LastName:</b>" + students.lastname + "<br> " +
        "<b>Age:</b>" + students.Age;
}
function jsonwithmorethanoneRecord() {
    var students = [
        {
        Id: 1,
        firstname: "Redwan",
        lastname: "Omer",
        Age: "100"
    },
    {
        Id: 2,
        firstname: "Nejat",
        lastname: "Hamza",
        Age: "99"

    },
    {
        Id: 3,
        firstname: "Eshetu",
        lastname: "Mulnah",
        Age: "1000"
    },
    {
        Id: 4,
        firstname: "Naaol",
        lastname: "Mulnah",
        Age: "1002"
    },
    {
        Id: 5,
        firstname: "Esan",
        lastname: "Adem",
        Age: "1001"
    },
    {
        Id: 6,
        firstname: "Liya",
        lastname: "Mulnah",
        Age: "1006"
    }
    ]
    // document.getElementById("jsonstudent").innerHTML
    //     = "<b>FirstName:</b>" + students[0].firstname + "<br> " +
    //     "<b>LastName:</b>" + students[0].lastname + "<br> " +
    //     "<b>Age:</b>" + students[0].Age;
    var text = "<ol>";
    var len = students.length;
    // document.write(len);
    for(var i = 0; i<len; i++) {
     text = text + "<li>" + students[i].firstname + " " +  students[i].lastname + " " +  students[i].Age + "</li>"
    }
    text=text  +"</ol>"
    document.write(text);
}