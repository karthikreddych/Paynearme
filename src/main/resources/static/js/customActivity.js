define([
    'postmonger'
], function (
    Postmonger
) {
    'use strict';
    var connection = new Postmonger.Session();
    var payload = {};
    var lastStepEnabled = false;
    var steps = [ // initialize to the same value as what's set in config.json for consistency
        { "key": "step1", "label": "MBO-SMS" }
    ];
    var currentStep = steps[0].key;
    var authTokens = {};
    var eventDefinitionKey = '';
    $(window).ready(onRender);

    try {
        connection.on('initActivity', initialize);
        connection.on('requestedTokens', onGetTokens);
        connection.on('requestedEndpoints', onGetEndpoints);
        connection.on('requestedTriggerEventDefinition', onRequestedTriggerEventDefinition);
        connection.on('requestedDataSources', onRequestedDataSources);
        connection.on('clickedNext', onClickedNext);
    } catch (err) {
        console.log(err);
    }

    function onRender() {
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
        } catch (err) {
            throw (err);
        }
    }
    connection.on('requestedTriggerEventDefinition',
        function (eventDefinitionModel) {
            if (eventDefinitionModel) {

                eventDefinitionKey = eventDefinitionModel.eventDefinitionKey;
                console.log(">>>Event Definition Key " + eventDefinitionKey);
                /*If you want to see all*/
                console.log('>>>Request Trigger',
                    JSON.stringify(eventDefinitionModel));
            }

        });
    connection.on('requestedSchema', function (data) {
        console.log('*** Schema ***', JSON.stringify(data['schema']));
    });

    function onRequestedDataSources(dataSources) {
        console.log('** requestedDataSources **');
        console.log('*** dataSources ***', JSON.stringify(dataSources));
    }

    function onRequestedTriggerEventDefinition(eventDefinitionModel) {
        console.log('** requestedTriggerEventDefinition **');
        console.log(eventDefinitionModel);
    }

    connection.on('requestedInteraction', function (settings) {
        eventDefinitionKey = settings.triggers[0].metaData.eventDefinitionKey;
    });

    function initialize(data) {

        console.log('Data: ' + JSON.stringify(data));
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

        console.log('Has In arguments: ' + JSON.stringify(inArguments));
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
        } catch (err) {
            throw (err);

        }
    }


    function onGetTokens(tokens) {

        console.log("Tokens function: " + JSON.stringify(tokens));
        authTokens = tokens;

    }


    function onGetEndpoints(endpoints) {
        console.log("Get End Points function: " + JSON.stringify(endpoints));

    }

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
    function save() {
        try {

            var TemplateNameValue = $('#TemplateName').val();
            var TemplateIDValue = $('#TemplateID').val();
            let auth = "{{Event." + eventDefinitionKey + '."apiKey"}}'
           
            payload['arguments'].execute.inArguments = [{
                "Mobile":"{{Event." + eventDefinitionKey + '."Mobile"}}',
                "FirstName": "{{Event." + eventDefinitionKey + '."FirstName"}}',
                "LastName" : "{{Event." + eventDefinitionKey + '."LastName"}}',
                "Note": "{{Event." + eventDefinitionKey + '."Note"}}',
                "categoryName": TemplateNameValue,
                "URL": "{{Event." + eventDefinitionKey + '."URL"}}',
                "loanId": "{{Event." + eventDefinitionKey + '."loanId"}}',
                "actorId": "{{Event." + eventDefinitionKey + '."actorId"}}',
                "campaignId": "{{Event." + eventDefinitionKey + '."campaignId"}}',
                "vendorTemplateId": TemplateIDValue
                  			 
            }];

            payload['arguments'].execute.headers = `{"Authorization":"${auth}"}`;
            payload['configurationArguments'].stop.headers = `{"Authorization":"default"}`;
  			payload['configurationArguments'].validate.headers = `{"Authorization":"default"}`;
  			payload['configurationArguments'].publish.headers = `{"Authorization":"default"}`;
  			payload['configurationArguments'].save.headers = `{"Authorization":"default"}`;
          
            payload['metaData'].isConfigured = true;

            console.log(payload);
            connection.trigger('updateActivity', payload);

        } catch (err) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHtml = err;
        }


        console.log("Template Name: " + JSON.stringify(TemplateNameValue));
        console.log("Template ID: " + JSON.stringify(TemplateIDValue));

    }

});
