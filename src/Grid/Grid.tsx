import React from "react";
import { Graveyard } from "../util/types";
import "./Grid.css";

export default class Grid extends React.Component<{ data: Graveyard }> {
  render() {
    const graveyard = this.props.data;
    return (
      <div className="grid">
        <p>{graveyard.length} products loaded</p>
      </div>
    );
  }
}
