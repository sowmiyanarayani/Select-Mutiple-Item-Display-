import { React } from 'react';
const Button = (context) => {
	const { actions: { addItems }} = context;

	return <div>
		<button onClick={ () => addItems() }>
			Save Item
		</button>
	</div>;
};

export default Button;
