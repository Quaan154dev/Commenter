
// headiung.id = 'Heading';

var boxElenment = document.querySelector('.box');
// console.log(boxElenment);
// boxElenment.style.width = '100px';
// boxElenment.style.height = '200px';
// boxElenment.style.backgroundColor = 'red';
// boxElenment.style.width = '100px';
Object.assign(boxElenment.style, {
    width : '300px',
    height: '200px',
    // backgroundColor :  ' black',  
});
console.log(boxElenment.style.backgroundColor );

//add
//contains
//toggle
//remove
console.log(boxElenment.classList);
// THÊM CLASS
boxElenment.classList.add('red' , 'yellow');

// boxElenment.classList.add(' yellow ');
// CHECK XEM CLASS ĐÓ CÓ HAY KHÔNG 
console.log(boxElenment.classList.contains('red' ,'yellow'));
// XOÁ CLASS
//
//VD CỦA REMOVE
setInterval(()=>{
    boxElenment.classList.toggle('red');
},1000);

// GIÚP THỰC HIỆN NẾU CÓ CLASS ĐÓ THÌ BỎ NÓ ĐI CÒN KHÔNG THÌ THÊM CLAS ĐÓ VÀO
// console.log(boxElenment.classList.toggle('red' ,'yellow'));
// Thay thêm class "sub-title " thay bằng class 'content
// document.querySelector('p').classList.replace('sub-title','content');

var h1Elements = document.querySelectorAll('h1');


// h1Element.onclick = function(){
//     console.log(this);
// }
//  for( let i = 0 ;i < h1Elements.length ;i++){
//     console.log(h1Elements[i]);
     
//  }
//  for( let i = 0 ;i < h1Elements.length ;i++){
//     h1Elements[i].onclick = function(e){
//         console.log(e.target);
//     }
     
//  }

// h1Elements.onclick = function(e){
//     console.log(e.target);
// }


// function hinhchunhat (){
//     var hihii = document.getElementById("hihi").value;
//     console.log(hihii);
// }
var  inputElement = document.querySelector('input[type="text"]');

inputElement.onchange = function(e){
    console.log(e.target.vulue);
}


// inputElement.onchange = function(){

// }