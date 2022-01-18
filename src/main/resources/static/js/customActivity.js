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
	var eventDefinitionKey = {};
    $(window).ready(onRender);
    
    try {
    connection.on('initActivity', initialize);
    connection.on('requestedTokens', onGetTokens);
    connection.on('requestedEndpoints', onGetEndpoints);
    connection.on('requestedInteraction', onRequestedInteraction);
    connection.on('requestedTriggerEventDefinition', onRequestedTriggerEventDefinition);
    connection.on('requestedDataSources', onRequestedDataSources);
    connection.on('clickedNext', save);
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
        connection.trigger('requestdata');
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
        console.log(dataSources);
    }

    function onRequestedInteraction (interaction) {    
        console.log('** requestedInteraction **');
        console.log(interaction);
     }

     function onRequestedTriggerEventDefinition(eventDefinitionModel) {
        console.log('** requestedTriggerEventDefinition **');
        console.log(eventDefinitionModel);
    }

  function initialize(data) {
	//debugger
        console.log(data);
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

    function save() {
	debugger
        try {
		//alert($('#SMSid').val());
		//console.log("***Calling save function: ");
		var SMSidValue = $('#SMSid').val();
        var TemplateIDValue = $('#TemplateID').val();


         if( SMSidValue === "" || TemplateIDValue === ""){
			
			document.getElementById("step2").style.display="block"
			
			return;
            }
            		
			
	    //payload['metaData'].isConfigured = true;
		//payload.name = name;
		
        payload['arguments'].execute.inArguments = [{
            "SMSid_Value": SMSidValue,
            "TemplateID_Value": TemplateIDValue,
            "loanId": "{{Contact.Attribute." + eventDefinitionKey+".\"loanId\"}}",
            "eventType": "{{Contact.Attribute." + eventDefinitionKey+".\"eventType\"}}",
            "communicationChannel": "{{Contact.Attribute." + eventDefinitionKey+".\"communicationChannel\"}}",
            "primaryActorId": "{{Contact.Attribute." + eventDefinitionKey+".\"primaryActorId\"}}",
            "businessUnit": "{{Contact.Attribute." + eventDefinitionKey+".\"businessUnit\"}}",
            "scheduleDate": "{{Contact.Attribute." + eventDefinitionKey+".\"scheduleDate\"}}",
            "vendor": "{{Contact.Attribute." + eventDefinitionKey+".\"vendor\"}}",
            "EmailAddress": "{{Contact.Attribute." + eventDefinitionKey+".\"EmailAddress\"}}",
            "ContactNo": "{{Contact.Attribute." + eventDefinitionKey+".\"ContactNo\"}}",
			/*"loanId": "{{Contact.Attribute.SMS.loanId}}",
			"eventType": "{{Contact.Attribute.SMS.eventType}}",
			"communicationChannel": "{{Contact.Attribute.SMS.communicationChannel}}",
			"primaryActorId": "{{Contact.Attribute.SMS.primaryActorId}}",
			"businessUnit": "{{Contact.Attribute.SMS.businessUnit}}",
			"scheduleDate": "{{Contact.Attribute.SMS.scheduleDate}}",
			"vendor": "{{Contact.Attribute.SMS.vendor}}",
            "ContactNo": "{{Contact.Attribute.SMS.ContactNo}}", //<----This should map to your data extension name and phone number column
            */
			"token": authTokens
		
        }];
		payload['metaData'].isConfigured = true;
		
		console.log(payload);
		connection.trigger('updateActivity', payload);		
               
        
        //return 'Success';
        } catch(err) {
            documnet.getElement("error").style.display = "block";
            documnet.getElement("error").innerHtml = err;
        }


		

	/*fetch('https://mc-260crls51zy9yd64d27td22t8.auth.marketingcloudapis.com/v2/token', 
	{
		  
	 method: "POST",
    // headers: {"Content-Type": "application/json; charset=utf8","Access-Control-Allow-Origin": "https://mc.s8.exacttarget.com","Access-Control-Allow-Credentials": "true"},   
	headers: { 'Content-type': 'application/json'},
	mode: 'no-cors',
		
       body: JSON.stringify(
   		{
    "grant_type": "client_credentials",
    "client_id": "ca1xp4ph65dl9nxfgcbnjelk",
    "client_secret": "5B4zhj2pTWzvjAEqImLPrttU",
    "account_id": "517005233"
	})
    
		}) 
	.then(response => response.json()) 
    .then(json => {
     if(json.statusCode >= 300) { console.log("this is error")
     } else {
     console.log("this is success")
      }
    
     }).catch(err => console.log(err));*/
    
	
	//fetch ('https://mc-260crls51zy9yd64d27td22t8.rest.marketingcloudapis.com/data/v1/customobjectdata/key/4A2BD790-C652-4A58-B0DC-90FCFD0429C4/rowset?$filter=EmailAddress%20eq%20,sample@gmail.com', 
	//fetch ('https://mc-260crls51zy9yd64d27td22t8.rest.marketingcloudapis.com/data/v1/contacts/key:4A2BD790-C652-4A58-B0DC-90FCFD0429C4/rowset',
	fetch ('https://mc-260crls51zy9yd64d27td22t8.auth.marketingcloudapis.com/v2/userinfo/key:4A2BD790-C652-4A58-B0DC-90FCFD0429C4/rowset',
	
	{
	 
	 method: "GET",
    //headers: {"Content-type": "application/json, charset=UTF-8",'Authorization': "token", 'Access-Control-Allow-Origin': '*',"Access-Control-Allow-Credentials": "true"},   
	headers: { 'Content-type': 'application/json','Authorization':'eyJhbGciOiJIUzI1NiIsImtpZCI6IjQiLCJ2ZXIiOiIxIiwidHlwIjoiSldUIn0.eyJhY2Nlc3NfdG9rZW4iOiI4NnR4Uzdtb0RYMGxXYTdLQjlMcDRhamMiLCJjbGllbnRfaWQiOiJjYTF4cDRwaDY1ZGw5bnhmZ2NibmplbGsiLCJlaWQiOjUxNzAwNTIzMywic3RhY2tfa2V5IjoiUzgiLCJwbGF0Zm9ybV92ZXJzaW9uIjoyLCJjbGllbnRfdHlwZSI6IlNlcnZlclRvU2VydmVyIn0.VgdtJh3vOZ5Yt990abPZxJRozS8z0ieWSo0tKGu7S8M.bpF8qyeiI0E-atmCJIIT5_l8bAYNcxyI9eorFgEWsW8QVHFYeX2c-JQVP3RN6nA9WL4t8LSu_Pp19LY9dw1AKLlqcs8Ru21733Rx-DSnOgp57b5D6MG7YVh244XHXoGH1Ba743igLJ1QshBAPAPGzrmrw4lP_UD3rhB3m9fotIHy6iMe61eS','Access-Control-Allow-Origin': '*' },	
	//headers: { 'Content-type': 'application/json'},
	mode: 'no-cors',
	
	//Cache-Control: 'no-cache',
	//Accept-Encoding: "gzip", "deflate",
	Connection: "keep-alive",
		
       /*body: JSON.stringify(
   		{
        "keys": {
            "LoanIDs": "{{Contact.Attribute.SMS.loanId}}"
        },
        "values": {
            "Template_IDs": TemplateIDValue,
            "SMS_IDs": SMSidValue
        }
    })*/
		}) 
	.then(response => response.json()) 
    .then(json => {
     if(json.statusCode >= 300) { console.log("this is error")
     } else {
     console.log("this is success")
      }
    
     }).catch(err => console.log(err));
    
    //fetch ('https://mc-260crls51zy9yd64d27td22t8..soap.marketingcloudapis.com/Service.asmx/key:AFE77857-1B91-49A9-96B6-C201929888D5', 
   // https://{{et_subdomain}}.soap.marketingcloudapis.com/Service.asmx
	//{
	  
	// method: "GET",
    // mode: 'no-cors',
     //      headers: new Headers(
     //      {'Content-Type': 'text/xml; charset=utf-8',
      //      'Accept': '*/*',
      //      'Accept-Language': 'en-GB',
      //      'Accept-Encoding': 'gzip, deflate',
       //     'Connection': 'Keep-alive',
            //'Content-Length': Content.length                
      //      }),
                   
      //      }) 
	//.then(response => response.json()) 
    //.then(json => {
    // if(json.statusCode >= 300) { console.log("this is error")
    // } else {
    // console.log("this is success")
    //  }
    
    // }).catch(err => console.log(err));
     
    
	console.log("SMS ID: " +JSON.stringify(SMSidValue));
	console.log("Template ID: " +JSON.stringify(TemplateIDValue));
	//console.log("Loan ID: " +JSON.stringify("{{Contact.Attribute.SMS.loanId}}"));
	//console.log("Loan ID: " +JSON.stringify("{{Contact.Attribute." + eventDefinitionKey+".\"loanId\"}}"));
	
	}


	//	fetch('https://demo-default.uw2.customer-messaging-gateway-nprd.lendingcloud.us/api/customer-messaging-gateway/v1/message', {
  	//	method: "POST",
  //		body: JSON.stringify(payload['arguments'].execute.inArguments),
  //		headers: {"Content-type": "application/json; charset=UTF-8"}
//		})
	//	.then(response => response.json()).catch(err => console.log(err)) 
   //     .then(json => console.log(json)).catch(err => console.log(err)); 

});