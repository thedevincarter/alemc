import '@mantine/core/styles.css';

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Header from './components/layout/Header'



export default function App() {
  return (
    <html lang="en">
      <head>
        
        <meta charSet="utf-8" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <Meta />
        
        <Links />
        
        <ColorSchemeScript />
      </head>
      
      <body>
        <MantineProvider>
          <Header />

          <Outlet />
          
          </MantineProvider>
        
        <ScrollRestoration />
      
        <Scripts />
      </body>
    </html>
  );
}
