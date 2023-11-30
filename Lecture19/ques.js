let pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('promise 1 resolved data');
    }, 10000);
});
let pr2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('promise 2 resolved data');
    }, 20000);
});
console.log('start');
async function handlePromise(){
    console.log('hello world');

    let data2 = await pr2;
    console.log(data2);
    console.log('console after resolved');

    let data1 = await pr;
    console.log(data1);
}
handlePromise();
console.log('End');

/* start
hello world
End
promise  2 resoleved data
console after resolved
promise 1 resolved data*/