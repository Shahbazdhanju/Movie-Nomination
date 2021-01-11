import React, { useState } from "react";
import "./DisplayPannel.css";

const DisplayPannel = (props) => {
  const [count, setCount] = useState(0);
  const [movieList, setMovieList] = useState([]);

  const nominationHandler = () => {
    setCount(count + 1);
  };
  // setMovieList([
  //   ...movieList,
  //   {
  //     Title: t,
  //     Year: y
  //   }
  // ])
  const options = props.results.map((r) => (
    <section className="resultList" key={r.id}>
      Title : {r.Title}
      Year released: {r.Year}
      <button onClick={nominationHandler}>Add</button>
    </section>

  ));

  return (
    <div className="DisplayPannel">
      <strong>Searched results for: {props.typed}</strong>
      <strong style={{ textAlign: "right" }}>
        Number of Nominations: {count}
        {/* Nomination list: {movieList} */}
      </strong>
      <ul>{options}</ul>
    </div>
  );
};

export default DisplayPannel;
