import CustomerManager from '../services/CustomerManager';
const setSelectItems = ({ data }) => ({ items: data });
const addItems = (context) =>
	({ itemDetails: CustomerManager.addItems(context) });

const actions = { setSelectItems, addItems };

export default actions;
