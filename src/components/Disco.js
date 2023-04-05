import React from "react";
import Album from "./Album";
import Data from "./Data";
import img1 from "../Images/nfy.jpg";
import img2 from "../Images/uc.jpg";
import img3 from "../Images/ttw.jpg";

export default function Disco() {
  return (
    <div>
      <div className="heading">
        Discography:
        <hr style={{ margin: "8px" }} />
      </div>
      <div className="photo">
        <Album
          imagesrc={img1}
          text={Data[0].text}
          lyrics={Data[0].lyrics}
        ></Album>
        <Album
          imagesrc={img2}
          text={Data[1].text}
          lyrics={Data[1].lyrics}
        ></Album>
        <Album
          imagesrc={img3}
          text={Data[2].text}
          lyrics={Data[2].lyrics}
        ></Album>
      </div>
    </div>
  );
}
