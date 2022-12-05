 //Mã hoá /Giải mã
 //Encode /decode
 //Stringify: từ JavaScsript (Type) --> JSON
 //parse : JSON --> JavaScript(Type)
 
//  var json1 = '["JS","PHP"]';
 var json2 ='{"name" : "quan" , "age":18}'
 var a = 'null' ;
//  console.log(JSON.parse(json2));

 var object = JSON.parse(json2)
 console.log(object);
 console.log(JSON.stringify([
    "JS",
    "PHP"
 ]));