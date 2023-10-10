var arr = [34,76,768,213,8,48,64];
var x = arr.slice(2,4);
console.log(x);

//to find index of an element we use indexOf() it searchs from left to right
var a = arr.indexOf(213)
console.log(a)

//to add 2 arrays --> concat()
var arr1 = [45,67,76,3,56,3]
var arr2 = arr.concat(arr1)
console.log(arr2)


//strings
var str = "hello";
var y = 'hell'
var z = ` gla is hell """"'`
console.log(str.length)
var a = str+z
console.log(a)
var b = "This is a string and we are learning javasript and I am in gla university --- a shitty place"
console.log(b.toLowerCase())
console.log(b.toUpperCase())
console.log(b.replace('is','was'))
console.log(b.replaceAll('is','was'))

var arr3 = b.split(' ')
console.log(arr3)

//8 lakh ki company ka question
var x = 4+6+"6"+9        //4+6(both num)=10+6(string) = 106 -> 106(string)+9(num) = 1069(string)
var jk =  4+6*"6"+9     //in case of multiply and divide it treats all  nums as num even if it is given in string 
console.log(x)
console.log(jk)