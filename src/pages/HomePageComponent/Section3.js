import React, { useState,useEffect,useContext } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { Card } from "primereact/card";

import { MultiSelect } from "primereact/multiselect";
import "../../Css/HomePage.css";

import { Link } from "react-router-dom";
import { Context } from "../../context/context";

const Section3 = () => {
  // { hid:1,name:'Data Science Bootcamp', start_date:1667282896679,
  // end_date:1667282896999,status:'upcoming',himage:'https://static.autox.com/uploads/2020/05/Jaguar-F-Type-Exterior-Image.jpg' },

  const cxt=useContext(Context)
  const [selectedFilterState, setSelectedFilterState] = useState("");
  const [search,setSearch]=useState("");
  //const [displayarrstate,setdisplayarrstate]=useState(cxt.hackathonArray)

  const [loading1, setLoading1] = useState(false);

  const [searchFilterType,setsearchFilterType]=useState("search");

  const filterOptions = [
    {
      label: "Status",
      code: "ST",
      items: [
        { label: "Active", value: "active" },
        { label: "Upcoming", value: "upcoming" },
        { label: "Past", value: "past" },
      ],
    },
    {
      label: "level",
      code: "LV",
      items: [
        { label: "Easy", value: "easy" },
        { label: "Medium", value: "medium" },
        { label: "Hard", value: "hard" },
      ],
    },
  ];


  const onLoadingClick1 = () => {
    setLoading1(true);

    setTimeout(() => {
        setLoading1(false);
    }, 2000);
}

const removeUndefined=(arr)=>{

  let temparray=[];

  if(arr===undefined)
    return [];
  arr.forEach(obj => {

    if(obj!==undefined){
      temparray.push(obj);
    }
  })

 // cxt.hackathonArrayHandler(temparray)
  return temparray;
}

//   useEffect(()=>{
 
//     if(selectedFilterState === "filter"){
         
//     }
//   },[selectedFilterState])

  //useEffect(()=>{
  //console.log("youuuuu huuuu")
    // const filterFun=()=>{
    //     let arr=[];
    //     // if(setsearchFilterType === null){
    //     //     return hackathonArray;
    //     // }
    //     console.log(searchFilterType);
    //    if(searchFilterType === "search"){
            
    //       if(search === null ||  search === "")
    //       {
    //         //setdisplayarrstate(hackathonArray);
    //         return hackathonArray;
    //        }
  
    //      arr= hackathonArray.map(obj => {
    //       console.log(search.toLowerCase())
    //         console.log((obj.name.toLowerCase()).indexOf((search).toLowerCase()))
    //         if((obj.name.toLowerCase()).indexOf((search).toLowerCase()) >=0){
    //           return obj;
    //         }
  
    //       })
  
    //       console.log(arr);
  
    //      // return arr;
    //    }
    //    else if(searchFilterType === "filter"){
    //       //selectedFilterState
    //       console.log(selectedFilterState)
    //       if(selectedFilterState === "" || selectedFilterState.length ===0 ){
    //       //setdisplayarrstate(hackathonArray);
    //        return hackathonArray;
    //       }
    //       arr=hackathonArray.map( (obj,i)=>{
  
    //        if( selectedFilterState.indexOf(obj.status) >=0 || selectedFilterState.indexOf(obj.level) >=0 ){
    //           return obj;
    //        }
  
    //       } )
  
          
    //      // return arr;
    //      //setdisplayarrstate(arr);
    //    }
      
    //    return arr;
    //   }

     // filterFun();

 // },[searchFilterType])


 const filterFun=()=>{
    let arr=cxt.hackathonArray;
    //arr=removeUndefined(arr)
    // if(setsearchFilterType === null){
    //     return hackathonArray;
    // }
    console.log(searchFilterType);
  // if(searchFilterType === "search"){
        
      if(search === null ||  search === "")
      {
        //setdisplayarrstate(hackathonArray);
        arr= cxt.hackathonArray;
       }
     else{
     arr= arr.map(obj => {
      console.log(search.toLowerCase())
        console.log((obj.name.toLowerCase()).indexOf((search).toLowerCase()))
        if((obj.name.toLowerCase()).indexOf((search).toLowerCase()) >=0){
          return obj;
        }

      })
    }

      arr=removeUndefined(arr);
      console.log(arr);

     // return arr;
  // }
  // else if(searchFilterType === "filter"){
      //selectedFilterState
      console.log(selectedFilterState)
      if(selectedFilterState === "" || selectedFilterState.length ===0 ){
      //setdisplayarrstate(hackathonArray);
      arr=removeUndefined(arr);
       return arr;
      }
      arr=arr.map( (obj,i)=>{

       if(obj !== undefined){
         

       var flag=1;
        selectedFilterState.map( (str) => {

           if(str!=obj.level && str!=obj.status){
               flag=0;
               //break;
           }

        } )

        if(flag === 1){
            return obj;
        }
    }

      } )

      arr=removeUndefined(arr);
      
     // return arr;
     //setdisplayarrstate(arr);
   //}
  
   return arr;
  }

  

  return (
    <div>
     <div style={{ backgroundColor:'#002A3B',padding:'30px 280px',height:'40vh' }} >
      <h1 style={{color:'white'}} >Explore Challenges</h1>
      <div className="filter-search">
        <div className="p-inputgroup md:col-9 ">
          <span className="p-inputgroup-addon">
            <i className="pi pi-search"></i>
          </span>
          <InputText placeholder="Search"  value={search}  onChange={ (event)=> {setSearch(event.target.value);filterFun();setsearchFilterType("search")} } />
        </div>

        <div className="p-inputgroup md:col-3">
          <MultiSelect
            display="chip"
            placeholder="filter"
            value={selectedFilterState}
            options={filterOptions}
            onChange={(e) => {setSelectedFilterState(e.value); console.log(e.value) ; filterFun();setsearchFilterType("filter");  }}
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
          />
        </div>
      </div>
      </div> 


      <div className="card-section" style={{ backgroundColor:'#003145',padding:'20px 180px' }} >
        <div className="main-cards">
          { filterFun() && filterFun().length>0 ? filterFun().map((obj, i) => {

             if(obj === undefined){

              console.log(obj)
              return ;

             }
            const counterUpdateFunction = () => {
              //console.log("am i working...");
              if(obj === undefined)
                 return ;


              let diff;
              let arr=cxt.hackathonArray;
              if(obj.start_date - Date.now() >=0){
                diff=obj.start_date - Date.now();
                obj.status="upcoming";
                if(arr[i]!==undefined)
                arr[i].status="upcoming"
              }

              else if( obj.end_date-Date.now()>=0){
                diff=obj.end_date-Date.now();
                obj.status="active";
                if(arr[i]!==undefined)
                arr[i].status="active";
              }else{
                obj.status="past";
                if(arr[i]!==undefined)
                arr[i].status="past";
              }
              //console.log(diff)
              let days = parseInt(diff / (24 * 3600 * 1000));

              let remainingTime = diff % (24 * 3600 * 1000);

              let hrs = parseInt(remainingTime / (3600 * 1000));

              remainingTime = remainingTime % (3600 * 1000);

              let min = parseInt(remainingTime / (60 * 1000));

              //console.log(obj.D,obj.H,obj.M)
              if (document.getElementById(`${obj.hid}-days`))
                document.getElementById(`${obj.hid}-days`).innerHTML = days;
              if (document.getElementById(`${obj.hid}-hrs`))
                document.getElementById(`${obj.hid}-hrs`).innerHTML = hrs;
              if (document.getElementById(`${obj.hid}-min`))
                document.getElementById(`${obj.hid}-min`).innerHTML = min;
              //setHackathonArray(arr)
              // setHackathonArray( current => current.map(object => {
              //     if(object.id === obj.id){
              //         return {...object,D:days,H:hrs,M:min}
              //     }
              // }) )

              //cxt.hackathonArrayHandler(arr);

            };

            setInterval(counterUpdateFunction, 1000);

            //const {days,hrs,min} = counterUpdateFunction(diff);

            return (
                <>
               <Link  to={`/hackathon/${obj.hid}/${i}`}  >
              <Card
                title={`${obj.name}`}
                subTitle={`${obj.status}`}
                style={{ width: "25em",height: '36em', margin: "10px"}}
                footer={
                  <span>
                  <Button label="Participate Now" className="p-button-success" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
                  </span>
                }
                header={
                  <img
                    alt="Card"
                    src={`${obj.himage}`}
                    onError={(e) =>
                      (e.target.src =
                        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                    }
                  />
                }
              >
               {  obj.status==="upcoming" &&  <div className="counter">
                <div>Starts In:</div>
                <div  style={{ display:'flex',justifyContent:'center' }} >
                  <div style={{ margin: "5px" }}>
                    <p>Days: </p>
                    <p id={`${obj.hid}-days`}></p>
                  </div>
                  <div style={{ margin: "5px" }}>
                    <p>Hours: </p>
                    <p id={`${obj.hid}-hrs`}></p>
                  </div>
                  <div style={{ margin: "5px" }}>
                    <p>Min: </p>
                    <p id={`${obj.hid}-min`}></p>
                  </div>
                </div>
                </div> }


                {  obj.status==="active" &&  <div className="counter">
                <div>Ends In:</div>
                <div style={{ display:'flex',justifyContent:'center' }}  >
                  <div style={{ margin: "5px" }}>
                    <p>Days: </p>
                    <p id={`${obj.hid}-days`}></p>
                  </div>
                  <div style={{ margin: "5px" }}>
                    <p>Hours: </p>
                    <p id={`${obj.hid}-hrs`}></p>
                  </div>
                  <div style={{ margin: "5px" }}>
                    <p>Min: </p>
                    <p id={`${obj.hid}-min`}></p>
                  </div>
                </div>
                </div> }

                {  obj.status==="past" &&  <div className="counter">
                <div>Contest Has Ended</div>
                </div> }
              </Card>
              </Link> 
              </>
            );
          }) : <div  style={{ color:'white',  height:'40vh' }}>
          <h1>Oops!! looks like no hackathons are there currently...</h1>
        </div>  }

         
        </div>
      </div>
    </div>
  );
};

export default Section3;
