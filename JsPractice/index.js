document.getElementById("a").innerHTML = "Learned innerHtml";
// document.write("doucment.write Function")

// Using document.write() after an HTML document is loaded, will delete all existing HTML

// window.alert(2+6);
//You can skip the window keyword.

// In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional:

// alert(4+10);
// console.log("Logging into console");


//operators
// x = 2;
// y = 3;
// console.log(x+y);

// var x = 5, y =7;
// console.log(x+y);

// let a = 5, b =7;
// console.log(a+b);

const r = 5, s =7;
console.log(r+s);

const q = 5, p =4;
let t = p+q
console.log(t+9);

console.log(5+3+"5");
console.log("5"+5+3);
console.log(2+"5"+8);
console.log(1+2+"5"+8);
console.log(2+"5"+8+1);

{
    var vBlock = 3;
    let lBlock = 5;
    console.log(lBlock);
}
console.log(vBlock);
// console.log(lBlock); --- give not defined error

var vBlock = 7;
console.log(vBlock)

let ai = 0;
// let ai = 9;
// console.log("ai");  --- givbes previously declared error

//hoisting is only allowed in var

ar = 9;
var ar;

let a = "3", b = 3;
console.log(a==b);
console.log(a===b);
console.log(a!==b); //value || type

function fun(p1, p2){
    return p1+p2;
}
function fun2(){
    console.log("No args")
}
console.log("My first function "+fun(2,5));
fun2();
let val = fun;
console.log(val)

//objects
const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.fullName());

//events
function displayDate(){
    document.querySelector(".demo").innerHTML = Date();

}

//array
const fruits = ["Banana",
"Orange", "Apple", "Mango"];
document.querySelector(".demo").innerHTML = fruits.toString();
let l = fruits.length;
document.getElementById('x').innerHTML = l;
document.getElementById("y").innerHTML = fruits.join(" * ");
// fruits.push("Kiwi");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift("Banana");
// console.log(fruits);
const citrus = fruits.slice(1);
console.log(fruits);
console.log(citrus);

fruits.splice(2,0,"Kiwi","Papaya");
console.log(fruits);
fruits.splice(0,2);
console.log(fruits);

//random
console.log(Math.floor(Math.random()*10)); //return value bt --- 0 to 9
console.log(Math.floor(Math.random()*11)); //return value bt --- 0 to 10
console.log(Math.floor(Math.random()*100)); //return value bt --- 0 to 99

//arrow function
hello = () =>{
    return 'Hello';
}
console.log(hello());
addin = (val) => 10*val;
console.log(addin(2)); 


//callback Function
function disp(some){
    document.getElementById('dem').innerHTML = some;
}

function myFunc1(){
    disp('Hello');
}
function myFunc2(){
    disp('Hi');
}

myFunc1();
myFunc2();

// myFunc2();
// myFunc1();

function add(a, b, func){
    let sum = a+b;
    func(sum);
}

add(4,6,disp);