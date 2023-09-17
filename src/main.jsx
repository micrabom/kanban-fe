import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ThemeProvider } from '@mui/material/styles';
/* const customTheme = createTheme({
    palette: {
        primary: {
            main: '#your-custom-color-here', // Replace with your desired color
        },
    },
}); */

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <ThemeProvider theme={customTheme}> */}
			<App />
		{/* </ThemeProvider> */}
	</React.StrictMode>,
)
