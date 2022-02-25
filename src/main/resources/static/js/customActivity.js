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
   	console.log('*** Schema ***', JSON.stringify(data['schema']));
   	}); 
   	 
	function onRequestedDataSources(dataSources){
        console.log('** requestedDataSources **');
        //console.log(dataSources);
        console.log('*** dataSources ***', JSON.stringify(dataSources));
    }

    /*function onRequestedInteraction (interaction) {    
        console.log('** requestedInteraction **');
        console.log(interaction);
     }*/
     

     function onRequestedTriggerEventDefinition(eventDefinitionModel) {
        console.log('** requestedTriggerEventDefinition **');
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
        console.log('payloaddata: '+payload);

        var hasInArguments = Boolean(
            payload['arguments'] &&
            payload['arguments'].execute &&
            payload['arguments'].execute.inArguments &&
            payload['arguments'].execute.inArguments.length > 0
         );

//alert(hasInArguments);
    
	//(payload['arguments'].execute.inArguments.contactID).forEach(contactID => {
       // 
	//});
	
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

    function save() {
	//debugger
        try {
		
		var TemplateNameValue = $('#TemplateName').val();
        var TemplateIDValue = $('#TemplateID').val();
       
	   payload['arguments'].execute.inArguments = [];
	   
	   payload.inArguments.forEach(loanId => {
	   
	  payload['arguments'].execute.inArguments.push({
            "TemplateName_Value": TemplateNameValue,
            "TemplateID_Value": TemplateIDValue,
			"loanId": "{{Contact.Attribute.SMS.loanId}}",
			"eventType": "{{Contact.Attribute.SMS.eventType}}",
			"communicationChannel": "{{Contact.Attribute.SMS.communicationChannel}}",
			"primaryActorId": "{{Contact.Attribute.SMS.primaryActorId}}",
			"businessUnit": "{{Contact.Attribute.SMS.businessUnit}}",
			"scheduleDate": "{{Contact.Attribute.SMS.scheduleDate}}",
			"vendor": "{{Contact.Attribute.SMS.vendor}}",
            "contacts": "{{Contact.Attribute.SMS.contacts}}", 
            "emailaddress": "{{Contact.Attribute.SMS.emailaddress}}", 
            "countrycode": "{{Contact.Attribute.SMS.countrycode}}",
			"messageContent": "{{Contact.Attribute.SMS.messageContent}}",
			"messageParams": "{{Contact.Attribute.SMS.messageParams}}",
			"doNotCheckDNC": "{{Contact.Attribute.SMS.doNotCheckDNC}}", 
        });
	   
	   });
	   
	   
	   console.log('payload------'+payload.inArguments)
	   
	   /* inArguments.forEach(loanId => {
	   payload['arguments'].execute.inArguments.push({
            "TemplateName_Value": TemplateNameValue,
            "TemplateID_Value": TemplateIDValue,
			"loanId": "{{Contact.Attribute.SMS.loanId}}",
			"eventType": "{{Contact.Attribute.SMS.eventType}}",
			"communicationChannel": "{{Contact.Attribute.SMS.communicationChannel}}",
			"primaryActorId": "{{Contact.Attribute.SMS.primaryActorId}}",
			"businessUnit": "{{Contact.Attribute.SMS.businessUnit}}",
			"scheduleDate": "{{Contact.Attribute.SMS.scheduleDate}}",
			"vendor": "{{Contact.Attribute.SMS.vendor}}",
            "contacts": "{{Contact.Attribute.SMS.contacts}}", 
            "emailaddress": "{{Contact.Attribute.SMS.emailaddress}}", 
            "countrycode": "{{Contact.Attribute.SMS.countrycode}}",
			"messageContent": "{{Contact.Attribute.SMS.messageContent}}",
			"messageParams": "{{Contact.Attribute.SMS.messageParams}}",
			"doNotCheckDNC": "{{Contact.Attribute.SMS.doNotCheckDNC}}", 
        });
	   });
		 */
	   
	   /* inArguments.forEach(loanId => {
	    inArguments.push({
            "TemplateName_Value": TemplateNameValue,
            "TemplateID_Value": TemplateIDValue,
			"loanId": "{{Contact.Attribute.SMS.loanId}}",
			"eventType": "{{Contact.Attribute.SMS.eventType}}",
			"communicationChannel": "{{Contact.Attribute.SMS.communicationChannel}}",
			"primaryActorId": "{{Contact.Attribute.SMS.primaryActorId}}",
			"businessUnit": "{{Contact.Attribute.SMS.businessUnit}}",
			"scheduleDate": "{{Contact.Attribute.SMS.scheduleDate}}",
			"vendor": "{{Contact.Attribute.SMS.vendor}}",
            "contacts": "{{Contact.Attribute.SMS.contacts}}", 
            "emailaddress": "{{Contact.Attribute.SMS.emailaddress}}", 
            "countrycode": "{{Contact.Attribute.SMS.countrycode}}",
			"messageContent": "{{Contact.Attribute.SMS.messageContent}}",
			"messageParams": "{{Contact.Attribute.SMS.messageParams}}",
			"doNotCheckDNC": "{{Contact.Attribute.SMS.doNotCheckDNC}}", 
        }); 
		
		return payload['arguments'].execute.inArguments;
	   }); */
		
		
		
		//myJson.forEach(loanId => {
		
		/* (payload['arguments'].execute.inArguments).forEach(loanId => {	
			
		payload['arguments'].execute.inArguments.push({
            "TemplateName_Value": TemplateNameValue,
            "TemplateID_Value": TemplateIDValue,
			"loanId": "{{Contact.Attribute.SMS.loanId}}",
			"eventType": "{{Contact.Attribute.SMS.eventType}}",
			"communicationChannel": "{{Contact.Attribute.SMS.communicationChannel}}",
			"primaryActorId": "{{Contact.Attribute.SMS.primaryActorId}}",
			"businessUnit": "{{Contact.Attribute.SMS.businessUnit}}",
			"scheduleDate": "{{Contact.Attribute.SMS.scheduleDate}}",
			"vendor": "{{Contact.Attribute.SMS.vendor}}",
            "contacts": "{{Contact.Attribute.SMS.contacts}}", 
            "emailaddress": "{{Contact.Attribute.SMS.emailaddress}}", 
            "countrycode": "{{Contact.Attribute.SMS.countrycode}}",
			"messageContent": "{{Contact.Attribute.SMS.messageContent}}",
			"messageParams": "{{Contact.Attribute.SMS.messageParams}}",
			"doNotCheckDNC": "{{Contact.Attribute.SMS.doNotCheckDNC}}", 
        });
		
		}); */
		//});
		
        
        //alert("Testing");
		//alert(payload['arguments'].execute.inArguments[0].TemplateName_Value);
         
		 //let payloaddata = [];
		 
		//payload.forEach(loanId => {
			
			/* payload['arguments'].execute.inArguments = [{
            "TemplateName_Value": TemplateNameValue,
            "TemplateID_Value": TemplateIDValue,
			"loanId": "{{Contact.Attribute.SMS.loanId}}",
			"eventType": "{{Contact.Attribute.SMS.eventType}}",
			"communicationChannel": "{{Contact.Attribute.SMS.communicationChannel}}",
			"primaryActorId": "{{Contact.Attribute.SMS.primaryActorId}}",
			"businessUnit": "{{Contact.Attribute.SMS.businessUnit}}",
			"scheduleDate": "{{Contact.Attribute.SMS.scheduleDate}}",
			"vendor": "{{Contact.Attribute.SMS.vendor}}",
            "contacts": "{{Contact.Attribute.SMS.contacts}}", 
            "emailaddress": "{{Contact.Attribute.SMS.emailaddress}}", 
            "countrycode": "{{Contact.Attribute.SMS.countrycode}}",
			"messageContent": "{{Contact.Attribute.SMS.messageContent}}",
			"messageParams": "{{Contact.Attribute.SMS.messageParams}}",
			"doNotCheckDNC": "{{Contact.Attribute.SMS.doNotCheckDNC}}", 
        }]; */
			
			/* var d1 = "TemplateName_Value:"+TemplateNameValue;
			var d2 = "TemplateID_Value:"+TemplateIDValue;
			var d3 = "loanId:"+TemplateName_Value.loanId;
			
                payload.push(d1,d2);  */                
         //   });   
		
		 
		/* const payloaddata = {};
		 
		(payload['arguments'].execute.inArguments).forEach(TemplateName_Value => {
			
			payloaddata[0] = {
			"TemplateName_Value": TemplateNameValue.TemplateNameValue,
            "TemplateID_Value": TemplateNameValue.TemplateIDValue,
			"loanId": "5050505"
               
			}			   
           });  */
		
		//console.log(payloaddata.toString());
		payload['metaData'].isConfigured = true;
		
		//console.log(payload);
		
		connection.trigger('updateActivity', payload);		
           
        } catch(err) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHtml = err;
        }

   // console.log(Object.values(payload['arguments'].execute.inArguments[0])); 
   
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
