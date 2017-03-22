var express = require('express');
var fs = require('fs');
var recall = require('./subfile.js');
var day = require('./day1.js');
var feb3 = require('./feb3.js');
var app = express();
var something = require('./app.js')
//
// var data = fs.readFileSync('words.json');
// var words = JSON.parse(data);
//
// var data1 = fs.readFileSync('less.json');
// var less1 = JSON.parse(data1);
// var less = less1.Cipla;
//
//
// var cip = words.Cipla.OpenPrice;
// var cipl = words.Cipla.ClosePrice;



app.listen(3000, function() {
    console.log('server 3000 connected');
    // for (var prop in cip ) {
    //   for(var i in cipl)
    //   {
    //     if(cipl[i] > cip[prop]){
    //     console.log(prop +' and '+ cip[prop]);
    //
    //   }
    //      break;
    //
    //   }
    //
    //
    //
     // }
    //
//day();
//recall();
            //    feb3();
               something();
    // function cp(i) {
    //
    //     while (cipl[(i - 1) + "-February-2017"] == undefined) {
    //         i--;
    //     }
    //
    //     if (cip[i + "-February-2017"] < cipl[(i - 1) + "-February-2017"]) {
    //         console.log(i + "-February-2017" + '  and  ' + cip[i + "-February-2017"]);
    //     }
    //     recall();
    // } // to check undefined

});

// var a=words.Cipla.OpenPrice['16-February-2017'];
// console.log(a);

// app.get('/', searchWord);
//
// function searchWord(req, res) {

//     res.sendStatus(a);
// }

// app.get('/add/:word/:num', addWord);
// function addWord(req, res) {
//     var data = req.params;
//     var word = data.word;
//     var score = Number(data.num);
//     var reply;
//     if (!score) {
//         reply = {
//             status: 'enter score'
//         }
//     } else {
//         words[word] = score;
//
//         var data = JSON.stringify(words, null, 2);
//         fs.writeFile('words.json', data, finished);
//
//         function finished(err) {
//             console.log('all set..')
//         }
//
//         reply = {
//             status: 'data found'
//
//         }
//     }
//     res.send(reply);
// }
