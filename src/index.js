import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <header>
          <div className="bg-gray-900 text-white p-5">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-3xl font-bold">Zaldi</h1>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
