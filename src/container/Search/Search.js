import React, { Component } from "react";
import axios from "axios";
import DisplayPannel from "../../components/DisplayPannel/DisplayPannel";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchButton from "../../components/SearchButton/SearchButton";

const API_URL = process.env.REACT_APP_API_URL

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      query: "",
      results: [],
    };
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("here is the submit", this.state.movieName);
    if (this.state.movieName.length > 1) {
      this.getInfo();
      this.setState({
        query: this.state.movieName,
      });
    }
    console.log("here is th quer::", this.state.query);
  };

  handleInputChange = (event) => {
    event.preventDefault();
    console.log("Input change : ", event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getInfo = () => {
    axios.get(`${API_URL}&s=${this.state.movieName}`).then(({ data }) => {
      if (data.Response === "True") {
        this.setState({
          results: data.Search,
        });
      } else {
        alert("Please enter the movie name again!");
      }
    });
  };

  render() {
    const { movieName } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <SearchBar name="movieName" onChange={this.handleInputChange} />
          <SearchButton />
        </form>
        <DisplayPannel typed={movieName} results={this.state.results} />
      </div>
    );
  }
}

export default Search;
