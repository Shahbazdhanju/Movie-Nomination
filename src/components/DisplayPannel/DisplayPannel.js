import React, { useState } from "react";
import NominationList from "../NominationList/NominationList";
import "./DisplayPannel.css";

const DisplayPannel = (props) => {
  const [count, setCount] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [moviename, setmoviename] = useState("");

  const nominationHandler = (title, year, id) => {
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
    }
  };

  const removeNominationHandler = (i) => {
    if (count === 0) {
      alert("Nothing to remove!");
    } else {
      setCount(count - 1);
    }
    movieList.splice(i, 1);
  };

  const movieExists = (id) => {
     console.log("here is the id", id, movieList);
    // let obj;
    // if (id) {
    //   for (obj in movieList) {
    //     if (obj.Key === id) return false;
    //   }
    // }
    return true;
  };

  const listOfResult = props.results.map((r) => (
    <p className="resultList" key={r.imdbID}>
      <span className="tspan">Title : {r.Title}</span>
      <span>Year released : {r.Year}</span>
      <button
        className="addButton"
        // disabled={(e)=> movieExists(r.imdbID)}
        onClick={(e) => nominationHandler(r.Title, r.Year, r.imdbID)}
      >
        Add
      </button>
    </p>
  ));

  const nominationList = movieList.map((r, i) => (
    <p key={i}>
      <span className="tspan"> Title : {r.Title}</span>
      <span>Year released : {r.Year}</span>
      <button
        className="removeButton"
        onClick={(e) => removeNominationHandler(i)}
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
