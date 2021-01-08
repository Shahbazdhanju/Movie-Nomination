import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchButton from "../SearchButton/SearchButton";
import Aux from "../../hoc/Auxiliary";

const layout = (props) => (
  <Aux>
    <div>
      <SearchBar />
      <SearchButton />
    </div>
    <main className="Layout">{props.children}</main>
  </Aux>
);

export default layout;
