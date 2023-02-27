import './index.css'
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { formValidation } from '../../validation/formValidation';
import { Context } from '../../App';

export const Form = (props) => {

    const data = useContext(Context)

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personNum, setPersonNum] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')
    const [place, setPlace] = useState('')
    const [address, setAddress] = useState('')

    const handleData = () => {
        props.addData([name, lastName, personNum, gender, date, place, address])
    }

    return (
        <div className="form">
            <div className='header'>
                <h1 className='form-header'>ველის დამატება</h1>
                <CloseIcon onClick={() => {props.setIsFormVisible(false)}} className='close-btn'/>
            </div>
            <input type='text' placeholder='სახელი' value={name} onChange={(event) => {setName(event.target.value)}}/>
            <input type='text' value={lastName} onChange={(event) => {setLastName(event.target.value)}} placeholder='გვარი'/>
            <input type='text' value={personNum} onChange={(event) => {setPersonNum(event.target.value)}} min='11' placeholder='პირადი ნომერი'/>
            <select name='gender' id='gender' value={gender} onChange={(event) => {setGender(event.target.value)}}>
                <option calue='male'>Male</option>
                <option calue='female'>Female</option>
            </select>
            <div className='date'>
                <label>დაბადების თარიღი</label>
                <input type='date' value={date} onChange={(event) => {setDate(event.target.value)}}/>   
            </div>
            <input type='text' placeholder='დაბადების ადგილი' value={place} onChange={(event) => {setPlace(event.target.value)}}/>
            <input type='text' placeholder='მისამართი' value={address} onChange={(event) => {setAddress(event.target.value)}}/>
            <button type='button' onClick={() => {
                if(formValidation([name, lastName, personNum, gender, date, place, address], data)){
                    props.setIsFormVisible(false)
                    handleData()
                }
                
                }}>შენახვა</button>
        </div>
    )
}