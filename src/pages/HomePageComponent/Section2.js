import React from "react";
import { Card } from "primereact/card";

const Section2 = () => {
  return (
    <div style={{padding : '50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            textAlign: "initial",
            paddingLeft: "20px",
            height: "276px",
            background: "#F8F9FD",
            borderRadius: "10px",
            maxWidth: '500px'
          }}
        >
          <img
            style={{ width: "3rem" }}
            src="./icons/carbon_notebook-reference.svg"
            alt="F1"
          />
          <h2>Prove your skills</h2>
          <p style={{ textAlign: "justify", color: "#64607D" }}>
            Gain substantial experience by solving real-world problems and pit
            against others to come up with innovative solutions.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            textAlign: "initial",
            paddingLeft: "20px",
            height: "276px",
            background: "#F8F9FD",
            borderRadius: "10px",
            marginLeft: "20px",
            maxWidth: '500px'

          }}
        >
          <img style={{ width: "3rem" }} src="./icons/Vector.svg" alt="F1" />
          <h2>Learn from community</h2>
          <p style={{ textAlign: "justify", color: "#64607D" }}>
            One can look and analyze the solutions submitted by the other Data
            Scientists in the community and learn from them.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", marginTop: '30px' }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            textAlign: "initial",
            paddingLeft: "20px",
            height: "276px",
            background: "#F8F9FD",
            borderRadius: "10px",
            maxWidth: '500px'

          }}
        >
          <img
            style={{ width: "3rem" }}
            src="./icons/Robot.svg"
            alt="F1"
          />
          <h2>Challenge yourself</h2>
          <p style={{ textAlign: "justify", color: "#64607D" }}>
            There is nothing for you to lose by participating in a challenge.
            You can fail safe, learn out of the entire experience and bounce
            back harder.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            textAlign: "initial",
            paddingLeft: "20px",
            height: "276px",
            background: "#F8F9FD",
            borderRadius: "10px",
            marginLeft: "20px",
            maxWidth: '500px'

          }}
        >
          <img style={{ width: "3rem" }} src="./icons/IdentificationCard.svg" alt="F1" />
          <h2>Earn recognition</h2>
          <p style={{ textAlign: "justify", color: "#64607D" }}>
            You will stand out from the crowd if you do well in AI challenges,
            it not only helps you shine in the community but also earns rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
