import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider,  extendTheme } from '@chakra-ui/react';



const theme = extendTheme({
  fonts: {
    body: "Jost, sans-serif",
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);


export const server = `https://api.coingecko.com/api/v3`;





