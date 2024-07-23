/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';

const CustomerManager = {
	addItems: (context) => {
		const {
			state: { items, itemDetails },
			config: { idLength, products, discounts },
		} = context;

		const findItemPrices = (selectedItems) =>
			selectedItems.map((itemName) => (products.find((productName) =>
				productName.name === itemName) || { price: 0 }).price);

		const prices = findItemPrices(items);
		const totalPrice = prices.reduce((acc, price) => acc + price, 0);

		const calculateDiscount = (price) =>
			discounts.find((discount) => price > discount.price)?.discount || 0;

		const discountedPrices
		= prices.map((price) => price * (1 - calculateDiscount(price)));

		const totalDiscountedPrice
 = discountedPrices.reduce((acc, price) => acc + price, 0);

		return [
			...itemDetails,
			{
				id: rndString(idLength),
				items: items,
				price: findItemPrices(items),
				totalPrice: totalPrice,
				totalDiscountedPrice: totalDiscountedPrice,
			},
		];
	},
};

export default CustomerManager;
