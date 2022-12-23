import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Routes>
            <Route 
              path='/leesey'
              element={<Home />}
            />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
