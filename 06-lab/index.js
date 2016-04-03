var awsIot = require('aws-iot-device-sdk');

var lwtMessage = {
 "message": "We disconnected! Help!"
};

var device = awsIot.device({
	"host": "A2AKOYC5UU155B.iot.eu-west-1.amazonaws.com",
	"port": 8883,
	"clientId": "demo-iot-arbitrary",
	"thingName": "demo-iot",
	"caCert": "rootCA.pem",
	"clientCert": "65deea1442-certificate.pem.crt",
	"privateKey": "65deea1442-private.pem.key",
  	"region": "eu-west-1",
  	will: {
	 "topic":"demo-lwt",
	 "payload": JSON.stringify(lwtMessage),
	 "qos":0,
	 "retain":false
	}
});

var message = {
	 val1: "Value 1",
	 val2: "Value 2",
	 val3: "Value 3",
	 message: "the good working scenario before crash"
};

device.on('connect', function() {
 console.log('Connected!');

 setTimeout(function() {
 	//device.publish('demo-lwt', JSON.stringify(message));
 }, 3500);
 console.log('Waiting for crash... Ctrl+C to crash');
});


