import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
    </div>
  );
}
