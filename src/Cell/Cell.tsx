import React, { CSSProperties } from "react";
import { Product } from "../util/types";
import "./Cell.css";

export default class Cell extends React.Component<{
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
  product: Product;
  year: number;
}> {
  render() {
    const { style, product, year } = this.props;

    const open = product.dateOpen.getFullYear();
    const close = product.dateClose.getFullYear();

    const alive = open <= year && close >= year;
    const dot = alive ? "dot-alive" : "";
    let line = "";
    if (alive && open !== close) {
      if (open === year) line = "line line-start";
      else if (close === year) line = "line line-end";
      else line = "line line-continuous";
    }

    return (
      <div className="node" style={style}>
        <div key={year + "-dot"} className={dot}></div>
        <div key={year + "-line"} className={line}></div>
      </div>
    );
  }
}
