import React from "react";

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CheckPointsPages from "./pages/CheckPointsPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import store from "./redux/store";
// import NavigateMenu from './components/NavigateMenu';
import NavigateMen from "./components/NavigateMen";

function App() {
  const [name, setName] = React.useState("");

  const id = window.location.href.split("/")[4];
  let location = useLocation();

  const nameList = useSelector((state) => state.taskGroop);

  React.useEffect(() => {
    const headName = nameList.find((item) => item.id == id);
    setName(headName);
  }, [location]);

  return (
    <div className="App">
      <Header headName={name}></Header>
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
