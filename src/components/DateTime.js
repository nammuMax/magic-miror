import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

let interval = null;

const DateTime = () => {
	const [ date, setDate ] = useState(new Date());
	const { language } = useSelector(state => state.app);

	useEffect(() => {
		interval = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		}
	}, []);

	return (
		<>
			<Typography variant="h3">
				{new Intl.DateTimeFormat(language, { timeStyle: 'medium' }).format(date)}
			</Typography>

			<Typography variant="h4">
				{new Intl.DateTimeFormat(language, { dateStyle: 'medium' }).format(date)}
			</Typography>
		</>
	);
};

export default DateTime;