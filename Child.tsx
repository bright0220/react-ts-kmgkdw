import React, { useState } from 'react';

const Child = (props) => {
  const [name, setName] = useState('');
  const onChange = (e) => {
    if (e.target.id == 'name') {
      console.log('11111111111111', e.target.value);
      setName(e.target.value);
      props.func(e.target.value);
    }
  };
  return <input id="name" type="input" onChange={onChange} value={name} />;
}; 

export default Child;
