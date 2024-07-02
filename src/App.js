import { React } from 'react';
import './App.scss';
import Display from './components/Display';
const App = (context) =>
	<div className="App">
		<Display { ...context }/>
	</div>;

export default App;
