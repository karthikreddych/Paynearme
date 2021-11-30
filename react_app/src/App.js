import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {};

        componentDidMount() {
            this.getSbtIds()
        }

    getSbtIds = () => {
        fetch('http://localhost:8080/api/sbtIds')
			.then(response => response.text())
            .then(response=> {
            let templateIds = [];
            let smsIds = [];
            let sbtIds = [];
            sbtIds = JSON.parse(response)._embedded.sbtIds ;
            console.log(sbtIds)
            sbtIds.map(sbtId => {
                 templateIds.push(sbtId.templateId);
                 smsIds.push(sbtId.smsId);                 
            });
			console.log(response)
               console.log(templateIds)
               console.log(smsIds)
            this.setState({sbtIds: response,templateIds:templateIds,smsIds:smsIds});
            });
    };

    render() {
        return (
            <div className = "idselection">
        <div className = "logo">
           <img className="lending_logo" src="./images/lending_logo.jpg" alt=""></img>
        </div>
		<p className="idselection_mainheading">Select the TEMPLATE ID from the drop down</p>
		<p className="idselection_heading">TEMPLATE ID </p>
		<select id="TemplateID">
        {console.log(this.state)}
		{this.state.templateIds?.map(templateId => {
        <option value ={templateId}>{templateId}</option>
        })}
		</select>   
               
    	<p className="idselection_mainheading">Select the SMS ID from the drop down</p>
        <p className="idselection_heading">SMS ID</p>
		<select id="SMSid">
		<option value = "Select SMS ID">Select SMS ID </option>
       
		</select>
        
  </div>
    );
    }
}

export default App;