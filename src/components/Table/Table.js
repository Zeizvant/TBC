import './index.css'
import MUIDataTable from "mui-datatables";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Context } from '../../App';
import { formValidation } from '../../validation/formValidation';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';

export const Table = (props) => {

    const [editWindow, setEditWindow] = useState(false)
    const [editableRow, setEditableRow] = useState([])
    const [index, setIndex] = useState()

    const data = useContext(Context)

    const columns = ["სახელი", "გვარი", "პირადი ნომერი", "სქესი", "დაბადების თარიღი", "დაბადების ადგილი", "მისმართი", {
        name: "",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <MoreVertIcon onClick={() => {
                setEditWindow(true)
                setEditableRow(data[tableMeta.rowIndex])
                setIndex(tableMeta.rowIndex)
              }} className='update-button' />
            );
          }
        }
      },];
    
       
    const options = {
        filterType: 'checkbox',
    };
       
    return (
        <>
            {editWindow && editableRow[0] !== undefined &&

                <div className="form">
                <div className='header'>
                    <h1 className='form-header'>ველის რედაქტირება</h1>
                    <CloseIcon onClick={() => {setEditWindow(false)}} className='close-btn'/>
                </div>
                <input type='text' placeholder='სახელი' value={editableRow[0]} onChange={(event) => {
                    let array = editableRow
                    array[0] = event.target.value
                    setEditableRow([...array])
                }}/>
                <input type='text' value={editableRow[1]} onChange={(event) => {
                    let array = editableRow
                    array[1] = event.target.value
                    setEditableRow([...array])
                }} placeholder='გვარი'/>
                <input type='text' value={editableRow[2]} onChange={(event) => {
                    let array = editableRow
                    array[2] = event.target.value
                    setEditableRow([...array])
                }} min='11' placeholder='პირადი ნომერი'/>
                <select name='gender' id='gender' value={editableRow[3]} onChange={(event) => {
                    let array = editableRow
                    array[3] = event.target.value
                    setEditableRow([...array])
                }}>
                    <option></option>
                    <option calue='male'>Male</option>
                    <option calue='female'>Female</option>
                </select>
                <div className='date'>
                    <label>დაბადების თარიღი</label>
                    <input type='date' value={editableRow[4]} onChange={(event) => {
                        let array = editableRow
                        array[4] = event.target.value
                        setEditableRow([...array])
                    }}/>   
                </div>
                <input type='text' placeholder='დაბადების ადგილი' value={editableRow[5]} onChange={(event) => {
                    let array = editableRow
                    array[5] = event.target.value
                    setEditableRow([...array])
                }}/>
                <input type='text' placeholder='მისამართი' value={editableRow[6]} onChange={(event) => {
                    let array = editableRow
                    array[6] = event.target.value
                    setEditableRow([...array])
                }}/>
                <button type='button' onClick={() => {
                    if(formValidation(editableRow, data, false, index)){
                        props.updateData(editableRow, index)
                        setEditWindow(false)
                    }
                    
                    }}>შენახვა</button>
                </div>
                }
            {
                !editWindow &&
                <div className='table'>
                <MUIDataTable
                    data={data}
                    columns={columns}
                    options={{
                        ...options,
                        customToolbar: () => (<AddIcon onClick={() => {props.setIsFormVisible(true)}} aria-label='Add' id='plus-button' className='MuiButtonBase-root MuiIconButton-root tss-10rusft-MUIDataTableToolbar-icon MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root' />),
                    }}
                />
            </div>}
        </>
    )
}