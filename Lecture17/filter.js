let arr = [13,5,65,56,76,17];
let filterArr = arr.filter((item)=>{
    if(item%2==0){
        return false;
    }
    else{
        return true;
    }
    // return item%2==0;
})
console.log(filterArr);

