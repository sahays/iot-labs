var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
	"host": "A2AKOYC5UU155B.iot.eu-west-1.amazonaws.com",
	"port": 8883,
	"clientId": "demo-iot-arbitrary",
	"thingName": "demo-iot",
	"caCert": "rootCA.pem",
	"clientCert": "65deea1442-certificate.pem.crt",
	"privateKey": "65deea1442-private.pem.key",
  	"region": "eu-west-1"
});

//AKIAI7ZIA7X76F364WWQ
//X66Z8myCveij0tI3HLuSpO0GfhMwJ+aVaB+Twg6d
//A2AKOYC5UU155B.iot.eu-west-1.amazonaws.com
//demo-iot
//eu-west-1

device.on('message', function(topic, message) {
 console.log('message', topic, message.toString());
});

device.on('delta', function(thingName, stateObject) {
 console.log('delta', thingName);
 console.log(stateObject);
});

device.on('status', function(thingName, stat, clientToken, stateObject) {
 console.log('status', thingName);
 console.log([thingName, stat, clientToken, stateObject]);
});

device.on('connect', function() {
 console.log('Connected!');

 setTimeout(function() {
 device.subscribe('$aws/things/demo-iot/shadow/update/delta');
 }, 1500);
 console.log('Waiting ...');
});


