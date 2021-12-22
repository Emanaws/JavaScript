function NumberExample1() {
    var num1 = 5000;
    var num2 = 5000;
    var sum = num1 + num2;
    document.write(sum);
}
function InfinityExample() {
    var num= 2;
    while(num!= Infinity){
        num = num * num;
        document.writeln(num);
    }
}
function toFixedExample() {
     x = 9.6543;
     x = x . toFixed(1);
     document.write(x);
}
function toPrecisionExample() {
    var x = 9.6543;
    x = x .toPrecision(10);
    document.write(x)
}