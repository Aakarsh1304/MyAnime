import React, { useState, useEffect } from "react";
import "./App.css";
import Section1 from "./components/Section-1/Section1";
import Section2 from "./components/Section-2/Section2";
import Section3 from "./components/Section-3/Section3";

const App = () => {
  const [collapsed, setCollapsed] = useState([true, false, false]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);
  function toggleSection(index) {
    setCollapsed((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <>
      <nav className="navbar">
        <span className="navbar-title">MyAnime</span>
        <div className="navbar-actions">
          <button
            className="dark-mode-btn"
            onClick={() => setDarkMode((d) => !d)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button
            className="top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑ Top
          </button>
        </div>
      </nav>
      <div className="App">
        <h3 className="sticky-header header-1" onClick={() => toggleSection(0)}>
          Top Anime of all time {collapsed[0] ? "▲" : "▼"}
        </h3>

        <div className={`collapsible ${collapsed[0] ? "open" : ""}`}>
          <Section1 />
        </div>

        <h3 className="sticky-header header-2" onClick={() => toggleSection(1)}>
          Anime of the years {collapsed[1] ? "▲" : "▼"}
        </h3>
        <div className={`collapsible ${collapsed[1] ? "open" : ""}`}>
          <Section2 />
        </div>

        <h3 className="sticky-header header-3" onClick={() => toggleSection(2)}>
          My Fav Anime {collapsed[2] ? "▲" : "▼"}
        </h3>
        <div className={`collapsible ${collapsed[2] ? "open" : ""}`}>
          <Section3 />
        </div>
      </div>
    </>
  );
};

export default App;
