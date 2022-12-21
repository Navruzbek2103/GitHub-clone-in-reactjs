import React from 'react';
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PullRequest from "./pages/PullRequests"
import Issues from "./pages/Issues"
import Hero from "./components/Hero"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/pulls" element={<PullRequest />} />
          <Route path="/issues" element={<Issues />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;