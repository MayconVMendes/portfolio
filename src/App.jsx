import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./sass/index.scss";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Header changeTheme={changeTheme} currentTheme={theme} />
      <div className="bgOpacityHeader" />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
