import React from "react";
import { Section } from "../../Components/Utils/Utils";
import "./NotFoundPage.css";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <Section className="NotFoundPage">
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </Section>
    );
  }
}