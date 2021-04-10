import React, { CSSProperties } from "react";
import { text } from "../util/text";
import { Product } from "../util/types";
import linkIcon from "./move-window.svg";
import "./Cell.css";

export default class Cell extends React.Component<{
  columnIndex: number;
  rowIndex: number;
  style: CSSProperties;
  product: Product;
  year: number;
}> {
  header() {
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

  product() {
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

  node() {
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

  render() {
    const { columnIndex, rowIndex } = this.props;

    if (rowIndex === 0) {
      return this.header();
    } else if (columnIndex === 0) {
      return this.product();
    } else {
      return this.node();
    }
  }
}
