/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
const CustomerManager = {
	addItems: (context) => {
		const {
			state: { items, itemDetails },
			config: { idLength, products },
		} = context;
		const calculateTotalPrice = () => items.reduce((total, itemName) =>
			total + (products.find((product) => product.name === itemName)
				?.price || 0), 0);

		return [
			...itemDetails,
			{
				id: rndString(idLength),
				items: items,
				price: calculateTotalPrice(items),
			},
		];
	},
};

export default CustomerManager;
