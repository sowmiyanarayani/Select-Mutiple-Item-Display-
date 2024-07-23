import React from 'react';

const Customer = ({ id, items, price, totalPrice, totalDiscountedPrice }) =>
	<tr key={ id }>
		<td>
			{ items.map((item, index) =>
				<tr key={ index }>
					<td>{ item }</td>
				</tr>) }
		</td>
		<td>
			{ price.map((prices, index) =>
				<tr key={ index }>
					<td>{ prices }</td>
				</tr>) }
		</td>
		<td>{ totalPrice }</td>
		<td>{ totalDiscountedPrice }</td>
	</tr>
;

export default Customer;
