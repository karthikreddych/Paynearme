'use strict';

define(function (require) {
	var Postmonger = require('postmonger');
	var connection = new Postmonger.Session();
	var payload = {};
	var steps = [ // initialize to the same value as what's set in config.json for consistency
    {"key": "step1", "label": "MBO-SMS"}
    ];
	var currentStep = steps[0].key;
	
	var authTokens = {};
	var eventDefinitionKey = {};

	$(window).ready(function () {
		connection.trigger('ready');
		connection.trigger('requestInteraction');
	});

	function initialize (data) {
		if (data) {
			payload = data;
		}
	}var hasInArguments = Boolean(
        payload['arguments'] &&
        payload['arguments'].execute &&
        payload['arguments'].execute.inArguments &&
        payload['arguments'].execute.inArguments.length > 0
     );

    var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

     console.log('Has In arguments: '+JSON.stringify(inArguments));
    
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
        text: 'Done',
        visible: true
    });
	

	

	function save () {
        var SMSidValue = $('#SMSid').val();
        var TemplateIDValue = $('#TemplateID').val();
        
		payload['arguments'] = payload['arguments'] || {};
		payload['arguments'].execute = payload['arguments'].execute || {};

		

		payload['arguments'].execute.inArguments = [{
			"loanId": "{{Contact.Attribute." + eventDefinitionKey+".\"loanId\"}}",
            "eventType": "{{Contact.Attribute." + eventDefinitionKey+".\"eventType\"}}",
            "communicationChannel": "{{Contact.Attribute." + eventDefinitionKey+".\"communicationChannel\"}}",
            "primaryActorId": "{{Contact.Attribute." + eventDefinitionKey+".\"primaryActorId\"}}",
            "businessUnit": "{{Contact.Attribute." + eventDefinitionKey+".\"businessUnit\"}}",
            "scheduleDate": "{{Contact.Attribute." + eventDefinitionKey+".\"scheduleDate\"}}",
            "vendor": "{{Contact.Attribute." + eventDefinitionKey+".\"vendor\"}}",
            "EmailAddress": "{{Contact.Attribute." + eventDefinitionKey+".\"EmailAddress\"}}",
            "ContactNo": "{{Contact.Attribute." + eventDefinitionKey+".\"ContactNo\"}}",
		}];

		payload['metaData'] = payload['metaData'] || {};
		payload['metaData'].isConfigured = true;

		console.log(JSON.stringify(payload));

		connection.trigger('updateActivity', payload);
	}

	connection.on('initActivity', initialize);
	connection.on('clickedNext', onClickedNext);
	connection.on('clickedNext', save);
});