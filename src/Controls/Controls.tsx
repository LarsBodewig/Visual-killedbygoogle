import Nouislider, { Formatter } from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import React, { SyntheticEvent } from "react";
import { maxYear, minYear } from "../util/func";
import { Graveyard } from "../util/types";
import "./Controls.css";

export enum Sort {
  Raw = "none",
  Alpha = "name",
  Longest = "longest",
  Shortest = "shortest",
  Oldest = "oldest",
  Newest = "newest",
}

const tooltip: Formatter = {
  to: (value: number) => value,
  from: (value: string) => Number(value),
};

export default class Controls extends React.Component<{
  data: Graveyard;
  changeYears: (values: string[]) => any;
  changeSort: (value: Sort) => any;
}> {
  render() {
    const { data, changeYears, changeSort } = this.props;

    const start = minYear(data);
    const end = maxYear(data);
    const enforceSort = (event: any) => changeSort(event.target.value);
    const options = Object.values(Sort).map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ));

    return (
      <div className="controls">
        <div className="control-sort">
          <label className="control-dropdown-label" htmlFor="control-dropdown">
            Sort:
          </label>
          <div className="control-dropdown-shadow">
            <select
              className="control-dropdown"
              id="control-dropdown"
              onChange={enforceSort}
            >
              {options}
            </select>
          </div>
        </div>
        <div className="control-slider">
          <Nouislider
            range={{ min: start, max: end }}
            start={[start, end]}
            tooltips={[tooltip, tooltip]}
            step={1}
            connect
            behaviour={"snap"}
            animate={false}
            onChange={changeYears}
          />
        </div>
      </div>
    );
  }
}
