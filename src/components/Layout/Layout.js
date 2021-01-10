import React from "react";
import Search from "../../container/Search/Search";
import Aux from "../../hoc/Auxiliary";

const layout = (props) => (
  <Aux>
    <div>
      {/* <Search /> */}
    </div>
    <main className="Layout">{props.children}</main>
  </Aux>
);

export default layout;
