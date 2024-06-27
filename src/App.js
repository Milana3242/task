import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import TaskGroopForm from "./pages/TaskGroopForm";
import Home from "./pages/Home";
import Header from "./components/Header";
import NavigateMen from "./components/NavigateMen";

function App() {
  const [groopName, setGoopName] = React.useState("");
  let location = useLocation();
  const taskGroop = useSelector((state) => state.taskGroop);

  const id = window.location.href.split("/")[4];

  React.useEffect(() => {
    const groop = taskGroop.find((groop) => groop.id === id);
    setGoopName(groop);
  }, [location]);

  return (
    <div className="App">
      <Header groopName={groopName}></Header>
      <div className="content">
        <NavigateMen />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TaskGroopForm/:id" element={<TaskGroopForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
