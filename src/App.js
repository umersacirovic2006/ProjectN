import "./App.css";
import Nav from "./components/Nav/Nav";
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import React from "react";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="app-wrapper">
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
