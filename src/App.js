import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CheckPointsPages from './pages/CheckPointsPage'
import Home from './pages/Home'
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-app/src/pages/CheckPointsPage.js" element={<CheckPointsPages />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
