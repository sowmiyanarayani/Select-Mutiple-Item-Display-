import { rndString } from '@laufire/utils/random';
const CustomerManager = {
	addItems: (context) => {
		const {
			state: { items, itemDetails },
			config: { idLength, products },
		} = context;
		const getPrice = (itemName) =>
			products.find((item) => item.name === itemName)?.price || null;

		return [
			...itemDetails,
			{
				id: rndString(idLength),
				items: items,
				price: getPrice(items),
			},
		];
	},
};

export default CustomerManager;
