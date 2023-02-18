// // var promise = new Promise (
// //     function(resolve, reject){
// //         // resolve({
// //         //     id:1,
// //         //     name:'js'
// //         // });
// //         resolve('co loi');
// //     }
// // );
// // promise 
// //   .then(function(){
// //      return new Promise (function (resolve) {
// //         setTimeout(resolve,3000);
// //      });
// //   })
// //   .then(function(data){
// //     console.log(data);
// //     return 2;
// //  })
// //  .then(function(data){
// //     console.log(data);
// //     return 3;
// //  })
// //  .then(function(data){
// //     console.log(data);
// //     return 4;
// //  })
// //   .catch(function(error){
// //      console.log(error);
// //   })
// //   .finally(function(){
// //     console.log('Xong');
// //   })



 function sleep(ms){
    return new Promise (function(resolve,reject){
      setTimeout(resolve,ms);
    })
 }
 sleep(2000)
   .then(function(){
    console.log(1);
    return sleep(2000);
   })
   .then(function(){
    console.log(2);
    return new Promise (function(resolve,reject){
        reject("có lỗi");
    });
   })
   .catch (function(error){
    console.log(error);
   })
   .then(function(){
    console.log(3);
    return sleep(2000);
   })
   .then(function(){
    console.log(4);
    return sleep(2000);
   })
 

// 1. Promise.resolve();
// 2. Promise.reject();
// 3. Promise.all();





// var promise = Promise.all('Thanh cong');

// promise
//   .then(function(result){
//     console.log("result :", result);
//   })
//   .catch( function(error){
//     console.log("error:", "loi");
//   })

// var promise1 = new Promise(
//     function(resolve){
//       setTimeout(function(){
//         resolve([1]);
//       },2000);
//     }
// );
// var promise2 = new Promise(
//     function(resolve){
//       setTimeout(function(){
//         resolve([2,3]);
//       },4000);
//     }
// );
// Promise.all([promise1,promise2])
//    .then((result) => {
//       var result1 = result[0];
//       var result2 = result[1];

//       var qq = result1.concat(result2); 
//       console.log(qq);
//    })  ;
    

  