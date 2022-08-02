    const userAction = async () => {
        console.log('Loading template values ...')
        let templatesJson = JSON.parse(sbtTemplates);
        templatesJson.forEach(template => {
            var templateIdOption = document.createElement("option");
            templateIdOption.text = template.templateId;
            templateIdOption.value = template.templateId;
            document.getElementById("TemplateID").appendChild(templateIdOption);
            var templateNameOption = document.createElement("option");
            templateNameOption.text = template.templateTitle;
            templateNameOption.value = template.eventType;
            document.getElementById("TemplateName").appendChild(templateNameOption);
        })
    }

    function loadTemplate() {
       if ($('#TemplateID').val() == '') {
            $("#TemplateName").val("").change();
            return;
       }
        let templateArray = JSON.parse(sbtTemplates);
        let selectedTemplate = templateArray.find(template => template.templateId == $('#TemplateID').val());
        $("#TemplateName").val(selectedTemplate.eventType).change();
    }

    function myFunction() {
        loadTemplate();
    }
