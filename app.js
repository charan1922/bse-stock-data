var fs = require('fs');
var lessData = fs.readFileSync('less.json');
var moreData = fs.readFileSync('more.json');
var day1 = fs.readFileSync('day1.json');
var parsedDay1 = JSON.parse(day1);
var parsedLessData = JSON.parse(lessData);
var parsedMoreData = JSON.parse(moreData);

var stockArray = ['AdaniPorts', 'AsianPaints', 'AxisBank', 'BajajAuto', 'BhartiAirtel'];
var fu = [];
var feb3 = [];;

module.exports = function() {
    //temp();
    lessEx();
};
function lessEx(){
for(var i=0;i<13;i++){
var companyName=Object.keys(parsedLessData[i]);
var companyValues=parsedLessData[i][companyName[0]];
// if(Object.keys(companyValues) === '3-February-2017'){
//     console.log('hi');
// }

console.log(companyValues.hasOwnProperty('3-February-2017'));
}
}



// function temp() {
//     var companyName = Object.keys(parsedDay1[0]);
//     var companyData = parsedDay1[0][companyName[0]];
//     // console.log(parsedDay1[0][companyName[0]]['2-February-2017'])
//     var investData;
//     for (var i = 0; i < parsedMoreData.length; i++) {
//
//         if (parsedMoreData[i][companyName] !== undefined) {
//             investData = parsedMoreData[i][companyName]['28-February-2017'];
//         }
//     }
//
//    q(investData);
//
//     function q(el){
//  var companyName=Object.keys(parsedDay1[0]);
// var companyQuantity = parsedDay1[0][companyName[0]]['quantity'] * el;
// feb3.push({
//   [companyName[0]]:  {
//   ['28-February-2017']:el,
//   money:companyQuantity
// }
// });
//
//  var data = JSON.stringify(feb3,null,2);
//  fs.writeFile('feb3.json',data,finished);
// function finished(err){
// console.log('feb3 data set');
//  }
//     }
//----- main data
// var x = parsedMoreData.forEach(function(el) {
//   if(Object.keys(el)[0] == companyName[0]) {
//     if(el[companyName[0]]['28-February-2017']){
//       investData = el[companyName[0]['28-February-2017']];
//       // console.log(el[companyName[0]]['28-February-2017']);
//     }
//     // console.log(el[companyName[0]]['28-February-2017']);
//   }
//   // console.log(Object.keys(el)[0]);
//     // console.log(Object.keys(el)[0] == companyName[0])
// })
//console.log(investData);

//}
