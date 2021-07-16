import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		background: {
			default: '#000',
		},
		text: {
			primary: '#FFF',
			secondary: '#FFF',
		}
	}
});

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		{children}
	</ThemeProvider>
);

export default Theme;

