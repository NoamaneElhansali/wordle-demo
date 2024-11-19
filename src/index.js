import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar as N } from './Navbar';
import { About } from './About';
import { Projects } from './projects';
import { Blog } from './Blog';
import NotificationComponent from './NotificationComponent';
import LifeCycle from './lifecycle';
import App_map from './App_map';
import HelloWorld from './HelloWorld';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <BrowserRouter> */}
    <App/>
     {/* <N /> */}
     {/* <NotificationComponent /> */}
     {/* <LifeCycle LastName={"Said Lhodod"}/> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
