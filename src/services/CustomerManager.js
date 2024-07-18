/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
const CustomerManager = {
	addItems: (context) => {
		const {
			state: { items, itemDetails },
			config: { idLength, products },
		} = context;

		const findItemPrices = (selectedItems) =>
			selectedItems.map((itemName) => (products.find((productName) =>
				productName.name === itemName) || { price: 0 }).price);

		const prices = findItemPrices(items);
		const totalPrice = prices.reduce((acc, price) => acc + price, 0);

		return [
			...itemDetails,
			{
				id: rndString(idLength),
				items: items,
				price: findItemPrices(items),
				totalPrice: totalPrice,
			},
		];
	},
};

export default CustomerManager;
