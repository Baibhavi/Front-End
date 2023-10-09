var a = 9
var y = "hello"
console.log(a)
console.log(y)
//datatypes in javascript
// There are 6 datatypes in js :-
//      1.Number --> 78, 78.5, -19, - 2.3
//      2.String --> "Hello"
//      3.Boolean --> true, false
//      4.Object
//      5.undefined
//      6.Null -->empty

// arrays
var arr = [5,7,6,9,"hello",[1,2,3]]
console.log(arr[2]);

//loops
for(var i = 0 ; i<6; i++){
    console.log(arr[i]);
}

//to add element in last of an array we use push() function and to remove element from last use pop() function
console.log(arr);
arr.push(68);
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

//to remove element from starting of an array we use shift() function and to add element to first use unshift() function
arr.shift();
console.log(arr)
arr.unshift(56);
console.log(arr)

//to remove element from any index use splice(index no, number of element to be removed) function 
arr.splice(2,1);
console.log(arr)
//splice is also used to replace elements in array splice(index no, number of element to be removed, element to be placed in place of removed elements)
arr.splice(1,0,2,3,4,5,90)
console.log(arr)


// for of loop
for(var item of arr){
    console.log(item)
}

//length of array
console.log(arr.length)

var arr2 = [34,76,768,213,8];
var arr3 = []
var arr4 = []
for(var i = 0; i < arr2.length; i++){
    arr3[i] = arr2[i]*2
}
for(var item of arr2){
    arr4.push(2*item)
}
console.log(arr3)
console.log(arr4)