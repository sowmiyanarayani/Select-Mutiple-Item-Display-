/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-lines-per-function */
import Customer from './Customer';
const TableForm = (context) => {
	const { state: { itemDetails }} = context;

	return (
		<table border="5px">
			<thead>
				<tr>
					<th>Item</th>
					<th>Price</th>
					<th>Total</th>
					<th>Discount Amount</th>
				</tr>
			</thead>
			<tbody>
				{ itemDetails.map((customer) =>
					<Customer
						key={ customer.id }
						items={ customer.items }
						price={ customer.price }
						totalPrice={ customer.totalPrice }
						totalDiscountedPrice={ customer.totalDiscountedPrice }
					/>) }
			</tbody>
		</table>
	);
};

export default TableForm;
