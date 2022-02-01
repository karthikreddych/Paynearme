package com.lendingclub.smsbe.beans;

import java.time.LocalDate;
import java.util.Map;

public class RequestToCommsGatewayBeans {

	private int loanId;

    private String eventType;

    private String communicationChannel;

    private int primaryActorId;

    private String businessUnit;

    private String messageContent;

    private String messageParams;
    
    private LocalDate scheduleDate;
    
    private String vendor;
    
    public int getloanId() {
        return loanId;
    }
    
    public void setloanId(final int loanId) {
        this.loanId = loanId;
    }
    
    public String geteventType() {
        return eventType;
    }
    
    public void seteventType(final String eventType) {
        this.eventType = eventType;
    }
    
    public String getcommunicationChannel() {
        return eventType;
    }
    
    public void setcommunicationChannel(final String communicationChannel) {
        this.communicationChannel = communicationChannel;
    }
    
    public int getprimaryActorId() {
        return primaryActorId;
    }
    
    public void setprimaryActorId(final int primaryActorId) {
        this.primaryActorId = primaryActorId;
    }
    
    public String getbusinessUnit() {
        return eventType;
    }
    
    public void setbusinessUnit(final String businessUnit) {
        this.businessUnit = businessUnit;
    }
    
    public String getmessageContent() {
        return messageContent;
    }
    
    public void setmessageContent(final String messageContent) {
        this.messageContent = messageContent;
    }
    
    public String getmessageParams() {
        return messageParams;
    }
    
    public void setmessageParams(final String messageParams) {
        this.messageParams = messageParams;
    }
    
    public LocalDate getscheduleDate() {
        return scheduleDate;
    }
    
    public void setmessageParams(final LocalDate scheduleDate) {
        this.scheduleDate = scheduleDate;
    }
    
    public String getvendor() {
        return messageParams;
    }
    
    public void setvendor(final String vendor) {
        this.vendor = vendor;
    }
    
        
}
