import React from "react";
import { Link } from "react-router-dom";
import "./InstrumentCard.css";

export default function InstrumentCard(props) {
  const { title } = props;
  let imageLink = "";

  if (title) {
    switch (title) {
      case "guitar":
        imageLink = process.env.PUBLIC_URL + "/Photos/guitar-cropped.jpg";
        break;

      case "piano":
        imageLink = process.env.PUBLIC_URL + "/Photos/piano-resize.jpg";
        break;

        case 'clarinet':
          imageLink = process.env.PUBLIC_URL + "/Photos/clarinet.jpg";
          break;

          case 'violin':

          imageLink = process.env.PUBLIC_URL + "/Photos/violin.jpg";
          break;

      default:
        imageLink = "";
    }
  }

  return (
    <div className={`InstrumentCard`}>
      <Link to={`/category/instrument/${title}`}>
        <div className="img-wrap">
          {/* {imageLink.length > 0 ? <img src={imageLink} alt={title} /> : ""} */}
          <img src={imageLink} alt={title} />
        </div>

        <div className="InstrumentCard__title">
          <h2 className="capitalize">{title}</h2>
        </div>
      </Link>
    </div>
  );
}
