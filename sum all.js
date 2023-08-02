// //Normal function
// var a = [1,2,3,4,5];
// var s=0;
// function sum(a){
//     for(let i=1;i<=a.length;i++)
//     {
//         s=s+i;
//     }
//     return s;
// }
// console.log(sum(a));

//Anonyomus Function
// var a = [1,2,3,4,5];
// var s=0;
// var sum = function (a){
//     for(let i=1;i<=a.length;i++)
//     {
//         s=s+i;
//     }
//     return s;
// }
// console.log(sum(a));
  //IIFE (Immediately Invoked Function Expression)
  //Example :-Print the odd numbers in an array
//   (function sum(a){
//         var s=0;
//         for(let i=1; i<=a.length; i++)
//         {
//              s=s+i;
//         }
//         console.log(s);
//     })([1,2,3,4,5]);

  //Arrow Function (ES6)
//   var sum = (a) =>{
//     var s=0;
//     for(let i=1;i<=a.length;i++)
//     {
//         s=s+i;
//     }
//     return s;
//   }
//   console.log(sum([1,2,3,4,5]));