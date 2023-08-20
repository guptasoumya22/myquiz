import React from "react";
import Navbar from "./components/navbar"
import Footer from "./components/footer.jsx"
import Home from "./components/home.jsx"
import Login from "./components/login.jsx"
import Signup from "./components/signup"
import Join_code from "./components/join_code.jsx";
import Host_quiz from "./components/host_quiz"
import Share_code from "./components/share_code";
import Q_add from "./components/q_add";

import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Host_quiz/>
      <Footer/>
    </div>
  );
}

export default App;
