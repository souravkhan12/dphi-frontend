import React,{useState,useRef,useEffect,useContext} from 'react'
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import ImageUploading from 'react-images-uploading';
import { Button } from 'primereact/button';
 
import { Dropdown } from 'primereact/dropdown';
import { useParams ,useNavigate} from 'react-router-dom';
import { Context } from '../../context/context'; 
const CreateHackathon = () => {
    const navigate = useNavigate();
    const cxt=useContext(Context)

const [name,setname]=useState("");
const [startDate,setStartDate]=useState(new Date());
const [endDate,setEndDate]=useState(new Date());
const [description,setdescription]=useState("");
const [level,setlevel]=useState({});

const toast = useRef(null);


const levelTypes = [
    {name: 'easy', code: 'esy'},
    {name: 'medium', code: 'med'},
    {name: 'hard', code: 'hrd'}
];

const statusTypes = [
    {name: 'upcoming', code: 'up'},
    {name: 'active', code: 'act'},
    {name: 'past', code: 'pst'}
];


  const createHandler=()=>{
    console.log(images)
     let arr=cxt.hackathonArray
     let obj={}
     obj.name=name
     obj.start_date=startDate.getTime();
     obj.end_date=endDate.getTime();
     obj.description=description;
     obj.level=level.name;
     obj.status='upcoming';
     obj.himage=images[0].data_url;

     arr.push(obj);

     cxt.hackathonArrayHandler(arr);
     navigate("/")

    //  setTimeout(()=>{

    //  },2000)
   

  }

//   const onBasicUpload = () => {
//     toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
//     console.log(toast)
// }
const [images, setImages] = React.useState([]);
const maxNumber = 69;

const onChange = (imageList, addUpdateIndex) => {
  // data for submit
  console.log(imageList, addUpdateIndex);
  setImages(imageList);
};

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
     {/* <Toast ref={toast}></Toast>  
    <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} /> */}

<ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>

    </div>



    <div style={{ margin:'20px' }} >

       
    <Dropdown optionLabel="name" value={level} options={levelTypes} onChange={(e) => {setlevel(e.value) ; console.log(e.value)} } placeholder="Select a level"/>

    </div>

    <div style={{ margin:'20px' }} >
    <Button label="Create" onClick={createHandler}  className="p-button-success" />
    </div>
    </div>
  </div>
  )
}

export default CreateHackathon
