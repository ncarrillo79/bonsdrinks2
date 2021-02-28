import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import Home from "./components/Home/Home";
import Contato from "./components/Contato/Contato";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/*<Home />*/}
        <Contato/>
        <Footer />
      </div>
    );
  }
}

export default App;
