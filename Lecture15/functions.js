function fun(){
    console.log("Inside fun function")
    return 20;
}
var q = fun();
console.log(q)

function outer(){
    var x = 20;
    function inner(){
        var y = 'hello world!'
        console.log(y)
    }
    inner()
}
outer()
var x = outer;
console.log(x)  //print the code inside the outer function
x()     //call the outer function

var a = function kuchh(){
    var p = 20
    console.log(p)
}
// kuchh() // cannot be called like this bcz it was stored in variable a at the time of declaration
a()

var b = function (){
    var p = 20
    console.log(p)
}
b()  //anonymous function bcs it is called by variable name b so do not need function name

// arrow function
var t = () => {
    console.log('inside arrow function')
}
t();