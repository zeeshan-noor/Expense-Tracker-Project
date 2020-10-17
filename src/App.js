import React from 'react';
import './App.css';
import Child from './child';
import {TransactionProvider} from './transContext';

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then((result)=>{
      console.log("Result",result);
    })
  }
  return (
    
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
