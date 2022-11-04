import React from 'react'
import Section1 from './HomePageComponent/Section1'
import Section2 from './HomePageComponent/Section2'
import Section3 from './HomePageComponent/Section3'

const Home = () => {

 
    //new Date().getTime() --> to get timestamp
  //   const [hackathonArray,setHackathonArray]=useState([

  //   { hid:1,name:'Data Science Bootcamp', start_date:1667633910334,
  //   end_date:1667282896999,status:'upcoming',himage:'https://static.autox.com/uploads/2020/05/Jaguar-F-Type-Exterior-Image.jpg',level:'hard',
  //   description:`Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
  //   An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
  //  Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.` },
  //   { hid:2,name:'Bootcamp_2', start_date:1667283296679,
  //   end_date:1667282896999,status:'upcoming',himage:'https://static.autox.com/uploads/2020/05/Jaguar-F-Type-Exterior-Image.jpg',level:'medium',description:`Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
  //   An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
  //  Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.` },
  //   { hid:3,name:'Coding Ninja Bootcamp', start_date:166728696679,
  //   end_date:1667282896999,status:'past',himage:'https://static.autox.com/uploads/2020/05/Jaguar-F-Type-Exterior-Image.jpg',level:'easy',description:`Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
  //   An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
  //   Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.`}

  //   ])


  return (
    <div>
      <Section1 />
      {/* <hr/> */}

      <Section2 />

      {/* <hr/> */}

      <Section3 />
    </div>
  );
}

export default Home;
