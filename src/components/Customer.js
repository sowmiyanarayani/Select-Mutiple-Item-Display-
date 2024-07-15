import { React } from 'react';
const Customer = ({ id, items, price }) =>
	<tr key={ id } rowSpan="2">
		<td>{ items }</td>
		<td>{ price }</td>
	</tr>;

export default Customer;
