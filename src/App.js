import { useState } from 'react';
import React from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';

function App() {
  const [isFromVisible, setIsFormVisible] = useState(false)

  return (
    <div className='container'>
    {
      isFromVisible ? <Form setIsFormVisible={setIsFormVisible}/> : <Table setIsFormVisible={setIsFormVisible} />
    }
  </div>
  )
  
}

export default App;
