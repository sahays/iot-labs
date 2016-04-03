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
 val1: "Value 1",
 val2: "Value 2",
 val3: "Value 3",
 message: "Test Message"
};

device.on('connect', function() {
 console.log('Connected!');
 setTimeout(function() {
	 for(x=0;x<100;x++) {
	 message.val1 = "Value 1-" + x;
	 message.val2 = "Value 1-" + x;
	 message.val3 = "Value 1-" + x;
	 message.message = "Test Message " + x;
	 device.publish('demo-iot', JSON.stringify(message));
	 console.log("Published message " + x + " Data: " + JSON.stringify(message));
	 }
	 process.exit();
 }, 5000);
 console.log('Sending ...');

});