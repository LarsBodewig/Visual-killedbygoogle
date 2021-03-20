import React from "react";
import Cell from "../Cell/Cell";
import { Product } from "../util/types";
import "./Row.css";
import linkIcon from "./move-window.svg";

export default class Row extends React.Component<{
  product: Product;
  years: Array<number>;
}> {
  render() {
    const { product, years } = this.props;

    const timeline = years.map((year) => {
      const props = { product, year, key: year };
      return <Cell {...props} />;
    });
    return (
      <tr className="row">
        <th className="row-title">
          <a className="row-title-link" target="_blank" href={product.link}>
            {product.name}
            <img className="link-icon" src={linkIcon} />
          </a>
        </th>
        {timeline}
      </tr>
    );
  }
}
