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

var message = {
 message: "Hello from Lab 04"
};

device.on('connect', function() {
 console.log('Connected!');
 setTimeout(function() {
 device.publish('websocket', JSON.stringify(message));
 console.log('Pushed message to Topic...');
 process.exit();
 }, 1000);

});