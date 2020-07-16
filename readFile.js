var fs = require('fs');

var d = new Date();
var msg = `\ncurrent time is ${d.getHours()}: ${d.getMinutes()}:${d.getSeconds()}`;

fs.rename('note2.txt','note3.txt',function(err){
    if(err){
        console.log('error in rename');
    }else{
        console.log('file renamed!');
    }

})
// fs.exists('note22222.txt',function(found){
//     if (found)
//         console.log('File found');
//     else
//         console.log('Not found!');
// })

// fs.appendFile('note.txt',msg,'utf8',function(err){
//     if(err){2
//         console.log('file not found!');
//     }else{
//         console.log('Data  updated!fsfs')
//     }
// })
// fs.readFile('note.txt','utf8', function (err, data) {
//     if (err) {
//         console.log('Something is wrong!!!!');
//     }else{
//         console.log(data);
//     }
// });
