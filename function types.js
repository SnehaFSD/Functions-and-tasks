// function mul(a,b){  //normal function without "return"
//     console.log(a*b)
// }
// mul(1,2)
//--------------------------------------------------
// function mul(a,b){    //with return
//     return a*b
// }
// console.log(mul(2,2))
//------------------------------------
 //function is written for both even and odd values but at a time only one
 //value can be "return"
// let arr = [1,2,3,4,5,6] 
// let even = []
// let od = []
// function odd(arr){
//     for(let i = 0;i<=arr.length;i++){
// if(arr[i]%2==0){
//     even.push(arr[i])
// }else{
// od.push(arr[i])
// }
//     }
//     return even
// }
// console.log(odd(arr));
// -------------------------------------
//anonymous function
// let arr = [1,2,3,4,5,6] 
// let even = []
// let od = []
// const odd = function(arr){
//         for(let i = 0;i<=arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }else{
//     od.push(arr[i])
//     }
//         }
//         return even
//     }
//     console.log(odd(arr)); //function name is called

//IIFE(immediately Invoked Function Expected)
// (function odd(arr){
// let even = []
// let od = []
//     for(let i = 0;i<=arr.length;i++){
// if(arr[i]%2==0){
//     even.push(arr[i])
// }else{
// od.push(arr[i])
// }
//     }
//    console.log(od)})([1,2,3,4,5,6]) //function name is not called and function ends after console

//Arrow function
// const odd = (arr) =>
//     {
//         let even = []
//         let od = []
//         for(let i = 0; i<=arr.length;i++){
//         if(arr[i]%2==0){
//             even.push(arr[i])
//         }else{
//         od.push(arr[i])
//         }}
//             return even
//         }
//            console.log(odd([1,2,3,4,5,6]));//boday part is same as anonyms function and fn is called like iife and fn ends b4 console
        
