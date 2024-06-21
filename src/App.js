import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CheckPointsPages from "./pages/CheckPointsPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import store from "./redux/store";
// import NavigateMenu from './components/NavigateMenu';
import NavigateMen from "./components/NavigateMen";

function App() {


  return (
    <div className="App">
      <Header />

      <div className="content">
        <NavigateMen />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CheckPointsPage/:id" element={<CheckPointsPages />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
