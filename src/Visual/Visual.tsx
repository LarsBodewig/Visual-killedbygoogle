import React from "react";
import Controls, { Sort } from "../Controls/Controls";
import Grid from "../Grid/Grid";
import { maxYear, minYear } from "../util/func";
import { Graveyard } from "../util/types";
import "./Visual.css";

export default class Visual extends React.Component<
  { data: Graveyard; footerHeight: number },
  {
    data: Graveyard;
    footerHeight: number;
    start: number;
    end: number;
    sort: Sort;
  }
> {
  constructor(props: { data: Graveyard; footerHeight: number }) {
    super(props);
    this.state = {
      data: this.props.data,
      start: minYear(this.props.data),
      end: maxYear(this.props.data),
      sort: Sort.Raw,
      footerHeight: this.props.footerHeight,
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
    const { data, start, end, sort, footerHeight } = this.state;
    const controlsProps = {
      data,
      changeYears: this.changeYears.bind(this),
      changeSort: this.changeSort.bind(this),
    };
    const gridProps = { data, start, end, sort, footerHeight };
    return (
      <div className="visual">
        <Controls {...controlsProps} />
        <Grid {...gridProps} />
      </div>
    );
  }
}
