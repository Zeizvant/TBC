import { createContext, useState } from 'react';
import React from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';

export const Context = createContext()

function App() {
  const [isFromVisible, setIsFormVisible] = useState(false)
  const [data, setData] = useState([])

  const addData = (newData) => {
    setData([...data, newData])
  }

  const updateData = (updateData, index) => {
    let array = data
    array[index] = updateData
    setData([...data])
  }

  return (
    <Context.Provider value={data}>
      <div className='container'>
      {
        isFromVisible ? <Form setIsFormVisible={setIsFormVisible} addData={addData}/> : 
        <Table setIsFormVisible={setIsFormVisible} updateData={updateData}/>
      }
      </div>
    </Context.Provider>
  )
  
}

export default App;
