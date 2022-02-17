package com.lendingclub.smsbe.controller;



import com.google.gson.JsonObject;

import com.lendingclub.smsbe.controller.ExecutePayload;

import com.lendingclub.smsbe.beans.CommsGatewayRequest;

//import com.lendingclub.smsbe.util.SmsRestClient;

import io.swagger.annotations.Api;

import io.swagger.annotations.ApiResponse;

import io.swagger.annotations.ApiResponses;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.client.RestTemplate;


//import javax.inject.Inject;

import java.util.Map;



@RestController

@RequestMapping("/activity")

@Api

public class ActivityController {



	private static final Logger LOGGER = LoggerFactory.getLogger(ActivityController.class);

	/*@Autowired

	SmsRestClient smsRestClient;



	@CrossOrigin

	@PostMapping(value = "/execute", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)

	@ApiResponses({

			@ApiResponse(code = 200, message = "Ok"),

			@ApiResponse(code = 400, message = "Bad Request"),

			@ApiResponse(code = 500, message = "Unexpected failure")})

    public ResponseEntity<?> execute (@RequestBody ExecutePayload payload) {



		LOGGER.info(">>>>> inside execute payload {}", payload);

		String response = smsRestClient.sendSms(payload);



		LOGGER.info(">>>>> comms response {}", response);

        return ResponseEntity.ok(response);

    }

	  
*/
		  

}

