import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CheckPointsPages from './pages/CheckPointsPage';
import Home from './pages/Home';
import Header from './components/Header';
import store from './redux/store';
// import NavigateMenu from './components/NavigateMenu';
import NavigateMen from './components/NavigateMen';

function App() {
  const state = useSelector((state) => state);

  // React.useEffect(() => {
  //   const store=JSON.parse(window.localStorage.getItem("tasks"));

  // }, []);

  // React.useEffect(() => {
  //   // console.log(state)
  //   // console.log(JSON.stringify(state))

  //   localStorage.setItem("tasks", JSON.stringify(state));
  // }, []);


  return (
    <div className="App">
      <Header />

      <div className="content">
        <NavigateMen />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/my-app/src/pages/CheckPointsPage.js"
            element={<CheckPointsPages />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
