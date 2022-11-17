import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Child from './Child';

export default function App() {
  const [name, setName] = useState('kimmi');
  const receive_data = (data) => {
    console.log(data);
    setName(data);
  };
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Child func={receive_data} />
    </div>
  );
}
