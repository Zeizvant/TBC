import './index.css'
import MUIDataTable from "mui-datatables";
import AddIcon from '@mui/icons-material/Add';

export const Table = (props) => {

    const columns = ["სახელი", "გვარი", "პირადი ნომერი", "სქესი", "დაბადების თარიღი", "დაბადების ადგილი", "მისმართი"];
    const data = [
    ];
       
    const options = {
        filterType: 'checkbox',
    };
       
       
    return (
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
    )
}