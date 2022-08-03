import PageAgents from "./pages/pageAgents/pageAgents";
import './pages/pageAgents/pageAgents.css'
import './css/App.css'
import Header from "./components/Header/Header";
import React from "react";

function App() {
    return (
        <div className="App">
            <div  className="wrapper">
                <div className="bg">
                        <div className="bg__circle1 circle"></div>
                        <div className="bg__circle2 circle"></div>
                        <div className="bg__circle3 circle"></div>
                        <div className="bg__circle4 circle"></div>
                        <div className="bg__circle5 circle"></div>
                        <div className="bg__circle6 circle"></div>
                        <div className="bg__circle7 circle"></div>
                </div>
                <Header/>
                <PageAgents/>
            </div>
        </div>
    );
}

export default App;
