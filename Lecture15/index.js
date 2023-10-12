var student = {
    'full name' : 'rahul',
    age : 20,
    email: 'rahul@gmail.com',
    city: 'Delhi'
}
console.log(student.age)
console.log(student.email)
console.log(student['full name'])
console.log(student['city'])

//to traverse in object we use for-in loop
for(var key in student){
    console.log(student[key])
}

//it can also be used to print elements of an array
var arr=[23,4,56]
for(var i in arr){
    console.log(arr[i])
}

//for-of cannot be used to iterate values of objects