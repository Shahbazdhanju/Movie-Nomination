import React, { useState } from "react";
import "./DisplayPannel.css";

const DisplayPannel = (props) => {
  const [count, setCount] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [moviename,setmoviename] = useState("");

  const nominationHandler = (t,y) => {
    console.log("inside nomination",t)
    if(count === 5){
      alert("You have reached the limit of 5.");
    }else{
      setCount(count + 1);
      setMovieList([
        ...movieList,
        {
          Title: t,
          Year: y
        }
      ])
    }
  };

  const removeNominationHandler = (i) => {
    if(count === 0){
      alert("Nothing to remove!")
    }else{
      setCount(count - 1);
    }
      movieList.splice(i,1);
  };


  const listOfResult = props.results.map((r) => (
      <section className="resultList" key={r.imdbID}>
        Title : {r.Title}
        Year released: {r.Year}
        <button className="addButton"
          onClick={(e)=>nominationHandler(r.Title,r.Year)}>
          Add
        </button>
      </section>
  ));

  
  const nominationList = movieList.map((r,i) => (
    <section className="nomList" key ={i}>
      Title : {r.Title}
      Year released: {r.Year}
      <button className="addButton"
          onClick={(e)=>removeNominationHandler(i)}>
          Remove
        </button>
    </section>
));


  return (
    <div className="DisplayPannel">
      <h1>
        <section className="sectionLeft">
          <strong>Searched results for: {props.typed}</strong>
          <ul>{listOfResult}</ul>
        </section>
      </h1>

      <aside className="right">
        <h1>
          <strong>
            Number of Nominations: {count}
            Nomination list: {nominationList}
          </strong>
        </h1>
      </aside>
    </div>
  );
};

export default DisplayPannel;
