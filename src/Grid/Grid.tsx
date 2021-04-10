import React from "react";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";
import { VariableSizeGrid } from "react-window";
import Cell from "../Cell/Cell";
import { Sort } from "../Controls/Controls";
import {
  DEFAULT_CELL_WIDTH,
  ROW_HEIGHT,
  ROW_TITLE_WIDTH,
} from "../util/constants";
import { enumerateArray, filterProduct, sortProducts } from "../util/func";
import { Graveyard } from "../util/types";
import "./Grid.css";

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
      <AutoSizer className="grid">
        {(size: Size) => (
          <VariableSizeGrid
            columnCount={nodeCount + 1}
            columnWidth={this.columnWidth(size.width, nodeCount)}
            height={size.height - footerHeight}
            rowCount={products.length}
            rowHeight={() => ROW_HEIGHT}
            width={size.width}
          >
            {(props) => {
              const cellProps = {
                ...props,
                year: years[props.columnIndex - 1],
                product: products[props.rowIndex - 1],
              };
              return <Cell {...cellProps}></Cell>;
            }}
          </VariableSizeGrid>
        )}
      </AutoSizer>
    );
  }
}
