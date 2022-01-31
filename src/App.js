import React, { useState } from 'react';
import './App.css';

// COMPONENTS
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';

const App = () => {
	const [counter, setCounter] = useState(1);
	const [name, setName] = useState('Lucia');

	const handlerCounterUp = () => {
		setCounter(counter + 1);
	};

	const handlerCounterDown = () => {
		setCounter(counter - 1);
	};

	const handlerUpdateName = () => {
		setName('Verónica');
	};

	const handlerUpdateNameTwo = () => {
		setName('Lucia');
	};

	const onClick = () => {
		alert('Hello World!');
	};

	const myNumber = 58;

	return (
		<div className='App'>
			<Header
				title='Soy el titulo a partir de una prop'
				subtitle='Soy un subtitulo a partir de una prop'
				onClick={onClick}
				myNumber={myNumber}
			/>
			<div className='UserSection'>
				<CardComponent
					name='Daniel Di Salvo'
					date='Se unio en Enero 2021'
					description='Front-end Developer y profesor del Curso de React.js en CoderHouse'
					img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
				/>
				<CardComponent
					name='Raul Gutierrez'
					date='Se unió en Abril 2021'
					description='Scrum Master y UX Designer en Mercado Libre'
					img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
				/>
				<CardComponent
					name='Francesca Bertotti'
					date='Se unió en Julio 2021'
					description='DevOps y profesora del curso de React.js en CoderHouse'
					img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
				/>
			</div>
			<div className='CounterSection'>
				<p>Counter: {counter}</p>
				<div className='btn-section'>
					<button onClick={handlerCounterUp}>Incrementar</button>
					<button onClick={handlerCounterDown}>Decrementar</button>
				</div>
				<h3>{name}</h3>
				<div className='btn-section'>
					<button onClick={handlerUpdateName}>Actualizar Nombre</button>
					<button onClick={handlerUpdateNameTwo}>Volver Nombre Atras</button>
				</div>
			</div>
		</div>
	);
};

export default App;

// import React, { Component } from 'react';
// import './App.css';

// // COMPONENTS
// import Header from './components/Header/Header';
// import CardComponent from './components/CardComponent/CardComponent';

// // Para crear nuestro state: debemos tener un metodo constructor() y llamar a super()
// // this.state = { age: 18, name: "Daniel", city: "Buenos Aires" }
// // Para actualizar un state debemos utilizar el metodo setState()
// // Debemos tener presente el uso de la palabra reservada this, que hace referencia a la clase

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			counter: 0,
// 			name: 'Lucia',
// 		};

// 		// Binding
// 		// this.handlerCounterUp = this.handlerCounterUp.bind(this);
// 	}

// 	// 1 era opción, sin usar arrow function, tenemos que aplicar bind en el método constructor
// 	// handlerCounterUp() {
// 	// 	this.setState({ counter: this.state.counter + 1 });
// 	// }

// 	// 2 da opción, aplicando arrow function, no tenemos que aplicar bind en el método constructor
// 	handlerCounterUp = () => {
// 		this.setState({ counter: this.state.counter + 1 });
// 	};

// 	handlerCounterDown = () => {
// 		this.setState({ counter: this.state.counter - 1 });
// 	};

// 	handlerUpdateName = () => {
// 		this.setState({ name: 'Verónica' });
// 	};

// 	handlerUpdateNameTwo = () => {
// 		this.setState({ name: 'Lucia' });
// 	};

// 	render() {
// 		return (
// 			<div className='App'>
// 				<Header
// 					title='Soy el titulo a partir de una prop'
// 					subtitle='Soy un subtitulo a partir de una prop'
// 				/>
// 				<div className='UserSection'>
// 					<CardComponent
// 						name='Daniel Di Salvo'
// 						date='Se unio en Enero 2021'
// 						description='Front-end Developer y profesor del Curso de React.js en CoderHouse'
// 						img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
// 					/>
// 					<CardComponent
// 						name='Raul Gutierrez'
// 						date='Se unió en Abril 2021'
// 						description='Scrum Master y UX Designer en Mercado Libre'
// 						img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
// 					/>
// 					<CardComponent
// 						name='Francesca Bertotti'
// 						date='Se unió en Julio 2021'
// 						description='DevOps y profesora del curso de React.js en CoderHouse'
// 						img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
// 					/>
// 				</div>
// 				<div className='CounterSection'>
// 					<p>Counter: {this.state.counter}</p>
// 					<div className='btn-section'>
// 						<button onClick={this.handlerCounterUp}>Incrementar</button>
// 						<button onClick={this.handlerCounterDown}>Decrementar</button>
// 					</div>
// 					<h3>{this.state.name}</h3>
// 					<div className='btn-section'>
// 						<button onClick={this.handlerUpdateName}>Actualizar Nombre</button>
// 						<button onClick={this.handlerUpdateNameTwo}>
// 							Volver Nombre Atras
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default App;
