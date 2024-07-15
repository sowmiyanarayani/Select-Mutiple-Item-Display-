/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-lines-per-function */
import Customer from './Customer';
const CustomerList = (context) => {
	const { state: { itemDetails }} = context;

	return (
		<table className="gird">
			<thead>
				<tr>
					<th>item</th>
					<th>price</th>
				</tr>
			</thead>
			<tbody>
				{ itemDetails.map((customer) =>
					<Customer
						key={ customer.id }
						items={ customer.items }
						price={ customer.price }

					/>) }
			</tbody>
		</table>
	);
};

export default CustomerList;
