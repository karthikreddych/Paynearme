'use strict';

// tag::vars[]
const React = require('react'); // <1>
const ReactDOM = require('react-dom'); // <2>
const client = require('./client'); // <3>
// end::vars[]

// tag::app[]
class App extends React.Component { // <1>

	constructor(props) {
		super(props);
		this.state = {Sbt_id: []};
	}

	componentDidMount() { // <2>
		client({method: 'GET', path: '/api/Sbt_id'}).done(response => {
			this.setState({Sbt_id: response.entity._embedded.Sbt_id});
		});
	}

	render() { // <3>
		return (
			<Dropdown Sbt_id={this.state.Sbt_id}/>
		)
	}
}
// end::app[]

// tag::employee-list[]
class Dropdown extends React.Component{
	render() {
		const Sbt_id = this.props.Sbt_id.map(Sbt_id =>
			<Sbt_id key={Sbt_id._links.self.href} Sbt_id={Sbt_id}/>
		);
		return (
			//<div id="react">
			
      		<div>
		<p>Select the Template ID from the drop down</p>
		<p>Template ID </p>
		<select id="TemplateID">
		<option value = "Select Template ID">Select Template ID</option>
		</select>     
               
    	<p>Select the SMS ID from the drop down</p>
        <p>SMS ID</p>
		<select id="SMSid">
		<option value = "Select SMS ID">Select SMS ID </option>
       
		</select>
        
  </div>
		)
	}
}
// end::employee-list[]

// tag::employee[]
class Sbt_id extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.Sbt_id.Template_id}</td>
				<td>{this.props.Sbt_id.Sms_id}</td>
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