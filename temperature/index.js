
var groveSensor = require('jsupm_grove');


var temp = new groveSensor.GroveTemp(0);
console.log(temp.name());

var i = 0;
var waiting = setInterval(function() {
        var celsius = temp.value();
        var fahrenheit = celsius * 9.0/5.0 + 32.0;
        console.log(celsius + " degrees Celsius, or " +
            Math.round(fahrenheit) + " degrees Fahrenheit");
        i++;
        if (i == 10) {clearInterval(waiting);
        	process.exit();
        }
        }, 1000);