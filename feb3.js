var fs = require('fs');
var data = fs.readFileSync('less.json');
var bseData = JSON.parse(data);

var stockArray = ['AdaniPorts', 'AsianPaints', 'AxisBank', 'BajajAuto', 'BhartiAirtel'];
var fu=[];
var feb3 = [];
var t = bseData;
module.exports = function() {

temp();

};


function temp(){

for(var i=0;i<14;i++){
  feb3.push( Object.keys(bseData[i]));
}


  for(var i=0;i<14;i++){
    fu.push(...feb3[i]);
  }

for(var i=0;i<14;i++)
{

  console.log(fu[i]);

}


}
