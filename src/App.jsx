import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
// import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="app w-full">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
