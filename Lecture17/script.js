//accepting function are higher ordwer/call back function
let data = [{l:4,b:3},{l:4,b:3},{l:4,b:3},{l:4,b:3}];
let area = (l,b)=>{
    return l*b;
}
let perimeter = (l,b)=>{
    return 2*(l+b);
}
function Calculate(x,logic){
    let result = [];
    for(let i of x){
        result.push(logic(i.l,i.b));
    }
    return result;
}
let areaData = Calculate(data,area);
let periData = Calculate(data,perimeter);
console.log(areaData);
console.log(periData);