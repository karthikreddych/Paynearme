package com.lendingclub.smsbe.util;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.lendingclub.core.rest.client.LcCoreRestClient;
import com.lendingclub.core.rest.client.LcCoreRestRequest;
import com.lendingclub.core.rest.client.LcCoreRestResponse;
import com.lendingclub.rest.client.errors.LcRemoteException;
import com.lendingclub.smsbe.beans.CommsGatewayRequest;
import com.lendingclub.smsbe.controller.ExecutePayload;

import java.util.Map;

public class SmsRestClient {

    LcCoreRestClient lcCoreRestClient;

    public SmsRestClient(LcCoreRestClient lcCoreRestClient){
        this.lcCoreRestClient = lcCoreRestClient;
    }

    public String sendSms(ExecutePayload payload){
        try {
            LcCoreRestRequest request = lcCoreRestClient.request()
                    .method(LcCoreRestRequest.Method.POST)
                    .name("sendsms").path("/v1/message")
                    .header("accept", "application/jwt")
                    .header("Content-Type", "application/jwt" );

            JsonObject jsonObject = getPayload(payload);
            System.out.println(">>>>>>payload is "+jsonObject);
            LcCoreRestResponse<String> response = request.execute(String.class, jsonObject.toString());
            return response.getEntity().toString();
        } catch (LcRemoteException e) {
            e.printStackTrace();
        } finally {
        }
        return null;
    }

    private JsonObject getPayload(ExecutePayload payload) {
        JsonObject jsonObject = new JsonObject();
        Map<String, String>[] inputMap = payload.getInArguments();
        Map<String, String> dataMap = inputMap[0];
        jsonObject.addProperty("loanId", dataMap.get("loanId"));
        jsonObject.addProperty("eventType", dataMap.get("eventType"));
        jsonObject.addProperty("communicationChannel", dataMap.get("communicationChannel"));
        jsonObject.addProperty("primaryActorId", dataMap.get("primaryActorId"));
        jsonObject.addProperty("businessUnit", dataMap.get("businessUnit"));
		
		jsonObject.addProperty("contacts", dataMap.get("contacts"));
        jsonObject.addProperty("messageContent", dataMap.get("messageContent"));

		jsonObject.addProperty("scheduleDate", dataMap.get("scheduleDate"));
        jsonObject.addProperty("vendor", dataMap.get("vendor"));
        jsonObject.add("messageParams", new JsonObject());

        JsonObject messageOptions = new JsonObject();
        String doNotCheckDNC = "False".equalsIgnoreCase(dataMap.get("doNotCheckDNC")) ? "false" : "true";
        messageOptions.addProperty("doNotCheckDNC", doNotCheckDNC);
        jsonObject.add("messageOptions", messageOptions);
        return jsonObject;
    }
}
