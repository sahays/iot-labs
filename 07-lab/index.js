var awsIot = require('aws-iot-device-sdk');

// var aws = require('aws-sdk');

// var iotdata = new aws.IotData({endpoint: "A2AKOYC5UU155B.iot.eu-west-1.amazonaws.com"});

var lwtMessage = {
 "message": "got disconnected"
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
	 "topic":"demo-iot",
	 "payload": JSON.stringify(lwtMessage),
	 "qos":0,
	 "retain":false
	}
});

device.on('message', function(topic, message) {
 	console.log('message', topic, message.toString());
});

device.on('connect', function() {
	 console.log('Connected!');
	 setTimeout(function() {
	 	device.subscribe('$aws/things/demo-iot/shadow/update/delta');
	 }, 1500);
	 console.log('Waiting ...');
});

// var e = {
// 	command: 'test cli'
// };

// console.log("Our command object from iOS: " + JSON.stringify(e));
//      var shadow = {
//         "state" : {
//             "desired" : {
//                 "command": e.command
//             }
//         }
//      };
     
//      var params = {
//         topic: '$aws/things/demo-iot/shadow/update',
//         payload: JSON.stringify(shadow),
//         qos: 0
//      };
     
//      iotdata.getThingShadow({
//          thingName:'demo-iot'
//      }, function(err, data){
//          console.log([err,data]);
//      });
    
//     console.log('calling publish');
//     //console.log(iotdata);
//     var request = iotdata.publish(params, function(err, data){
//         console.log('publishing...');
//         if(err){
//             console.log(err);
//             process.exit(1);
//         }
//         else {
//             console.log("Shadow Updated");
//             process.exit(0);
//         }
//      });

