
var fs = require('fs');
var data = fs.readFileSync('words.json');
var bseData = JSON.parse(data);


var stockArray = ['AdaniPorts', 'AsianPaints', 'AxisBank', 'BajajAuto', 'BhartiAirtel'];

var day1= [];

module.exports = function() {
  stockArray.forEach(list);
};

function list(element) {

if(bseData[element]['Open Price']["2-February-2017"] < bseData[element]['Close Price']["1-February-2017"] )
{
  function updateRecords(id, prop, value) {
      day1.push({
          [id]: {
              [prop]: value,
              quantity:(10000/bseData[element]['Open Price']["2-February-2017"]),
              money:10000
          }
      });





  }

  updateRecords(element,"2-February-2017", parseInt(bseData[element]['Open Price']["2-February-2017"]));

  var tdata = JSON.stringify(day1, null, 2);
  fs.writeFile('day1.json', tdata, finished);

  function finished(err) {
      console.log('all day1 set..') // inner if
  }



}//if

}//list function
