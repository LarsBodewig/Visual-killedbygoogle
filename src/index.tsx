import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid/Grid";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import "./index.css";
import Loading from "./Loading/Loading";
import { fetchGraveyard } from "./util/fetch-graveyard";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Loading />
  </React.StrictMode>,
  root
);

fetchGraveyard()
  .then((data) => {
    const props = { data };
    ReactDOM.render(
      <React.StrictMode>
        <Grid {...props} />
      </React.StrictMode>,
      root
    );
  })
  .catch((error) => {
    const props = { error };
    ReactDOM.render(
      <React.StrictMode>
        <ErrorMessage {...props} />
      </React.StrictMode>,
      root
    );
  });
