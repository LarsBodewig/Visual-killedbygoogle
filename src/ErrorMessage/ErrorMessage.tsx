import React from "react";
import "./ErrorMessage.css";
import errorIcon from "./gavel.svg";

export default class ErrorMessage extends React.Component<{ error: Error }> {
  render() {
    const { error } = this.props;
    console.error(error);
    const article = "aeiou".includes(error.name[0].toLowerCase()) ? "an" : "a";
    return (
      <div className="error">
        <div className="error-header">
          <img className="error-icon" src={errorIcon} />
          <p className="error-title">
            Oh no, {article} {error.name} occured:
          </p>
        </div>
        <p>{error.message}</p>
        <p className="report-message">
          Please consider reporting this issue on <a href="">Github</a>.
        </p>
      </div>
    );
  }
}
