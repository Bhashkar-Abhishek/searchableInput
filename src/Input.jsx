import React, { useState } from 'react';
import Select from 'react-select';
export default function App() {
  const [data, setData] = useState(null);
  const onption = [
    { value: 'apple', label: 'apple' },
    { value: 'banana', label: 'banana' },
    { value: 'mango', label: 'mango' },
    { value: 'Bugati', label: 'Bugati' },
    { value: 'Ferari', label: 'Ferari' },
    { value: 'Maclerane', label: 'Maclerane' },
  ];

  return (
    <div style={{position:"fixed",top:"10vh",width:'100vw',display:'flex',justifyContent:"center",alignItems:"flex-start"}}>
      <Select options={onption} value={data} onChange={setData} isSearchable />
    </div>
  );
}
