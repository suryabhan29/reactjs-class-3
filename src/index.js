//1. Import area

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent5 from './MyComponent5';


//Import something form somelocation/library


//2. Function defination area



const root = ReactDOM.createRoot(document.querySelector('div#container'));
root.render(
  <React.StrictMode>
    
    <MyComponent1/>
    <MyComponent2/>
    <MyComponent3/>
    <MyComponent5/>
    
    
  </React.StrictMode>
);


