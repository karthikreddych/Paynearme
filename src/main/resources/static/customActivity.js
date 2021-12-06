define([
    'postmonger'
], function(
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
    var payload = {};
    var lastStepEnabled = false;
    var steps = [ // initialize to the same value as what's set in config.json for consistency
    {'key': 'idselection', 'label': 'MBO Gayeway Template and SMS ID Selection'}
    //{'key': 'SMSidselection', 'label': 'Select SMS ID'}
    ];
    var currentStep = steps[0].key;

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
        console.log(data);
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

        console.log(inArguments);

        $.each(inArguments, function (index, inArgument) {
            $.each(inArgument, function (key, val) {

                if (key === 'SMSids') {
                    $('#SMSid').val(val);
                }

                if (key === 'TemplateIDs') {
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
        console.log(tokens);
        authTokens = tokens;
    }

    function onGetEndpoints (endpoints) {
        // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
        console.log(endpoints);
    }

    function save() {
	//alert($('#SMSid').val());
        var SMSidValue = $('#SMSid').val();
        var TemplateIDValue = $('#TemplateID').val();
        //var messagingService = $('#messagingService').val();
       // var body = $('#messageBody').val();

        payload['arguments'].execute.inArguments = {
            "SMSids": SMSidValue,
            "TemplateIDs": TemplateIDValue,
            //"messagingService": messagingService,
            //"body": body,
            "to": "{{Contact.Attribute.SBT.Contact}}" //<----This should map to your data extension name and phone number column
        };

        payload['metaData'].isConfigured = true;

        console.log(payload);
        connection.trigger('updateActivity', payload);

    }                    

});