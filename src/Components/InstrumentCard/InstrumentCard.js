import React from "react";
import { Link } from "react-router-dom";
import "./InstrumentCard.css";

export default function InstrumentCard(props) {
  const { title } = props;

  //use dynamic import for images
  return (
    <div className={`InstrumentCard`}>
      <Link to={`/category/instrument/${title}`}>
        <div className="img-wrap">
          <img
            src={`${require(`../../Assets/images/${title}.jpg`)}`}
            alt={title}
          />
        </div>

        <div className="InstrumentCard__title">
          <h2 className="capitalize">{title}</h2>
        </div>
      </Link>
    </div>
  );
}
