import React, { useState, useEffect } from "react"; // Tambahkan import untuk useState dan useEffect
import Header from "./components/Header";
import Heading from "./components/Heading";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null); // State untuk menyimpan data dari API
  const [loading, setLoading] = useState(true); // State untuk mengelola loading state

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Heading />
      <main>
        <div data-aos="flip-up">
          <About />
        </div>
        <Projects />
        <Contact />
        <Footer />
      </main>
      {loading ? <p>Loading...</p> : data ? <p>{data.message}</p> : <p>No data available.</p>}
    </div>
  );
}

export default App;
