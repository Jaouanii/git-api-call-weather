import "./App.css";
import axios from 'axios';
import { useState } from "react";

function App() {
const [data, setData] = useState({})
const [location, setLocation] = useState('');


const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=969437183b5fdfcfb3b993f8cff2a596&units=imperial`

// search function
const searchLocation = (event) => {
if (event.key === 'Enter') {

  axios.get(url).then((response) =>{
    setData(response.data)
	console.log(response.data)

  }
  )
setLocation('')
}

}

	return (
		<div className='App'>
			<div className="search">
				<input 
				value={location}
				onChange={event => setLocation(event.target.value)}
				onKeyPress={searchLocation}
				placeholder='enter location'
				type="text" />
			</div>

			<div className="container">
				<div className="top">
					<div className="location">
						<p>{data.name}</p>
						
					</div>
					<div className="temp">

						{data.main ? <h1>{data.main.temp}f</h1> : null}
						
					</div>
					<div className="description">
						{data.weather ? <p> {data.weather[0].main}</p> : null }
						
					</div>
				</div>
{data.name !== undefined &&
	<div className="bottom">
	<p> feels:</p>
		<div className="feels">
			{data.main ? <p>{data.main.feels_like}F</p> : null}
			

		</div>
		<div className="humidity">
			<p>humidity:</p>
			{data.main ? <p>{data.main.humidity}%</p> : null}
			

		</div>
		<div className="wind">
			<p> wind: </p>
			{data.wind ? <p>{data.wind.speed} mFH</p> : null}

		</div>
	</div>
}
			
			</div>
		</div>
	);
}

export default App;
