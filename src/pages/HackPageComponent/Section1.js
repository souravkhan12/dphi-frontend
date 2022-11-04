import React,{useContext} from "react";
import { Button } from "primereact/button";
import Section2 from "./Section2";
import {Link} from 'react-router-dom'
import { Context } from "../../context/context";
import { useNavigate } from 'react-router-dom'
const Section1 = ({ object ,idx}) => {

  const cxt=useContext(Context)
  const navigate=useNavigate();
  const deletehandler=()=>{

    let arr=cxt.hackathonArray;

    arr=arr.filter( obj => obj.hid!==object.hid  )
    console.log(arr)
    //arr[idx]=undefined
    cxt.hackathonArrayHandler(arr);
    navigate("/")
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(0,49,69)",
          padding: "6rem",
          height: "40vh",
          textAlign: "initial",
        }}
      >
        <span
          style={{
            backgroundColor: "#FFCE5C",
            padding: "8px 13px",
            marginBottom: "2rem",
            borderRadius: "4px",
            fontSize: "small",
            fontWeight: "bold",
          }}
        >{`${new Date(object.start_date)}`}</span>
        <h1 style={{ color: "white", padding: "10px 1px" }}>{object.name}</h1>
        {/* <span  className='' >{object.level}</span> */}
        <Button
          label={`${object.level}`}
          className="p-button-raised p-button-sm"
          style={{ background: "white", color: "rgb(0,49,69)" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 6rem",
          boxShadow: "0px 10px 10px #E8EEF3",
        }}
      >
        <div style={{display : 'flex', flexDirection : 'column', justifyContent: 'end'}}>
          <span style={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            Overview
          </span>
          <span style={{height : '4px', background: 'green', borderRadius: '10px'}}></span>
        </div>
        <div>
          <Link  to={`/hackathon/edit/${object.hid}/${idx}/`} >
          <Button
            label="Edit"
            className="p-button-raised p-button-sm"
            style={{
              background: "rgb(68,146,76)",
              color: "white",
              marginRight: "10px",
            }}
          />
          </Link>
          <Button
            label="Delete"
            className="p-button-outlined p-button-sm"
            style={{ color: "Red" }}
            onClick={deletehandler}
          />
        </div>
      </div>

      <Section2 description={object.description}   />
    </>
  );
};

export default Section1;
