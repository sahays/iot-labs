var awsIot = require('aws-iot-device-sdk');
var device = awsIot.device({
 "host": "A2AKOYC5UU155B.iot.eu-west-1.amazonaws.com",
	"port": 8883,
	"clientId": "demo-iot",
	"thingName": "demo-iot",
	"caCert": "rootCA.pem",
	"clientCert": "65deea1442-certificate.pem.crt",
	"privateKey": "65deea1442-private.pem.key",
  	"region": "eu-west-1"
});
var msg = {
 "state": {
 "reported": {
 "temperature": 79
 },
 "desired": {
 "temperature": 81
 }
 }
}

device.on('connect', function() {
 console.log('Connected!');
 setTimeout(function() {
 device.publish('$aws/things/demo-iot/shadow/update', JSON.stringify(msg));
 console.log(msg);
 process.exit(0);
 }, 1500);
});