// var users = [
//     {
//         id:1,
//         name:"John:"
//     },
//     {
//         id:2,
//         name:"Mary:"
//     },
//     {
//         id:3,
//         name:"Piter:"
//     }
// ];
// var comments = [
//     {
//         id:1,
//         users_id:1,
//         conment:"This is the First!"
//     },
//     {
//         id:2,
//         users_id:2,
//         conment:"This is the Second!"
//     },
// ]

// function getComments (){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(comments);
//         },1000)
//         console.log(comments);
//     })
// }
// function getUsersById (userIds){
//     console.log(userIds);
//     return new Promise(function(resolve,reject){
//         var result = users.filter(function(user){
//             return userIds.includes(user.id); 
//         })
//         setTimeout(function (){
//             resolve(result)
//         },1000)
//         // console.log(result);
//     })
// }
// getComments()
//    .then(function(comments){
//         console.log(comments);
//          var userIds = comments.map((comment) => {
//             return comment.users_id
//          })
//          console.log(userIds);
//         return getUsersById(userIds)
//                .then(function(users){
//                 return {
//                     users:users,
//                     comments:comments,
//                 };
//          })
//     })
//     .then(function(data){
//             // console.log(data);
//             var commentBlock = document.getElementById('comment-block') ;
//             var html ='';
//             data.comments.forEach(function(comment){
//                 var user = data.users.find(function(user){
//                     return user.id === comment.users_id;
//                 })
//                 html += `${user.name} ${comment.content}`;
//             })
//             commentBlock.innerHTML = html;

//      });



fetch('https://api.opendota.com/api/heroStats')
.then(response => {
   return response.json()
})
.then(datas => {
    var htmls =  datas.map(data => {
      return 
      `<li>
         <h2>${data.id}</h2>    
         <p>${data.name}</p>     
      </li>`;
    })
  var html = htmls.join('');
  document.getElementById('data-block').innerHTML = html ;
})
.catch(error => {
  console.log('lổsi');
})

       