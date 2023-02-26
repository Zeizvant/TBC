import './index.css'
import CloseIcon from '@mui/icons-material/Close';

export const Form = () => {
    return (
        <div className="form">
            <div className='header'>
                <h1 className='form-header'>ველის დამატება</h1>
                <CloseIcon className='close-btn'/>
            </div>
            <input type='text' placeholder='სახელი'/>
            <input type='text' placeholder='გვარი'/>
            <input type='text' placeholder='პირადი ნომერი'/>
            <div className='date'>
                <label>დაბადების თარიღი</label>
                <input type='date' />   
            </div>
            <select name='gender' id='gender'>
                <option calue='male'>Male</option>
                <option calue='female'>Female</option>
            </select>
            <input type='text' placeholder='დაბადების ადგილი'/>
            <input type='text' placeholder='მისამართი'/>
            <button>შენახვა</button>
        </div>
    )
}