import React from "react";
import "./Album.css";
import "./Data.js";

export default function Album(props) {
  return (
    <div className="card">
      {/* <img
        src={props.imagesrc}
        alt="image"
        style={{ width: "400px", height: "400px" }}
      /> */}
      <img
        src={props.imagesrc}
        alt="image"
        style={{ width: "400px", height: "400px" }}
      />
      <div className="container">
        <h4>
          <b>{props.text}</b>
        </h4>
      </div>
      <div className="song">
        <h3>{props.lyrics}</h3>
      </div>
    </div>
  );
}
