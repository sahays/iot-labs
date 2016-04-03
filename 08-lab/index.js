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

var message = {
	 val1: "Value 1",
	 val2: "Value 2",
	 val3: "Value 3",
	 message: "Test Message",
	 SeqNumber: "",
	 SeqSort: "1"
};

device.on('message', function(topic, message) {
 	console.log('message', topic, message.toString());
});

device.on('connect', function() {
	 console.log('Connected!');
	 setTimeout(function() {
	 for(x=0;x<100;x++) {
		 message.val1 = "Value 1-" + x;
		 message.val2 = "Value 1-" + x;
		 message.val3 = "Value 1-" + x;
		 message.message = "Test Message " + x;
		 message.SeqNumber = x;
		 device.publish('demo-iot-lab8', JSON.stringify(message));
		 console.log("Published message " + x + " Data: " + JSON.stringify(message));
	 }
}, 2500);
 console.log('Sending to DynamoDB ...');
});


