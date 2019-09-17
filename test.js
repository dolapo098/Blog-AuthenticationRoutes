// let man = {
//     name : 'default',
//     lastname : 'default',
//     getFullName : function(){
//         return this.name + this.lastname;
//     }
// }

// let woman ={
//     name:'dolapo',
//     lastname:'ogunsanya'
// }

// woman._proto_ = man ;
// console.log(woman);
//  for (var prop in woman){
//      if(woman.hasOwnProperty()){
//     console.log(prop,woman[prop]) 
// };
//  }

// function person (){
//     this.name = 'bola' ;
//     this.surname = 'adekoya';
//     console.log(this.name + this.surname);
// }

// let being = new person();

// var ada =  {
//     name : 'ngwocha',
//     surname :'benita',
//     // getName : function(){
//     //     var getId= this.name  + ''+  this.surname;
//     // //     return getId;
//     // }
// }


// var amara = function(){
//     console.log(this.name + "" + this.surname);
// }
// var getFullName = amara.bind(ada);
// getFullName();

// // Functional Programming

// function MapForEach(arr , fn){
//     let array = [];
//     for (let i = 0; i< arr.length; i++){
//         array.push(
//              fn(array[i]));
//     };
//     return array;
// }

// let arry = [10,20,30];
// let mapArry = MapForEach(arry, function(item){
//     return item * 2;
// });
// console.log(mapArry);
// for (let i = 0; i <arry.length; i++){
//     let newArry =[];
//     newArry.push(arry[i]  * 2);
//     console.log(newArry);
// }

// function stars(height){
    
//         var rows= '';
//         for(var j=1; j<= height; j++){
//             rows += '*' ;.j
//          console.log(rows);
//         }
// }
// console.log(stars(4));

// Pascal Triangle Using Recurssion
//   function PascalTriangle(depth,sp){
//     console.log(sp);
//     sp.unshift(0);
//     sp.push(0);
//     let newElement = [];
//     for (let i=0; i < sp.length -1; i++){
//       newElement.push(sp[i] + sp[i +1]);
//     }
//       if (depth <= 0){
//         return newElement;
//       }
//         PascalTriangle(depth-1, newElement);
      
//   }
//   PascalTriangle(5, [1]);

//Fibinacci Series
fibonacci = (long)=>{
  let fibarry = [1,1];
  for(i= 2; i < long; i++){
  fibarry.push(fibarry[i-1] + fibarry[i-2]); 
  }
  return fibarry;
}
console.log(fibonacci(5));