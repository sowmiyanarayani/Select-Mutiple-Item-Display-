/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
const AddItem = (context) => {
	const {
		actions: { setSelectItems }, config: { products },
		state: { items },
	} = context;

	return (
		<div>
			<label>Select Items:</label>
			<select
				multiple={ true }
				value={ items }
				onChange={ (e) => setSelectItems(Array.from(e.target.selectedOptions,
					(option) => option.value)) }
			>
				{ products.map((product, index) =>
					<option key={ index } value={ product.name }>
						{ product.name }  </option>) }
			</select>
		</div>
	);
};

export default AddItem;
