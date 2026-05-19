import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bestelling, loader as bestellingloader } from './Bestelling';
import { App, loader as gerechtenLoader } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Root } from './components/Root';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: gerechtenLoader,
        
        
      },
      {
        path: '/bestelling',
        element: <Bestelling />,
        loader: bestellingloader
        
      },
      
      
    ],
  },
]);

const theme=extendTheme({
  breakpoints: {
    base: '0px',
    sm: '175px',
    md: '300px',
    lg: '766px',
  },

})

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />      
    </ChakraProvider>
  </React.StrictMode>,
);
