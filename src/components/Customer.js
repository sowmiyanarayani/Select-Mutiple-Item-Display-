import { React } from 'react';
const Customer = ({ id, items, price, totalPrice, index }) =>
	<tr key={ id }>
		<td>
			{ items.map((item) => <tr key={ index }>{ item }</tr>) }
		</td>
		<td>
			{ price.map((prices) => <tr key={ index }>{ prices }</tr>) }
		</td>
		<td>{ totalPrice }</td>
	</tr>;

export default Customer;
