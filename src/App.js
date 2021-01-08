import "./App.css";
import Layout from "./components/Layout/Layout";
import NominationList from "./components/NominationList/NominationList";
import Aux from "./hoc/Auxiliary";

function App() {
  return (
    <Aux>
    <div className="App">
      <header className="App-header">
        <h1>Movie DB</h1>
      </header> 
      <Layout/>
    </div>
    <NominationList/>
    </Aux>
  );
}
export default App;
