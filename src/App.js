import PageAgents from "./pages/pageAgents/pageAgents";
import './pages/pageAgents/pageAgents.css'
import './css/App.css'
import Header from "./components/Header/Header";
import React from "react";

function App() {
  return (
    <div className="App">
        <div  className="wrapper">
          <Header></Header>
          <PageAgents></PageAgents>
        </div>
    </div>
  );
}

export default App;
