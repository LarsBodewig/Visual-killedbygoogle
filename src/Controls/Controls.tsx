import Nouislider, { Formatter } from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import React from "react";
import { maxYear, minYear } from "../util/func";
import { Graveyard } from "../util/types";
import "./Controls.css";

const tooltip: Formatter = {
  to: (value: number) => value,
  from: (value: string) => Number(value),
};

export default class Controls extends React.Component<{
  data: Graveyard;
  changeYears: (values: string[]) => any;
}> {
  render() {
    const { data, changeYears } = this.props;
    const start = minYear(data);
    const end = maxYear(data);

    return (
      <div className="controls">
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
    );
  }
}
