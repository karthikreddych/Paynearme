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
			.then(response=>response.json())
            .then(response=> {
            let data = response;
            let templateIds = [];
            let smsIds = [];
            let sbtIds = [];
            sbtIds = data._embedded.sbtIds ;
            sbtIds?.forEach(sbtId => {
                 templateIds.push(sbtId?.templateId);
                 smsIds.push(sbtId?.smsId);                 
            });
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
		<select id="TemplateID" defaultValue="">
        <option value="" disabled>Select</option>
        {this.state.templateIds?.map((templateId,index) => {
            return <option key={index}>{templateId}</option>
        })}
		</select>   
               
    	<p className="idselection_mainheading">Select the SMS ID from the drop down</p>
        <p className="idselection_heading">SMS ID</p>
		<select id="SMSid" defaultValue="">
        <option value="" disabled>Select</option>
        {this.state.smsIds?.map((smsId,index) => {
            return <option key={index} value={smsId}>{smsId}</option>
        })}
		</select>
        
  </div>
    );
    }
}

export default App;