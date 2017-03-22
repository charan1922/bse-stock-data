var express = require('express');
var fs = require('fs');
var data = fs.readFileSync('words.json');
var bseData = JSON.parse(data);

var stockArray = ['AdaniPorts', 'AsianPaints', 'AxisBank', 'BajajAuto', 'BhartiAirtel'];
var less = [];
var more = [];
module.exports = function() {
    stockArray.forEach(list);
};

function list(element) {

    for (var i = 2; i < 29; i++) {

        if (bseData[element]['Open Price'][i + "-February-2017"] !== undefined) {
            var j = i;
            while (bseData[element]['Close Price'][(j - 1) + "-February-2017"] === undefined) {
                j--;
            }

            if (bseData[element]['Open Price'][i + "-February-2017"] < bseData[element]['Close Price'][(j - 1) + "-February-2017"]) {

                //less[i + "-February-2017"] = bseData[element]['Open Price'][i + "-February-2017"];
                //  less.addElem({[i + "-February-2017"] :bseData[element]['Open Price'][i + "-February-2017"]});

                function updateRecords(id, prop, value) {
                    less.push({
                        [id]: {
                            [prop]: value
                        }
                    });
                }

                updateRecords(element, i + "-February-2017", parseInt(bseData[element]['Open Price'][i + "-February-2017"]));

                var tdata = JSON.stringify(less, null, 2);
                fs.writeFile('less.json', tdata, finished);

                function finished(err) {
                    console.log('all set..') // inner if
                }

            } else if (bseData[element]['Open Price'][i + "-February-2017"] > bseData[element]['Close Price'][(j - 1) + "-February-2017"]) {

                //less[i + "-February-2017"] = bseData[element]['Open Price'][i + "-February-2017"];
                //  less.addElem({[i + "-February-2017"] :bseData[element]['Open Price'][i + "-February-2017"]});

                function updateRecords(id, prop, value) {
                    more.push({

                        [id]: {
                            [prop]: value
                        }
                    });
                }

                updateRecords(element, i + "-February-2017", parseInt(bseData[element]['Open Price'][i + "-February-2017"]));

                var tdata = JSON.stringify(more, null, 2);
                fs.writeFile('more.json', tdata, finished);

                function finished(err) {
                    console.log('all set more..')
                }

            } // inner if

        } //if

    } //for loop

}; //function
