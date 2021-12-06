const userAction = async () => {
    console.log('reaching')
  const response = await fetch('/api/sbtIds');
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