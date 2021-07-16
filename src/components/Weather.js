import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const apiKey = 'a89d6186113e2e58907bf91a553e6628';

const Weather = () => {
	const { city, language } = useSelector(state => state.app);
	const [ temp, setTemp ] = useState(0);
	const [ icon, setIcon ] = useState(null);

	useEffect(() => {
		(async () => {
			const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${language}`);
			const res = await req.json();

			setTemp(res.main.temp);
			setIcon(res.weather[0].icon);
		})();
	}, []);

	return (
		<>
			<Typography variant="h3">
				{Math.round(temp)}°C
			</Typography>
			<img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
		</>
	);
};

export default Weather;