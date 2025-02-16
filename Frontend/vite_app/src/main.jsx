// import React from 'react';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
// import AboutUs from './Pages/About.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-rn0t3y4se3alxazq.us.auth0.com"
    clientId="SZGLktNgBLOTOLhh0AxzuKp3biYJNAFz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    {/* <AboutUs /> */}
  </Auth0Provider>,
);