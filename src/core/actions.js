import CustomerManager from '../services/CustomerManager';
const setSelectItems = ({ data }) => ({ items: data });
const addItems = (context) =>
	({ itemDetails: CustomerManager.addItems(context) });
const setTotalPrice = ({ data }) => ({ totalPrice: data });
const actions = { setSelectItems, addItems, setTotalPrice };

export default actions;
