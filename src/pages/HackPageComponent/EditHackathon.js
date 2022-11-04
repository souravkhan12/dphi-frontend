import React,{useState,useRef,useEffect,useContext} from 'react'
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

import { Button } from 'primereact/button';
 
import { Dropdown } from 'primereact/dropdown';
import { useParams ,useNavigate} from 'react-router-dom';
import { Context } from '../../context/context'; 
 
const EditHackathon = () => {
const {idx}=useParams();
const navigate = useNavigate();

const cxt=useContext(Context)
const [name,setname]=useState(cxt.hackathonArray[idx].name);
const [startDate,setStartDate]=useState(new Date(cxt.hackathonArray[idx].start_date));
const [endDate,setEndDate]=useState(new Date(cxt.hackathonArray[idx].end_date));
const [description,setdescription]=useState(cxt.hackathonArray[idx].description);
const [level,setlevel]=useState({});

const toast = useRef(null);


const levelTypes = [
    {name: 'easy', code: 'esy'},
    {name: 'medium', code: 'med'},
    {name: 'hard', code: 'hrd'}
];

const updatehandler=()=>{

let arr=cxt.hackathonArray

arr[idx].name=name
arr[idx].start_date=startDate;
arr[idx].end_date=endDate;
arr[idx].description=description;
arr[idx].level=level.name;

cxt.hackathonArrayHandler(arr);
navigate('/')


}
useEffect(()=>{

if(cxt.hackathonArray[idx].level ==="easy" ){
    setlevel(levelTypes[0])
}
else if(cxt.hackathonArray[idx].level ==="medium" ){
    setlevel(levelTypes[1])
}else{
    setlevel(levelTypes[2])
}

},[])
 


const onBasicUpload = () => {
    toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    console.log(toast)
}

  return (
    <div style={{ display:'flex', margin:'50px',flexDirection:'column' }} >
      <div style={{ backgroundColor:'#F8F9FD',textAlign:'initial',padding:'22px' }} >
        <h2>Challenge Details</h2>
      </div>

      <div  style={{ display:'flex',flexDirection:'column',alignItems:'flex-start' }}>

     <div style={{margin:'20px'}} >
      <InputText placeholder='hackathon-name' value={name} onChange={(e) => setname(e.target.value)} />
      </div>
        
      <div style={{margin:'20px'}}>
      <Calendar style={{ marginRight:'10px' }} placeholder='start-date' value={startDate} onChange={(e) => setStartDate(e.value)}></Calendar>
      <Calendar placeholder='end-date' value={endDate} onChange={(e) => setEndDate(e.value)}></Calendar>

      </div>
 
    
      <div style={{margin:'20px'}}>
      <InputTextarea placeholder='hackathon-description' rows={5} cols={30} value={description} onChange={(e) => setdescription(e.target.value)} />
      </div>
       
       <div style={{margin:'20px'}}>
       <Toast ref={toast}></Toast>  
      <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />
 
      </div>

      <div style={{ margin:'20px' }} >

         
      <Dropdown optionLabel="name" value={level} options={levelTypes} onChange={(e) => {setlevel(e.value) ; console.log(e.value)} } placeholder="Select a level"/>
 
      </div>

      <div style={{ margin:'20px' }} >
      <Button label="Update" onClick={updatehandler}  className="p-button-success" />
      </div>
      </div>
    </div>
  )
}

export default EditHackathon
