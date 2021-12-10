define([
    'postmonger'
], function(
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
	//var contacts = {};
    var payload = {};
    var lastStepEnabled = false;
    var steps = [ // initialize to the same value as what's set in config.json for consistency
    {"key": "step1", "label": "MBO Gayeway Template and SMS ID Selection	"}
    ];
    var currentStep = steps[0].key;
	//var authTokens = {};
    $(window).ready(onRender);

    connection.on('initActivity', initialize);
    connection.on('requestedTokens', onGetTokens);
    connection.on('requestedEndpoints', onGetEndpoints);
    connection.on('clickedNext', save);
    //connection.on('clickedBack', onClickedBack);
    //connection.on('gotoStep', onGotoStep);

    function onRender() {
        // JB will respond the first time 'ready' is called with 'initActivity'
        connection.trigger('ready');
        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');
    }

  function initialize(data) {
        //console.log("***Initialize  " + data);
        if (data) {
            payload = data;
        }    

        var hasInArguments = Boolean(
            payload['arguments'] &&
            payload['arguments'].execute &&
            payload['arguments'].execute.inArguments &&
            payload['arguments'].execute.inArguments.length > 0
         );

        var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

         //console.log('Has In arguments: '+JSON.stringify(inArguments));

         $.each(inArguments, function (index, inArgument) {
            $.each(inArgument, function (key, val) {

                if (key === 'SMSid_Value') {
                    $('#SMSid').val(val);
                }

                if (key === 'TemplateID_Value') {
                    $('#TemplateID').val(val);
                }

               })
        });

        connection.trigger('updateButton', {
            button: 'next',
            text: 'done',
            visible: true
        });

    }

    function onGetTokens (tokens) {
        // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
        //console.log("Tokens function: "+JSON.stringify(tokens));
        //authTokens = tokens;
    }

    function onGetEndpoints (endpoints) {
        // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
        //console.log("Get End Points function: "+JSON.stringify(endpoints));
    }

    function save() {
		//alert($('#SMSid').val());
		console.log("***Calling save function: ");
        var SMSidValue = $('#SMSid').val();
        var TemplateIDValue = $('#TemplateID').val();
        
        payload['arguments'].execute.inArguments = [{
            "SMSid_Value": SMSidValue,
            "TemplateID_Value": TemplateIDValue,
			 //"tokens": authTokens,
            "to": "{{Contact.Attribute.SMS.Contact}}" //<----This should map to your data extension name and phone number column
			
			
        }];
		//console.log("Contact number from DE: "+JSON.stringify("{{Contact.Attribute.SMS.Contact}}"));
				
        payload['metaData'].isConfigured = true;

        console.log("***Payload on SAVE function: ");
        connection.trigger('updateActivity', payload);
		
		/*fetch('https://jsonplaceholder.typicode.com/posts', {
  		method: "POST",
  		body: JSON.stringify(payload),
  		headers: {"Content-type": "application/json; charset=UTF-8"}
		})
		.then(response => response.json()) 
		.then(json => console.log(json));*/
    }                    

});