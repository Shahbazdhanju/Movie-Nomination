import "./App.css";
import Layout from "./components/Layout/Layout";
import Aux from "./hoc/Auxiliary";
import Search from "./container/Search/Search";
function App() {
  return (
    <Aux>
    <div className="App">
      <header className="App-header">
        <h1>Movie DB</h1>
      </header> 
      <Layout/>
      <Search/>
    </div>
    </Aux>
  );
}
export default App;
