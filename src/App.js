import "./App.css";
import Aux from "./hoc/Auxiliary";
import Search from "./container/Search/Search";

function App() {
  return (
    <Aux>
      <div className="App">
        <header className="App-header">
          <h1>Your movie nomination list!</h1>
        </header>
        <main style={{backgroundColor:"lightblue"}}>
        <Search/>
        </main>
      </div>
    </Aux>
  );
}
export default App;
