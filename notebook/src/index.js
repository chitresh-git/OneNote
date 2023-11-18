import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Alertstate from './context/notes/Alertstate';
import Downloadnote from './components/Downloadnote';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Downloadnote>

<Alertstate>

    <App />
</Alertstate>

</Downloadnote>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
