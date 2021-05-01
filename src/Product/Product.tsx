import React, { CSSProperties } from "react";
import { Product as ProductData } from "../util/types";
import linkIcon from "./move-window.svg";

export default class Product extends React.Component<{
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
  product: ProductData;
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
