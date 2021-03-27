import React from "react";
import Controls from "../Controls/Controls";
import Table from "../Table/Table";
import { maxYear, minYear } from "../util/func";
import { Graveyard } from "../util/types";
import "./Visual.css";

export default class Visual extends React.Component<
  { data: Graveyard },
  { data: Graveyard; start: number; end: number }
> {
  constructor(props: { data: Graveyard }) {
    super(props);
    this.state = {
      data: this.props.data,
      start: minYear(this.props.data),
      end: maxYear(this.props.data),
    };
  }

  changeYears(years: string[]) {
    const [start, end] = years;
    this.setState(() => ({ start: Number(start), end: Number(end) }));
  }

  render() {
    const { data, start, end } = this.state;
    const controlsProps = { data, changeYears: this.changeYears.bind(this) };
    const tableProps = { data, start, end };
    return (
      <div>
        <Controls {...controlsProps} />
        <Table {...tableProps} />
      </div>
    );
  }
}
