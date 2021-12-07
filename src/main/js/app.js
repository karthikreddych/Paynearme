'use strict';


const React = require('react'); 
const ReactDOM = require('react-dom'); 
//const client = require('./client'); 
// end::vars[]

// tag::app[]
class App extends React.Component { 

	constructor(props) {
		super(props);
		this.state = {Sbt_id: []};
		console.log('hello')
	}

	/*componentDidMount() { 
		client({method: 'GET', path: '/api/sbtIds'}).done(response => {
			this.setState({Sbt_id: response.entity._embedded.Sbt_id});
		});
	}*/

	render() { 
		return (
			//<Dropdown Sbt_id={this.state.Sbt_id}/>
			<div>app.js</div>
			)
	}
}
// end::app[]


class Dropdown extends React.Component{
	render() {

		const Sbt_id = this.props.employees.map(sbtIds =>
			<sbtIds key={sbtIds._links.self.href} employee={sbtIds}/>
		);       

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
    )
	}
}

class sbtIds extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.sbtIds.Template_id}</td>
				<td>{this.props.sbtIds.Sms_id}</td>
			</tr>
		)
	}
}
// end::sbt_id[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]