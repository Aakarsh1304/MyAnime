import React from "react";
import { animeOfTheYear } from "../../assets/assets";
import "../../assets/Section.css";

const Section2 = () => {
  return (
    <div>
      <div className="card">
        {animeOfTheYear.map((a) => (
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

export default Section2;
