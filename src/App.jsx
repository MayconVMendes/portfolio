import "./sass/index.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div data-theme={theme} className="app-container">
      <Header changeTheme={changeTheme} currentTheme={theme}/>
      <div>
        <h2>Teste</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
