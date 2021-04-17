import React, { CSSProperties } from "react";
import { Product } from "../util/types";
import linkIcon from "./move-window.svg";

export default class Cell extends React.Component<{
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
  product: Product;
  year: number;
}> {
  render() {
    const { product, style } = this.props;

    return (
      <div className="row-title" style={style}>
        <a className="row-title-link" target="_blank" href={product.link}>
          {product.name}
          <img className="link-icon" src={linkIcon} />
        </a>
      </div>
    );
  }
}
