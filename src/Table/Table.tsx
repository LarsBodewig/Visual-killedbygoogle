import React from "react";
import { Sort } from "../Controls/Controls";
import Row from "../Row/Row";
import {
  enumerateArray,
  filterProduct,
  maxYear,
  minYear,
  sortProducts,
} from "../util/func";
import { Graveyard } from "../util/types";
import "./Table.css";

export default class Table extends React.Component<{
  data: Graveyard;
  start: number;
  end: number;
  sort: Sort;
}> {
  render() {
    const { data: graveyard, start, end, sort } = this.props;
    const years = enumerateArray(start, end);
    const yearHeader = years.map((year) => (
      <th className="head-title-year" key={year}>
        <div className="head-title-year-text">{year}</div>
      </th>
    ));
    const rows = graveyard
      .filter((product) => filterProduct(product, start, end))
      .sort(sortProducts(sort))
      .map((product) => {
        const props = { product, key: product.name, years };
        return <Row {...props} />;
      });
    return (
      <table className="table">
        <tbody className="tbody">
          <tr className="head-row">
            <th className="head-title">Product</th>
            {yearHeader}
          </tr>
          {rows}
        </tbody>
      </table>
    );
  }
}
