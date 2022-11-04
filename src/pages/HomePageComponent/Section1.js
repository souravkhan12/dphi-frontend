import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          background: "#003145",
          padding: "50px 100px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{
              position: "absolute",
              width: "9.71px",
              height: "120px",
              left: "250px",
              top: "140px",
              background: "#FFCE5C",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <h1
              style={{ textAlign: "justify", color: "white", fontSize: "48px" }}
            >
              Accelerate Innovation <br />
              with Global AI Challenges
            </h1>
            <p
              style={{ textAlign: "justify", color: "white", fontSize: "18px" }}
            >
              AI Challenges at DPhi simulate real-world problems. It is a <br />{" "}
              great place to put your AI/Data Science skills to test on <br />{" "}
              diverse datasets allowing you to foster learning through <br />{" "}
              competitions.
            </p>
            <Link style={{ paddingTop: "10px" }} to="/create">
              <button
                style={{
                  width: "198px",
                  height: "47px",
                  background: "#FFFFF",
                  borderRadius: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#003145",
                  cursor: 'pointer',
                  borderColor: 'white'
                }}
              >
                Create Challange
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src="./icons/MainLogo.svg" alt="MainLogo" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "#002A3B",
          padding: "50px 150px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src="./icons/Group 1000002515.svg" alt="AI" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "initial",
              padding: "10px",
            }}
          >
            <span style={{ color: "white" }}>100K+</span>
            <span style={{ color: "white" }}>AI model submissions</span>
          </div>
        </div>
        <span
          style={{ width: "1px", height: "38px", background: "#C4C4C4" }}
        ></span>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src="./icons/Group 1000002516.svg" alt="AI" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "initial",
              padding: "10px",
            }}
          >
            <span style={{ color: "white" }}>50K+</span>
            <span style={{ color: "white" }}>Data Scientists</span>
          </div>
        </div>
        <span
          style={{ width: "1px", height: "38px", background: "#C4C4C4" }}
        ></span>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src="./icons/Group 1000002518.svg" alt="AI" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "initial",
              padding: "10px",
            }}
          >
            <span style={{ color: "white" }}>100+</span>
            <span style={{ color: "white" }}>AI Challanges hosted</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Section1;
