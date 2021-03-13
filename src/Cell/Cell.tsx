import React from "react";
import { Product } from "../util/types";
import "./Cell.css";

export default class Cell extends React.Component<{
  product: Product;
  year: number;
}> {
  render() {
    const { product, year } = this.props;

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
      <td key={year}>
        <div className="node">
          <div key={year + "-dot"} className={dot}></div>
          <div key={year + "-line"} className={line}></div>
        </div>
      </td>
    );
  }
}
