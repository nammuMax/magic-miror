import { useEffect, useState } from 'react';

const apiKey = 'd7ff2d40-4aa9-11e3-bb49-0002a5d5c51b';

const TPG = () => {

	useEffect(() => {
		(async () => {
			/*const req = await fetch(`https://prod.ivtr-od.tpg.ch/v1/GetNextDepartures.json?key=${apiKey}&stopCode=ARME`, {
				mode: 'no-cors',
			});
			const res = await req.json();

			console.log('res', res);*/
		})();
	}, []);

	return (
		<>

		</>
	);
};

export default TPG;