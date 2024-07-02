import React from 'react';
import { peek } from '@laufire/utils/debug';
const AddItem = (context) => {
	const { actions: { setSelectItems }, config: { products }} = context;

	return (
		<div>
			<label>Item :</label>
			<select
				type="checkbox"
				onChange={ (event) => {
					peek(event.target.value);
					return setSelectItems(event.target.value);
				} }
			>
				{ products.map((product, index) =>
					<option key={ index }>{ product.name }</option>) }
			</select>
		</div>
	);
};

export default AddItem;
