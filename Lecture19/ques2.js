function fun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('promise 1 resolved data');
        }, 10000);
    });
}

function fun2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('promise 2 resolved data');
        }, 20000);
    });
}
console.log('start');
async function handlePromise(){
    console.log('hello world');

    let data1 = await fun1();
    // let data2 = await fun2();
    console.log(data1);
    console.log('console after resolved');

    let data2 = await fun2();
    console.log(data2);
}
handlePromise();
console.log('End');

/* start
hello world
End
promise  2 resoleved data
console after resolved
promise 1 resolved data*/