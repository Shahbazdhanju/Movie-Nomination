import React, { Component } from "react";
import axios from "axios";
import DisplayPannel from "../../components/DisplayPannel/DisplayPannel";
//import SearchBar from "../../components/SearchBar/SearchBar";
import SearchButton from "../../components/SearchButton/SearchButton";

//const { API_KEY } = process.env
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=cba1d777";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      query: "",
      results: []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("here is the submit", this.state.movieName);
    this.getInfo();
    this.setState({
      query: this.state.movieName
    })
    console.log("here is th quer::",this.state.query)
  };

  handleInputChange = (event) => {
    event.preventDefault();
    console.log("Input change : ", event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getInfo = () => {
    axios.get(`${API_URL}&t=${this.state.movieName}`).then(({ data }) => {
      console.log("here is data::", data);
      console.log("here is data.data::", data.Response);
      if(data.Response){
        this.setState({
          results: data.Year,
        });
      }
    });
  };

  render() {
    const { movieName } = this.state;

    return (
      <div>
        <strong>Movie name is : {movieName}</strong>
        <form onSubmit={this.handleSubmit}>
          <input
            size="100"
            type="text"
            name="movieName"
            onChange={this.handleInputChange}
          />
          <SearchButton />
        </form>
        <DisplayPannel results= {this.state.results}/>
      </div>
    );
  }
}

export default Search;
