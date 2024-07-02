import { React } from 'react';
import Button from './Button';
import TableForm from './TableForm';
import AddItem from './AddItem';
const Display = (context) => <div className="box">
	<h1>Super Market</h1>
	<AddItem { ...context }/>
	<Button { ...context }/>
	<TableForm { ...context }/>
</div>;

export default Display;
