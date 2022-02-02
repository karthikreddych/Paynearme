package com.lendingclub.smsbe.beans;

import java.time.LocalDate;
import java.util.Map;

public class RequestToCommsGatewayBeans {

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

	public String getLoanId() {
		return loanId;
	}

	public void setLoanId(String loanId) {
		this.loanId = loanId;
	}

	public String getEventType() {
		return eventType;
	}

	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	public String getCommunicationChannel() {
		return communicationChannel;
	}

	public void setCommunicationChannel(String communicationChannel) {
		this.communicationChannel = communicationChannel;
	}

	public String getPrimaryActorId() {
		return primaryActorId;
	}

	public void setPrimaryActorId(String primaryActorId) {
		this.primaryActorId = primaryActorId;
	}

	public String getBusinessUnit() {
		return businessUnit;
	}

	public void setBusinessUnit(String businessUnit) {
		this.businessUnit = businessUnit;
	}

	public String getMessageContent() {
		return messageContent;
	}

	public void setMessageContent(String messageContent) {
		this.messageContent = messageContent;
	}

	public String getMessageParams() {
		return messageParams;
	}

	public void setMessageParams(String messageParams) {
		this.messageParams = messageParams;
	}

	public String getScheduleDate() {
		return scheduleDate;
	}

	public void setScheduleDate(String scheduleDate) {
		this.scheduleDate = scheduleDate;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public MessageOptionsBeans getMessageOptionsBeans() {
		return messageOptionsBeans;
	}

	public void setMessageOptionsBeans(MessageOptionsBeans messageOptionsBeans) {
		this.messageOptionsBeans = messageOptionsBeans;
	}
   
        
}
