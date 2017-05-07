import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FormComponent from './star';

ReactDOM.render(
  <div style={{marginTop:'2%',display:'flex', justifyContent:'center'}}>
  <div style={{ display:'flex', flexDirection: 'column',width:'70%'}}>
  <div style={{marginBottom:'3%',width: '100%',display:'flex', justifyContent:'center'}}>
  <div style={{width: '60%'}}>
  <App />
  <FormComponent />
  </div>
  </div>
  </div>
  </div>,

  document.getElementById('root')
);
