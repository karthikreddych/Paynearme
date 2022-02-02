package com.lendingclub.smsbe.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.lendingclub.smsbe.beans.MessageOptionsBeans;
import com.lendingclub.smsbe.beans.RequestToCommsGatewayBeans;


import java.util.Map;

@RestController
@RequestMapping("/activity")
public class ActivityController {
	@CrossOrigin
    @PostMapping("/save")
    public ResponseEntity<String> save (@RequestBody Map<String, Object> payload) {
        return new ResponseEntity<>("Save", HttpStatus.OK);
    }
	@CrossOrigin
    @PostMapping("/publish")
    public ResponseEntity<String> publish (@RequestBody Map<String, Object> payload) {
        return new ResponseEntity<>("Publish", HttpStatus.OK);
    }
	@CrossOrigin
    @PostMapping("/validate")
    public ResponseEntity<String> validate (@RequestBody Map<String, Object> payload) {
        return new ResponseEntity<>("Validate", HttpStatus.OK);
    }
	@CrossOrigin
    @PostMapping("/stop")
    public ResponseEntity<String> stop (@RequestBody Map<String, Object> payload) {
        return new ResponseEntity<>("Stop", HttpStatus.OK);
    }
	@CrossOrigin
	@PostMapping("/execute")
    public String execute (@RequestBody ExecutePayload payload) {
		  
        /*for (Map<String, String> inArgument : payload.getInArguments()) {
            if(inArgument.containsKey("status") && inArgument.get("status").equals("true")){
                return new ActivityResult("true");
            }
        }*/
		System.out.println("Payload "+payload.toString());
		RequestToCommsGatewayBeans requestToCommsGatewayBeans = new RequestToCommsGatewayBeans();
		MessageOptionsBeans messageOptionsBeans = new MessageOptionsBeans();
		messageOptionsBeans.setDoNotCheckDNC(false);
		requestToCommsGatewayBeans.setLoanId("193205598");
		requestToCommsGatewayBeans.setMessageOptionsBeans(messageOptionsBeans);
		requestToCommsGatewayBeans.setEventType("DQ_NOTICE");
		requestToCommsGatewayBeans.setCommunicationChannel("SMS");
		requestToCommsGatewayBeans.setPrimaryActorId("248116371");
		requestToCommsGatewayBeans.setBusinessUnit("PL");
		requestToCommsGatewayBeans.setMessageContent("Hello, LC COMMS 2.");
		requestToCommsGatewayBeans.setMessageParams("{}");
		requestToCommsGatewayBeans.setScheduleDate(null);
		requestToCommsGatewayBeans.setVendor("SBT");
		
		RestTemplate restTemplate = new RestTemplate();
		// define URL to post
		String Url
		  = "https://demo-default.uw2.customer-messaging-gateway-nprd.lendingcloud.us/api/customer-messaging-gateway/v1/message";
		// create object to responseFromCommsGateway
		//ResponseFromCommsGateway responseFromCommsGateway = new ResponseFromCommsGateway();
		ResponseEntity<String> response
		  = restTemplate.postForEntity(Url,requestToCommsGatewayBeans, String.class);
		System.out.println("Response "+response.toString());
        return "Print is Working";
    }
	  
		  
}
