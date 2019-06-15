import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const App = () => {
	const [mapViewport, setViewport] = useState({
		width: '100vw',
		height: '60vh',
		latitude: 6.45407,
		longitude: 3.39467,
		zoom: 12
	});

	console.log(process.env.REACT_APP_MAPBOX_TOKEN, 'Hello====>>>');
	return (
		<div className="App">
			<header className="App-header">
				<ReactMapGL
					{ ...mapViewport }
					mapStyle="mapbox://styles/princegoziem/cjwxceq2z36xh1cqyaqk99693"
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
					onViewportChange={viewport => setViewport({ ...mapViewport, ...viewport })}
				>
					markers here
				</ReactMapGL>
			</header>
		</div>
	);
};

export default App;
