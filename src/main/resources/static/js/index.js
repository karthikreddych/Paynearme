const userAction = async () => {
    console.log('reaching')
  const response = await fetch('api/sbtIds');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  let data = myJson;
  console.log(data);
            let templateIds = [];
            let smsIds = [];
            let sbtIds = [];
            sbtIds = data._embedded.sbtIds ;
            console.log(sbtIds)
            sbtIds.forEach(sbtId => {
                 templateIds.push(sbtId.templateId);
                 smsIds.push(sbtId.smsId);                 
            });
            templateIds.forEach(templateId =>{
                var option = document.createElement("option");
                option.text = templateId;
                option.value = templateId;
                document.getElementById("TemplateID").appendChild(option);  
            })
			smsIds.forEach(smsId =>{
                var option = document.createElement("option");
                option.text = smsId;
                option.value = smsId;
                document.getElementById("SMSid").appendChild(option);  
            })
}
function myFunction() {
if($('#TemplateID').val() == '')
{
var option = document.createElement("option");
option.text = "Select"
option.value = "Select"

document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "Select";

}

if($('#TemplateID').val() == '1')
{
var option = document.createElement("option");
option.text = "Payment Reminder"
option.value = "Payment Reminder"
option.id = "width_tmp_option"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "Payment Reminder";
}
else if($('#TemplateID').val() == '2')
{
var option = document.createElement("option");
option.text = "Delinquency Notice"
option.value = "Delinquency Notice"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "Delinquency Notice"
}
else if($('#TemplateID').val() == '3')
{
var option = document.createElement("option");
option.text = "Opt-in Confirmation Message"
option.value = "Opt-in Confirmation Message"
document.getElementById("TemplateName").appendChild(option); 	
document.getElementById("TemplateName").value = "Opt-in Confirmation Message"
}
else if($('#TemplateID').val() == '4')
{
var option = document.createElement("option");
option.text = "Scheduled Payment Reminder"
option.value = "Scheduled Payment Reminder"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "Scheduled Payment Reminder"
}
else if($('#TemplateID').val() == '5')
{
var option = document.createElement("option");
option.text = "Payment Reminders With No Payment Link"
option.value = "Payment Reminders With No Payment Link"
document.getElementById("TemplateName").appendChild(option); 	
document.getElementById("TemplateName").value = "Payment Reminders With No Payment Link"
}
else if($('#TemplateID').val() == '6')
{
var option = document.createElement("option");
option.text = "DQ Limited Content – Option 1"
option.value = "DQ Limited Content – Option 1"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DQ Limited Content – Option 1"
}
else if($('#TemplateID').val() == '7')
{
var option = document.createElement("option");
option.text = "DQ Limited Content – Option 2"
option.value = "DQ Limited Content – Option 2"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DQ Limited Content – Option 2"
}
else if($('#TemplateID').val() == '8')
{
var option = document.createElement("option");
option.text = "DPD 111"
option.value = "DPD 111"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 111"
}
else if($('#TemplateID').val() == '9')
{
var option = document.createElement("option");
option.text = "DPD 13"
option.value = "DPD 13"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 13"
}
else if($('#TemplateID').val() == '10')
{
var option = document.createElement("option");
option.text = "DPD 21"
option.value = "DPD 21"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 21"
}
else if($('#TemplateID').val() == '11')
{
var option = document.createElement("option");
option.text = "DPD 28"
option.value = "DPD 28"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 28"
}
else if($('#TemplateID').val() == '12')
{
var option = document.createElement("option");
option.text = "DPD 36"
option.value = "DPD 36"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 36"
}
else if($('#TemplateID').val() == '13')
{
var option = document.createElement("option");
option.text = "DPD 43"
option.value = "DPD 43"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 43"
}
else if($('#TemplateID').val() == '14')
{
var option = document.createElement("option");
option.text = "DPD 50"
option.value = "DPD 50"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 50"
}
else if($('#TemplateID').val() == '15')
{
var option = document.createElement("option");
option.text = "DPD 57"
option.value = "DPD 57"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 57"
}
else if($('#TemplateID').val() == '16')
{
var option = document.createElement("option");
option.text = "DPD 64"
option.value = "DPD 64"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 64"
}
else if($('#TemplateID').val() == '17')
{
var option = document.createElement("option");
option.text = "DPD 7"
option.value = "DPD 7"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 7"
}
else if($('#TemplateID').val() == '18')
{
var option = document.createElement("option");
option.text = "DPD 71"
option.value = "DPD 71"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 71"
}
else if($('#TemplateID').val() == '19')
{
var option = document.createElement("option");
option.text = "DPD 85"
option.value = "DPD 85"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 85"
}
else if($('#TemplateID').val() == '20')
{
var option = document.createElement("option");
option.text = "DPD 97"
option.value = "DPD 97"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 97"
}
else if($('#TemplateID').val() == '21')
{
var option = document.createElement("option");
option.text = "COVID-19 MESSAGE 1"
option.value = "COVID-19 MESSAGE 1"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "COVID-19 MESSAGE 1"
}
else if($('#TemplateID').val() == '22')
{
var option = document.createElement("option");
option.text = "DPD 111 (Mini-Miranda)"
option.value = "DPD 111 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 111 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '23')
{
var option = document.createElement("option");
option.text = "DPD 13 (Mini-Miranda)"
option.value = "DPD 13 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 13 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '24')
{
var option = document.createElement("option");
option.text = "DPD 21 (Mini-Miranda)"
option.value = "DPD 21 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 21 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '25')
{
var option = document.createElement("option");
option.text = "DPD 28 (Mini-Miranda)"
option.value = "DPD 28 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 28 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '26')
{
var option = document.createElement("option");
option.text = "DPD 36 (Mini-Miranda)"
option.value = "DPD 36 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 36 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '27')
{
var option = document.createElement("option");
option.text = "DPD 43 (Mini-Miranda)"
option.value = "DPD 43 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 43 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '28')
{
var option = document.createElement("option");
option.text = "DPD 50 (Mini-Miranda)"
option.value = "DPD 50 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 50 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '29')
{
var option = document.createElement("option");
option.text = "DPD 57 (Mini-Miranda)"
option.value = "DPD 57 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 57 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '30')
{
var option = document.createElement("option");
option.text = "DPD 64 (Mini-Miranda)"
option.value = "DPD 64 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 64 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '31')
{
var option = document.createElement("option");
option.text = "DPD 71 (Mini-Miranda)"
option.value = "DPD 71 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 71 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '32')
{
var option = document.createElement("option");
option.text = "DPD 85 (Mini-Miranda)"
option.value = "DPD 85 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 85 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '33')
{
var option = document.createElement("option");
option.text = "DPD 97 (Mini-Miranda)"
option.value = "DPD 97 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 97 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '34')
{
var option = document.createElement("option");
option.text = "DQ - ACH Returned"
option.value = "DQ - ACH Returned"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DQ - ACH Returned"
}
else if($('#TemplateID').val() == '35')
{
var option = document.createElement("option");
option.text = "DQ - ACH Returned (Mini-Miranda)"
option.value = "DQ - ACH Returned (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DQ - ACH Returned (Mini-Miranda)"
}
else if($('#TemplateID').val() == '36')
{
var option = document.createElement("option");
option.text = "DQ - No ACH"
option.value = "DQ - No ACH"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DQ - No ACH"
}
else if($('#TemplateID').val() == '37')
{
var option = document.createElement("option");
option.text = "DQ - No ACH (Mini-Miranda)"
option.value = "DQ - No ACH (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DQ - No ACH (Mini-Miranda)"
}
else if($('#TemplateID').val() == '38')
{
var option = document.createElement("option");
option.text = "SAP Graduation - Opt in 1"
option.value = "SAP Graduation - Opt in 1"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "SAP Graduation - Opt in 1"
}
else if($('#TemplateID').val() == '39')
{
var option = document.createElement("option");
option.text = "SAP Graduation - Opt in 2"
option.value = "SAP Graduation - Opt in 2"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "SAP Graduation - Opt in 2"
}
else if($('#TemplateID').val() == '40')
{
var option = document.createElement("option");
option.text = "SAP Graduation - Opt Out 1"
option.value = "SAP Graduation - Opt Out 1"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "SAP Graduation - Opt Out 1"
}
else if($('#TemplateID').val() == '41')
{
var option = document.createElement("option");
option.text = "SAP Graduation - Opt Out 2"
option.value = "SAP Graduation - Opt Out 2"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "SAP Graduation - Opt Out 2"
}
else if($('#TemplateID').val() == '42')
{
var option = document.createElement("option");
option.text = "SAP Graduation - Stop 1"
option.value = "SAP Graduation - Stop 1"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "SAP Graduation - Stop 1"
}
else if($('#TemplateID').val() == '43')
{
var option = document.createElement("option");
option.text = "SAP Graduation - Stop 2"
option.value = "SAP Graduation - Stop 2"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "SAP Graduation - Stop 2"
}
else if($('#TemplateID').val() == '44')
{
var option = document.createElement("option");
option.text = "Auto Response - Not in 2-way experiment"
option.value = "Auto Response - Not in 2-way experiment"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "Auto Response - Not in 2-way experiment"
}
else if($('#TemplateID').val() == '45')
{
var option = document.createElement("option");
option.text = "DPD 13 - 2 way"
option.value = "DPD 13 - 2 way"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 13 - 2 way"
}
else if($('#TemplateID').val() == '46')
{
var option = document.createElement("option");
option.text = "DPD 13 - 2 way (mini-miranda)"
option.value = "DPD 13 - 2 way (mini-miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 13 - 2 way (mini-miranda)"
}
else if($('#TemplateID').val() == '47')
{
var option = document.createElement("option");
option.text = "DPD 21 - 2 way"
option.value = "DPD 21 - 2 way"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 21 - 2 way"
}
else if($('#TemplateID').val() == '48')
{
var option = document.createElement("option");
option.text = "DPD 21 - 2 way (mini-miranda)"
option.value = "DPD 21 - 2 way (mini-miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 21 - 2 way (mini-miranda)"
}
else if($('#TemplateID').val() == '49')
{
var option = document.createElement("option");
option.text = "DPD 28 - 2 way"
option.value = "DPD 28 - 2 way"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 28 - 2 way"
}
else if($('#TemplateID').val() == '50')
{
var option = document.createElement("option");
option.text = "DPD 28 - 2 way (mini-miranda)"
option.value = "DPD 28 - 2 way (mini-miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 28 - 2 way (mini-miranda)"
}
else if($('#TemplateID').val() == '51')
{
var option = document.createElement("option");
option.text = "Payment Reminders With Payment Link"
option.value = "Payment Reminders With Payment Link"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "Payment Reminders With Payment Link"
}
else if($('#TemplateID').val() == '52')
{
var option = document.createElement("option");
option.text = "Apologies for Multiple Texts"
option.value = "Apologies for Multiple Texts"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "Apologies for Multiple Texts"
}
else if($('#TemplateID').val() == '53')
{
var option = document.createElement("option");
option.text = "DPD 7 (Mini-Miranda)"
option.value = "DPD 7 (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 7 (Mini-Miranda)"
}
else if($('#TemplateID').val() == '54')
{
var option = document.createElement("option");
option.text = "DPD 13 - With PNM Debit Payment Link"
option.value = "DPD 13 - With PNM Debit Payment Link"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 13 - With PNM Debit Payment Link"
}
else if($('#TemplateID').val() == '55')
{
var option = document.createElement("option");
option.text = "DPD 13 - With PNM Debit Payment Link (Mini-Miranda)"
option.value = "DPD 13 - With PNM Debit Payment Link (Mini-Miranda)"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "DPD 13 - With PNM Debit Payment Link (Mini-Miranda)"
}
else if($('#TemplateID').val() == '56')
{
var option = document.createElement("option");
option.text = "Payment Reminders With PNM Debit Payment Link"
option.value = "Payment Reminders With PNM Debit Payment Link"
document.getElementById("TemplateName").appendChild(option); 
	
document.getElementById("TemplateName").value = "Payment Reminders With PNM Debit Payment Link"
}

}