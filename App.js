import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value
		})
	}
	render(){
		return (
			<div>
			<Slider ref="red" update={this.update} />
			{this.state.red}
			<br />
			<Slider ref="green" update={this.update} />
			{this.state.green}
			<br />
			<Slider ref="blue" update={this.update} />
			{this.state.blue}
			<br />
			</div>
		);
	}
}

App.propTypes = {
	txt: React.PropTypes.string, 
	cat: React.PropTypes.number.isRequired
}

// App.defaultProps = {
// 	txt: 'this is the default txt'
// }

class Slider extends React.Component {
	render() {
		return (
			<input type="range"
			min="0" 
			max="255" 
			onChange={this.props.update} />
		);
	}
}

class SecondApp extends React.Component {
	render() {
		return <Button> <Heart /> React</Button>
	}
}
class Button extends React.Component {
	render() {
		return <button>{this.props.children}</button>
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

class ThirdApp extends React.Component {
	constructor() {
		super();
		this.state = {
			increasing: false
		};
		this.update = this.update.bind(this);
	}
	update(){
		ReactDOM.render(
			<ThirdApp val={this.props.val+1} />,
			document.getElementById('third-app')
		);
	}
	componentWillReceiveProps(nextProps){
		this.setState({increasing: nextProps.val > this.props.val})
	}
	shouldComponentUpdate(nextProps, nextState){
		return nextProps.val % 5 === 0;
	}
	render() {
		console.log(this.state.increasing);
		return (
			<button onClick={this.update}>
				{this.props.val}
			</button>
		);
	}
	componentDidUpdate(prevProps, prevState){
		console.log('prevProps', prevProps);
	}
	// componentWillMount(){
	// 	this.setState({
	// 		m: 2
	// 	})
	// }
	// componentDidMount(){
	// 	this.inc = setInterval(this.update, 500)
	// }
	// componentWillUnmount(){
	// 	clearInterval(this.inc)
	// }
}
ThirdApp.defaultProps = {val: 0}

class Wrapper extends React.Component {
	constructor(){
		super();
	}
	mount(){
		ReactDOM.render(<ThirdApp />, document.getElementById('a'))
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render() {
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		);
	}
}


ReactDOM.render(
	<Wrapper />,
	document.getElementById('third-app')
)

ReactDOM.render(
	<App cat={5} />,
	document.getElementById('app')
)
ReactDOM.render(
	<SecondApp />,
	document.getElementById('second-app')
)

