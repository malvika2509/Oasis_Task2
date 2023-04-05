import React from "react";
import "./About.css";
import Disco from "./Disco";
export default function About() {
  return (
    <div className="about">
      <div className="text">
        <div className="heading">
          About:
          <hr style={{ margin: "8px" }} />
        </div>
        <div className="parah">
          <p>
            Singer-songwriter Alec Benjamin hails from Phoenix Arizona, and he’s
            been steadily releasing music since his breakthrough 2014 cut “Paper
            Crown”. His single “Let Me Down Slowly” garnered over 2 million
            streams in its first week, and now has over 300 million!
            <br />
            Born and raised in Phoenix, Arizona, Alec grew up listening to
            artists such as Paul Simon and Eminem. He grew up in an ordinary
            family, and none of his family members knew anything about music. He
            started developing a keen interest in music during his high-school
            years. He learned to play the guitar by watching videos on ‘YouTube’
            and never attended any professional guitar classes.
            <br />
            It may not come across as immediately obvious when listening to
            Alec’s music, but the rising singer was inspired by the rap icon,
            Eminem to get into music in the first place.
            <br />
            To learn more about him,refer to
            <a
              href="https://en.wikipedia.org/wiki/Alec_Benjamin"
              target="_"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Wikipedia
            </a>
          </p>
        </div>

        <div>
          <Disco></Disco>
        </div>
      </div>
    </div>
  );
}
