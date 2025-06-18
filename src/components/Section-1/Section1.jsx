import React from "react";
import "../../assets/Section.css";

import { topAnime } from "../../assets/assets";
const Section1 = ({ collapsed }) => {
  return (
    <div className="a">
      <div className="card">
        {topAnime.map((a) => (
          <div className="card-item" key={a.id}>
            <img src={a.image} className="anime.img" alt={a.title} />
            <h4>{a.title}</h4>
            <p>Rating: {a.rating}</p>
            <p>Year: {a.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
