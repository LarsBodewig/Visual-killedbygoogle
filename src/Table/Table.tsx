import React from "react";
import Row from "../Row/Row";
import { enumerateArray, maxYear, minYear } from "../util/func";
import { Graveyard } from "../util/types";
import "./Table.css";

export default class Table extends React.Component<{ data: Graveyard }> {
  render() {
    const graveyard = this.props.data;

    const min = minYear(graveyard);
    const max = maxYear(graveyard);
    const years = enumerateArray(min, max);
    const yearHeader = years.map((year) => (
      <th className="head-title-year" key={year}>
        {year}
      </th>
    ));
    const rows = graveyard.map((product) => {
      const props = { product, key: product.name, years };
      return <Row {...props} />;
    });
    return (
      <table className="table">
        <tbody className="tbody">
          <tr>
            <th className="head-title">Product</th>
            {yearHeader}
          </tr>
          {rows}
        </tbody>
      </table>
    );
  }
}
