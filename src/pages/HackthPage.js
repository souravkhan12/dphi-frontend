import React,{useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import Section1 from './HackPageComponent/Section1';
import { Context } from '../context/context';
const HackthPage = () => {
const {h_id,idx}=useParams();
const cxt=useContext(Context);
  return (
    <div>
      {/* this is hackathon page {h_id}  {idx} { hackathonArray[idx].name } */}

      <Section1 object={ cxt.hackathonArray[idx] } idx={idx} />
    </div>
  )
}

export default HackthPage
