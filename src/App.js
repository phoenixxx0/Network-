// App.js
import './styles.css';
import React from "react";
import Home from "./pages/Home";  // ✅ Keep only one import
import Users from "./pages/Users";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      <Home />
      <Users />
      <Settings />
    </div>
  );
}

export default App;
