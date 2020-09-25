import React from 'react';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './alert/Alert';
import { AlertProvider } from './alert/AlertContect';

function App() {

  return (
    <AlertProvider>
      <div className='container pt-3' >
        <Main toggle ={()=>{}}/>
        <Alert/>
      </div>
    </AlertProvider>
  );
}

export default App;
