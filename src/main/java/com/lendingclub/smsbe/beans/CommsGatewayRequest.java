package com.lendingclub.smsbe.beans;

import lombok.Data;

import java.time.LocalDate;
import java.util.Map;
@Data
public class CommsGatewayRequest {

	private String loanId;

    private String eventType;

    private String communicationChannel;

    private String primaryActorId;

    private String businessUnit;

    private String messageContent;

    private String messageParams;
    
    private String scheduleDate;
    
    private String vendor;
    
    private MessageOptionsBeans messageOptionsBeans;

	public MessageOptionsBeans getMessageOptionsBeans() {
		return messageOptionsBeans;
	}

	public void setMessageOptionsBeans(MessageOptionsBeans messageOptionsBeans) {
		this.messageOptionsBeans = messageOptionsBeans;
	}
   
        
}
