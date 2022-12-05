// var inputValue ;
// var inputElement = document.querySelector('input[ type="checkbox"');

// inputElement.onchange = function(e){
//     console.log(e.target.check);
// }

// var inputElement = document.querySelector('input[type="text"]');

// inputElement.onkeyup = function(e){
//     console.log(e.which);

//     switch (e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//         case 13:
//             console.log('Enter');
//             break;
//     }
// }

// document.onkeypress = function(e){
    

//     switch (e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//         case 13:
//             console.log('Enter');
//             break;
//     }
// }

// aElement = document.links;

// for (var i = 0 ; i < aElement.length ; ++i){
//     aElement[i].onclick = function(e){
//         if(!e.target.href.startsWith('https://www.facebook.com/profile.php?id=100022877893393')){
//             e.preventDefault() ; 
//         }
//     }
// }

// preventDefault () sẻ ngăn chặn sự tiếp tục diển ra


// var ulElement =  document.querySelector('ul')

// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }

// ulElement.onclick = function(e){
//     console.log(e.target);
// }


var btnElement = document.getElementById('btn');

// LẮNG NGHE SK D
function viec1 (){
    console.log('Viec 1');
}
function viec2 (){
    console.log('Viec 2');
}
btnElement.addEventListener('click', viec1);
// btnElement.addEventListener('click', viec2);
 
// HUỸ BỎ LẮNG NGHE
setTimeout(function(){
  btnElement.removeEventListener('click', viec1);
},3000);