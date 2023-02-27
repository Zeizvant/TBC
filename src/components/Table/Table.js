import './index.css'
import MUIDataTable from "mui-datatables";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useState } from 'react';
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
                <div className='edit-windown-box'>
                <div className='edit-window-container'></div>
                <div className='edit-window'>
                    <label>სახელი</label>
                    <input type='text' value={editableRow[0]} onChange={(event) => {
                        let array = editableRow
                        array[0] = event.target.value
                        setEditableRow([...array])
                    }} />
                    <label>გვარი</label>
                    <input type='text' value={editableRow[1]} onChange={(event) => {
                        let array = editableRow
                        array[1] = event.target.value
                        setEditableRow([...array])
                    }} />
                    <label>პირადი ნომერი</label>
                    <input type='text' value={editableRow[2]} onChange={(event) => {
                        let array = editableRow
                        array[2] = event.target.value
                        setEditableRow([...array])
                    }} />
                    <label>სქესი</label>
                    <select value={editableRow[4]} name='gender' id='gender' onChange={(event) => {
                        let array = editableRow
                        array[3] = event.target.value
                        setEditableRow([...array])
                    }}>
                        <option calue='male'>Male</option>
                        <option calue='female'>Female</option>
                    </select>
                    <label>დაბადების თარიღი</label>
                    <input type='date' value={editableRow[4]} onChange={(event) => {
                        let array = editableRow
                        array[4] = event.target.value
                        setEditableRow([...array])
                    }} />
                    <label>დაბადების ადგილი</label>
                    <input type='text' value={editableRow[5]} onChange={(event) => {
                        let array = editableRow
                        array[5] = event.target.value
                        setEditableRow([...array])
                    }} />
                    <label>მისმართი</label>
                    <input type='text' value={editableRow[6]} onChange={(event) => {
                        let array = editableRow
                        array[6] = event.target.value
                        setEditableRow([...array])
                    }} />
                    <div className='edit-window-buttons'>
                        <button onClick={() => {
                            if(formValidation(editableRow, data)){
                                props.updateData(editableRow, index)
                                setEditWindow(false)
                            }
                            
                        }}>შენახვა</button>
                        <button onClick={() => {
                            setEditWindow(false)
                        }}>გაუქმება</button>
                    </div>
                </div>
                
                </div>
                }
            <div className='table'>
                <MUIDataTable
                    data={data}
                    columns={columns}
                    options={{
                        ...options,
                        customToolbar: () => (<AddIcon onClick={() => {props.setIsFormVisible(true)}} aria-label='Add' id='plus-button' className='MuiButtonBase-root MuiIconButton-root tss-10rusft-MUIDataTableToolbar-icon MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root' />),
                    }}
                />
            </div>
        </>
    )
}