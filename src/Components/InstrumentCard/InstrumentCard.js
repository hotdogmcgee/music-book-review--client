import React from "react";
import { Link } from "react-router-dom";

export default function InstrumentCard(props) {
  const { image, title } = props;

  return (
    <Link to={`/category/instrument/${title}`}>
      <div className={"InstrumentCard_" + { title }}>
        <h2>{title}</h2>
        <p>{image}</p>
      </div>
    </Link>
  );
}
