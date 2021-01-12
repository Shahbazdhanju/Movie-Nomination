import React, { useState } from "react";
import "./NominationList.css";

const NominationList = (props) => {
  return (
    <aside className="right">
      <h1 className="ntext">Number of Nominations: {props.count}</h1>
      <h3 className="nList">Nomination list: {props.nominationList}</h3>
    </aside>
  );
};

export default NominationList;
