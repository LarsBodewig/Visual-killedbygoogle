import React from "react";
import Controls, { Sort } from "../Controls/Controls";
import Table from "../Table/Table";
import { maxYear, minYear } from "../util/func";
import { Graveyard } from "../util/types";
import "./Visual.css";

export default class Visual extends React.Component<
  { data: Graveyard },
  { data: Graveyard; start: number; end: number; sort: Sort }
> {
  constructor(props: { data: Graveyard }) {
    super(props);
    this.state = {
      data: this.props.data,
      start: minYear(this.props.data),
      end: maxYear(this.props.data),
      sort: Sort.Raw,
    };
  }

  changeYears(years: string[]) {
    const [start, end] = years;
    this.setState(() => ({
      ...this.state,
      start: Number(start),
      end: Number(end),
    }));
  }

  changeSort(sort: Sort) {
    this.setState(() => ({
      ...this.state,
      sort,
    }));
  }

  render() {
    const { data, start, end, sort } = this.state;
    const controlsProps = {
      data,
      changeYears: this.changeYears.bind(this),
      changeSort: this.changeSort.bind(this),
    };
    const tableProps = { data, start, end, sort };
    return (
      <div>
        <Controls {...controlsProps} />
        <Table {...tableProps} />
      </div>
    );
  }
}
