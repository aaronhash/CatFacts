import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	let [photo, setPhoto] = useState('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/cat-face_1f431.png');
	let [description, setDescription] = useState();
	let [loading, setLoading] = useState(false);

	let clickHandler = () => {
		setLoading(true);
		axios.get('https://catfact.ninja/fact').then(res => {
			setDescription(res.data.fact);
		})
		axios.get('https://api.thecatapi.com/v1/images/search?api_key=79888c14-333c-403c-ba4a-a5c7165042c2').then(res => {
			setPhoto(res.data[0].url);
			setLoading(false);
		})
	}

	return (
		<div className="App">
			<div className='content'>
				<h1>Cat Facts!</h1>
				{loading ? (
					<img src='https://c.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif' alt='a cat' />
				) : (
					<>
						<img src={photo} alt='a cat' />
						<p>{description}</p>
					</>
				)}
				<div className='button' onClick={clickHandler}>Meow</div>
			</div>
		</div>
	);
}

export default App;