import React from "react";
import ReactDOM from "react-dom";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import "./index.css";
import Loading from "./Loading/Loading";
import { fetchGraveyard } from "./util/fetch-graveyard";
import Visual from "./Visual/Visual";

const root = document.getElementById("root");
const footer = document.getElementsByTagName("footer")[0];

ReactDOM.render(
  <React.StrictMode>
    <Loading />
  </React.StrictMode>,
  root
);

fetchGraveyard()
  .then((data) => {
    const props = { data, footerHeight: footer.offsetHeight };
    ReactDOM.render(
      <React.StrictMode>
        <Visual {...props} />
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
