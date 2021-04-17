import React, { CSSProperties } from "react";
import { text } from "../util/text";

export default class Header extends React.Component<{
  columnIndex: number;
  style: CSSProperties;
  year: number;
}> {
  render() {
    const { columnIndex, style, year } = this.props;
    let content;
    let className;

    if (columnIndex === 0) {
      content = text.identifierProduct;
      className = "head-title";
    } else {
      content = year.toString();
      className = "head-title-year";
    }

    return (
      <span style={style} className={className}>
        {content}
      </span>
    );
  }
}
