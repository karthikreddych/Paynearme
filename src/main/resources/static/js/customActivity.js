define([
    'postmonger'
], function(
    Postmonger
) {
    'use strict';
	//var loanId ={};
    var connection = new Postmonger.Session();
	//var contacts = {};
    var payload = {};
    var lastStepEnabled = false;
    var steps = [ // initialize to the same value as what's set in config.json for consistency
    {"key": "step1", "label": "MBO-SMS"}
    ];
    var currentStep = steps[0].key;
	var authTokens = {};
	var eventDefinitionKey='';
	//var deFields = [];
    $(window).ready(onRender);
    
    try {
    connection.on('initActivity', initialize);
    connection.on('requestedTokens', onGetTokens);
    connection.on('requestedEndpoints', onGetEndpoints);
    //connection.on('requestedInteraction', onRequestedInteraction);
      
    connection.on('requestedTriggerEventDefinition', onRequestedTriggerEventDefinition);
    connection.on('requestedDataSources', onRequestedDataSources);
    connection.on('clickedNext', onClickedNext);
    } catch(err) {
        console.log(err);
    }

    function onRender() {
	//debugger
        try {
        // JB will respond the first time 'ready' is called with 'initActivity'
        connection.trigger('ready');
        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');
		connection.trigger('requestInteraction');
        connection.trigger('requestTriggerEventDefinition');
        connection.trigger('requestDataSources'); 
        connection.trigger('requestTriggerEventDefinition');
        connection.trigger('requestSchema');
        //connection.trigger('requestdata');
        } catch(err) {
            throw(err);
            //console.log(err);
        }
    }
	connection.on('requestedTriggerEventDefinition',
	function(eventDefinitionModel) {
    if(eventDefinitionModel){

        eventDefinitionKey = eventDefinitionModel.eventDefinitionKey;
        console.log(">>>Event Definition Key " + eventDefinitionKey);
        /*If you want to see all*/
        console.log('>>>Request Trigger', 
        JSON.stringify(eventDefinitionModel));
    }

});
	connection.on('requestedSchema', function (data) {
   		// save schema
   	console.log('** Schema **', JSON.stringify(data['schema']));
   	}); 
   	 
	function onRequestedDataSources(dataSources){
        console.log('* requestedDataSources *');
        //console.log(dataSources);
        console.log('** dataSources **', JSON.stringify(dataSources));
    }

    /*function onRequestedInteraction (interaction) {    
        console.log('* requestedInteraction *');
        console.log(interaction);
     }*/
     

     function onRequestedTriggerEventDefinition(eventDefinitionModel) {
        console.log('* requestedTriggerEventDefinition *');
        console.log(eventDefinitionModel);
    }
    
    connection.on('requestedInteraction', function(settings){
    eventDefinitionKey = settings.triggers[0].metaData.eventDefinitionKey;
	});

  function initialize(data) {
	//debugger
        //console.log(data);
        console.log('Data: '+JSON.stringify(data));
        if (data) {
            payload = data;
		//console.log("***Initialize  " + data);
        }   
        

        var hasInArguments = Boolean(
            payload['arguments'] &&
            payload['arguments'].execute &&
            payload['arguments'].execute.inArguments &&
            payload['arguments'].execute.inArguments.length > 0
         );

        var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

         console.log('Has In arguments: '+JSON.stringify(inArguments));
        try {
         $.each(inArguments, function (index, inArgument) {
            $.each(inArgument, function (key, val) {

                if (key === 'TemplateName_Value') {
                    $('#TemplateName').val(val);
                }

                if (key === 'TemplateID_Value') {
                    $('#TemplateID').val(val);
                }

               })
        });

   
        connection.trigger('updateButton', {
            button: 'next',
            text: 'Done',
            visible: true
       
    });
}   catch(err) {
         throw(err);
       // console.log(err);
    }
}
   

    function onGetTokens (tokens) {
	//debugger
        // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
        console.log("Tokens function: "+JSON.stringify(tokens));
        authTokens = tokens;

    }
    

    function onGetEndpoints (endpoints) {
	//debugger
        // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
        console.log("Get End Points function: "+JSON.stringify(endpoints));
        //console.log(endpoints);
    }
    
    /*function requestedInteractionHandler (settings) {
		debugger
			eventDefinitionKey = settings.triggers[0].metaData.eventDefinitionKey;
			$('#select-entryevent-defkey').val(eventDefinitionKey);

			if (settings.triggers[0].type === 'SalesforceObjectTriggerV2' &&
					settings.triggers[0].configurationArguments &&
					settings.triggers[0].configurationArguments.eventDataConfig) {

				// This workaround is necessary as Salesforce occasionally returns the eventDataConfig-object as string
				if (typeof settings.triggers[0].configurationArguments.eventDataConfig === 'string' ||
							!settings.triggers[0].configurationArguments.eventDataConfig.objects) {
						settings.triggers[0].configurationArguments.eventDataConfig = JSON.parse(settings.triggers[0].configurationArguments.eventDataConfig);
				}

				settings.triggers[0].configurationArguments.eventDataConfig.objects.forEach((obj) => {
					deFields = deFields.concat(obj.fields.map((fieldName) => {
						return obj.dePrefix + fieldName;
					}));
				});

				
				}};
    console.log("deFields: " +JSON.stringify(deFields));
    */
	
function onClickedNext() {
var TemplateNameValue = $('#TemplateName').val();
var TemplateIDValue = $('#TemplateID').val();
if( TemplateNameValue === "" || TemplateIDValue === "")
{
document.getElementById("step2").style.display="block";
connection.trigger("nextStep");
}
else
{
save();
}
}
	
/*const path = require('path');	
const JWT = require(path.join("/", 'JwtDecoder.js'));

JWT(req.body, process.env.My_JWT_Key, async function(err, decoded) {
        if (err) {
            console.log("Invalid JWT::" + req.body);
            return res.status(401).end();
        } else {
            console.log("JWT Authentication Successful:", decoded);
        }
});*/
    function save() {
	    
	/*    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "grant_type": "client_credentials",
  "client_id": "omi3pvbnadx10b3c85ph5g6n",
  "client_secret": "V3hLV15oxRxNPx6XvM6olhuX",
  "scope": "email_read email_write email_send",
  "account_id": "520000774"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mctbtbl80ylvj5wj8r5tf6lcjzp0.auth.marketingcloudapis.com/v2/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/
	    
	//debugger
        try {
		
		var TemplateNameValue = $('#TemplateName').val();
        var TemplateIDValue = $('#TemplateID').val();

	
	    //payload['metaData'].isConfigured = true;
		//payload.name = name;
		
		//payload['arguments'] = payload['arguments'] || {};
    	//payload['arguments'].execute = payload['arguments'].execute || {};
    	
  payload['arguments'].execute.inArguments = [{
           
  "Header": myHeaders,			
  "loanId": "{{Contact.Attribute.LCSMS.loanId}}",
  "eventType": "{{Contact.Attribute.LCSMS.eventType}}",
  "communicationChannel": "{{Contact.Attribute.LCSMS.communicationChannel}}",
  "primaryActorId": "{{Contact.Attribute.LCSMS.primaryActorId}}",
  "externalReferences": [],
  "businessUnit": "{{Contact.Attribute.LCSMS.businessUnit}}",
  "messageContent": "{{Contact.Attribute.LCSMS.messageContent}}",
  "messageSubjectLine": "{{Contact.Attribute.LCSMS.messageSubjectLine}}",
  "note": "{{Contact.Attribute.LCSMS.note}}",
  "source": "{{Contact.Attribute.LCSMS.source}}",
  "sourceMessageId": "{{Contact.Attribute.LCSMS.sourceMessageId}}",
  "vendor": "{{Contact.Attribute.LCSMS.vendor}}",
  "vendorTemplateId": TemplateIDValue,
  "messageParams": {
    "key1": "",
    "key2": "",
  },
  "messageOptions": {
    "doNotCheckDNC": "{{Contact.Attribute.LCSMS.doNotCheckDNC}}",
    "channelAddress": "{{Contact.Attribute.LCSMS.channelAddress}}",
    "doNotCheckLCSMSCompliance": "{{Contact.Attribute.LCSMS.doNotCheckLCSMSCompliance}}",
  },
  "messageSchedulingOptionsList": [{
      "scheduleTime": "{{Contact.Attribute.LCSMS.scheduleTime}}",
      "messageContent": "{{Contact.Attribute.LCSMS.messageContent}}",
    }]

}];
        
        
        
		payload['metaData'].isConfigured = true;
		
		console.log(payload);
		connection.trigger('updateActivity', payload);		
           
        } catch(err) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHtml = err;
        }

    
	console.log("Template Name: " +JSON.stringify(TemplateNameValue));
	console.log("Template ID: " +JSON.stringify(TemplateIDValue));
		
	}


	//	fetch('https://demo-default.uw2.customer-messaging-gateway-nprd.lendingcloud.us/api/customer-messaging-gateway/v1/message', {
  	//	method: "POST",
  //		body: JSON.stringify(payload['arguments'].execute.inArguments),
  //		headers: {"Content-type": "application/json; charset=UTF-8"}
//		})
	//	.then(response => response.json()).catch(err => console.log(err)) 
   //     .then(json => console.log(json)).catch(err => console.log(err)); 

});
