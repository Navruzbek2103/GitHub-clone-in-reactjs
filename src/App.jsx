import React from 'react';
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PullRequest from "./pages/PullRequests"
import Issues from "./pages/Issues"
import Hero from "./components/Hero"
import Overview from "./pages/Overview"
import Repositories from "./pages/Repositories"
import Projects from "./pages/Project"
import Followers from "./pages/Followers"


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} >
            <Route path='/' element={<Overview />} />
            <Route path='/repositories' element={<Repositories />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/followers' element={<Followers />} />
            {/* <Route path='/stars' element={<Stars />} /> */}
          </Route>
          <Route path="/pulls" element={<PullRequest />} />
          <Route path="/issues" element={<Issues />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;