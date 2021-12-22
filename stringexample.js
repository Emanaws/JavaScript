function getlength(name) {
  document.write (name.length); 
}
function Gettwostrings() {
    var withbreaks = "Hello world." + "\n'" + " My Name is Redwan. \n what is your name?"
    console.log( withbreaks);
}
function IndexOfExample() {
    var str = "Find where location is located?";
    document.write(str.indexOf("located"))
}
function SearchExample() {
    var str = "Redwan Nejat Eman Esan Naaol";
    document.write(str. search("Naaol"))
}
function sliceExample() {
    var str = "Redwan Nejat Eman Esan Naaol";
    document.write(str.slice(-10,-4))
}
function replaceExample() {
    var str = "Redwan Nejat Eman Esan Naaol";
    document.write(str.replace("Eman", "Zemzem"))
}
function changeToUpperCasse() {
    var str = "Redwan Nejat Eman Esan Naaol";
    document.write(str.toUpperCase())
}
function ConcatExample() {
    var str = "Redwan"
    var str2 = "Nejat"
    document.write( str.concat("  ", str2))
}