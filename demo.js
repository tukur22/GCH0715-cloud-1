// for(i=1;i<10;i++){
//     console.log(i*3);
// }
function helloYou(name){
    //console.log('Hello ' + name);
    console.log(`Hello ${name}`);
}
helloYou('Cuong');

var student ={
    Name: 'Ryan',
    Age: 24
}
helloYou(student.Name);

function myUpper(str){
    return str.toLocaleUpperCase();
}
console.log(myUpper('phuong'))

function multi(n){
    for(i=1;i<=9;i++){
        console.log(`${n} x ${i} = ${n*i}`)
    }
}
multi(6);

var book = [
    {name: 'Nobody knows', pageCount: 14},
    {name: 'Sorry dear', pageCount: 18}
  ]
  
for(i=0;i<book.length;i++){
    console.log(`${book[i].name} and ${book[i].pageCount}`)
}
