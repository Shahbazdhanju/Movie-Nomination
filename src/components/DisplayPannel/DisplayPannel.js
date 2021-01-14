import React, { useState } from "react";
import NominationList from "../NominationList/NominationList";
import "./DisplayPannel.css";

const DisplayPannel = (props) => {
  const [count, setCount] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [disabledIds, setDisabledIds] = useState([]);

  const removeNominationHandler = (i, id) => {
    setCount(count - 1);
    movieList.splice(i, 1);
    var elementExists = document.getElementById(id);
    const index = disabledIds.indexOf(id);
    if (index > -1) {
      disabledIds.splice(index, 1);
    }
  };

  const listOfResult = props.results.map((r, i) => (
    <p className="resultList" key={i}>
      <span className="tspan">Title : {r.Title}</span>
      <span>Year released : {r.Year}</span>
      <button
        id={r.imdbID}
        className="addButton"
        disabled={disabledIds.includes(r.imdbID)}
        onClick={() => nominationHandler(r.Title, r.Year, r.imdbID, i)}
      >
        Nominate
      </button>
    </p>
  ));

  const nominationHandler = (title, year, id, bool, i) => {
    if (count === 5) {
      alert("You have reached the limit of 5.");
    } else {
      setCount(count + 1);
      setMovieList([
        ...movieList,
        {
          Title: title,
          Year: year,
          Key: id,
        },
      ]);
      setDisabledIds([...disabledIds, id]);
    }
  };

  const nominationList = movieList.map((r, i) => (
    <p key={i}>
      <span className="tspan"> Title : {r.Title}</span>
      <span>
        Year released : {r.Year}
      </span>
      <button
        className="removeButton"
        onClick={(e) => removeNominationHandler(i, r.Key)}
      >
        Remove
      </button>
    </p>
  ));

  return (
    <div className="DisplayPannel">
      <h1>
        <section className="sectionLeft">
          <strong>Searched results for: {props.typed}</strong>
          <ul>{listOfResult}</ul>
        </section>
      </h1>
      <NominationList count={count} nominationList={nominationList} />
    </div>
  );
};

export default DisplayPannel;
