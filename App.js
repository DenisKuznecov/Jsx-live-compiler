import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [
			{id: 1, name: "Simon Baicvxley"},
			{id: 2, name: "sdsdf Baisdfsley"},
			{id: 3, name: "Svbzxcimon Baizxcvley"},
			{id: 4, name: "Simon Bazxcviley"},
			{id: 5, name: "Sixcvzxcmon Bailey"},
			{id: 6, name: "Simoxcn Baixcvley"},
			{id: 7, name: "Simon Bailexcvzy"},
			{id: 8, name: "Sxcvimon Bailey"},
			{id: 9, name: "Simzxcvxcvon Baixvcley"},
			{id: 10, name: "Sivxcmon Bailey"},
			{id: 11, name: "Sizxcvmon Bailey"},
			{id: 12, name: "Simon Bailxcvey"},
			{id: 13, name: "Simxcvon Baivxcvley"},
			{id: 14, name: "Simon Bailey"},
			{id: 15, name: "Sixcvmon xcvBailey"},
			{id: 16, name: "Simon Bailey"},
			{id: 17, name: "Sixcvmon Bailey"},
			{id: 18, name: "Simon Bailxcvey"}
			]
		}
	}
	render() {
		let rows = this.state.data.map(function(person) {
			return <PersonRow key={person.id} data={person} />
		});
		return (
			<table>
			<tbody>{rows}</tbody>
			</table>
			);
	}
}


function PersonRow(props) {
	return (
		<tr>
		<td>{props.data.id}</td>
		<td>{props.data.name}</td>
		</tr>
		);
}

export default App;
