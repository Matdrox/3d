import Spline from '@splinetool/react-spline';
import React from 'react';

const App = () => {
	return (
		<div className='bg-orange-100'>
			<div className='h-screen'>
				<Spline scene='https://prod.spline.design/0j-He-n7S2unukca/scene.splinecode' />
			</div>
			<div className='h-screen'></div>
		</div>
	);
};

export default App;
