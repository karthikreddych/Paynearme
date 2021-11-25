import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {};

        componentDidMount() {
            this.dadJokes()
        }

    dadJokes = () => {
        fetch('http://localhost:8080/api/dadjokes')
            .then(response => response.text())
            .then(message => {
               console.log(message)
 this.setState({message: message});
            });
    };

    render() {
        return (
            <div className = "idselection">
        <img src="./images/lending_logo.jpg" alt=""></img>
		<p className="idselection_mainheading">Select the TEMPLATE ID from the drop down</p>
		<p className="idselection_heading">Template ID </p>
		<select id="TemplateID">
		<option value = "Select Template ID">Select TEMPLATE ID</option>
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