// function outer(){
//     var p = 50;
//     var q = 40;
//     function inner(){
//         var a = 10;
//         p++;
//         console.log('p=',p,'a=',a)
//     }
//     return inner
// }
// var fun = outer();  //closure - sirf wahi chiz jayga jiska inner() ko zarurat hai from outer()
// var fun1 = outer();

// fun();
// fun();
// fun1();

function outerFun(){
        let money = 150;
        function innerFun(){
            money++;
            let a = 10;
            function innerMostFun(){
                money++;
                a++;
                console.log('money: ',money, 'a: ',a);
            }
            return innerMostFun;
        }
        return innerFun;
}
    let fun = outerFun();  //closure - sirf wahi chiz jayga jiska inner() ko zarurat hai from outer()
    let fun1 = fun();
    let fun2 = fun();
    fun1();
    fun1();
    fun2();
    fun2();
    fun1();

