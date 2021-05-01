import React from "react";
import Cell from "../Cell/Cell";
import { Sort } from "../Controls/Controls";
import Header from "../Header/Header";
import Product from "../Product/Product";
import {
  DEFAULT_CELL_WIDTH,
  ROW_HEIGHT,
  ROW_TITLE_WIDTH,
} from "../util/constants";
import { enumerateArray, filterProduct, sortProducts } from "../util/func";
import { Graveyard } from "../util/types";
import "./Grid.css";
import BaseTable, { Column } from "react-base-table";
//import "react-base-table/styles.css";

export default class Grid extends React.Component<{
  data: Graveyard;
  start: number;
  end: number;
  sort: Sort;
  footerHeight: number;
}> {
  columnWidth(totalWidth: number, nodeCount: number) {
    const calcWidth = (totalWidth - ROW_TITLE_WIDTH) / nodeCount;
    return (index: number) => {
      if (index === 0) {
        return ROW_TITLE_WIDTH;
      }
      return Math.max(calcWidth, DEFAULT_CELL_WIDTH);
    };
  }

  render() {
    const { data: graveyard, start, end, sort, footerHeight } = this.props;
    const years = enumerateArray(start, end);
    const products = graveyard
      .filter((product) => filterProduct(product, start, end))
      .sort(sortProducts(sort));
    const nodeCount = years.length;

    return (
      <BaseTable width={0} height={0} data={[]} className="grid">
        {products.map((product) => (
          <Column key={product.name} width={100} flexGrow={1}></Column>
        ))}
      </BaseTable>
    );
  }
}
