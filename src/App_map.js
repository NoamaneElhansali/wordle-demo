// App.js 

import { useEffect, useState } from 'react'; 
import Axios from 'axios'; 
import './App_map.css'; 

//npm install axios
//npm install react-map-gl
//npm install react-icons

export default function App_map() { 

	// Setting up the initial state variables 
	const [ipDetails, setIpDetails] = useState([]);

	// Fetching the API once when the 
	// component is mounted 
	useEffect(() => { 
		Axios.get('https://ipapi.co/json/', {
			headers: {
			  'Content-Type': 'application/json',
			},
		  })
			.then((res) => { 
			  setIpDetails(res.data);
			})
			.catch((err) => console.error(err));		  
	}, []) 

	return ( 
		<> 
			<h1 className="heading">IP Address Finder</h1> 
			<div className="App"> 
				<div className="left"> 
					<h4>What is my IPv4 address?</h4> 
					<h1 id="ip">{ipDetails.ip}</h1> 
					<h4>Approximate location: </h4> 

					<p>{ipDetails.city}, {ipDetails.region}, 
						{ipDetails.country_name}.</p> 


					<h4>Internet Service Provider(ISP):</h4> 

					<p>{ipDetails.org}</p> 

				</div> 
			</div> 
		</> 
	); 
} 

