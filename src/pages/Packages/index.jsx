import React from "react";
import {FiBox} from "react-icons/fi"
import "./style.scss"
import {FaDocker} from "react-icons/fa"
import {SiApache} from "react-icons/si"
import {SiNpm} from "react-icons/si"
import {SiNuget} from "react-icons/si"
import {SiRubygems} from "react-icons/si"
import {GiCardboardBoxClosed} from "react-icons/gi"


const index = () => {
  return (
    <>
      <div className="packages">
        <div className="packages-box">
          <FiBox size={`3em`} className="mb-1"/>
          <h2 className="packages-box-title mb-0">Get started with GitHub Packages</h2>
          <p className="packages-box-text">Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>
          <p className="packages-box-subtitle">Choose a registry</p>
        </div>
        <ul className="packages-list">
          <li className="packages-list-item border rounded-2">
            <div className="packages-list-item-desc">
              <FaDocker size={`1em`} color="#2496ED" />
              <h3 className="packages-list-item-title">Docker</h3>
            </div>
            <p className="packages-list-item-text">A software platform used for building applications based on containers — small and lightweight execution environments.</p>
            <button className="packages-list-item-btn btn btn-light border">Learn more</button>
          </li>

          <li className="packages-list-item border rounded-2">
            <div className="packages-list-item-desc">
              <SiApache size={`1em`} color="#C92038" />
              <h3 className="packages-list-item-title">Apache Maven</h3>
            </div>
            <p className="packages-list-item-text">A default package manager used for the Java programming language and the Java runtime environment.</p>
            <button className="packages-list-item-btn btn btn-light border">Learn more</button>
          </li>

          <li className="packages-list-item border rounded-2">
            <div className="packages-list-item-desc">
              <SiNuget size={`1em`} color="#004880" />
              <h3 className="packages-list-item-title">NuGet</h3>
            </div>
            <p className="packages-list-item-text">A free and open source package manager used for the Microsoft development platforms including .NET.</p>
            <button className="packages-list-item-btn btn btn-light border">Learn more</button>
          </li>

          <li className="packages-list-item border rounded-2">
            <div className="packages-list-item-desc">
              <SiRubygems size={`1em`} color="#D6422B" />
              <h3 className="packages-list-item-title">RubyGems</h3>
            </div>
            <p className="packages-list-item-text">A standard format for distributing Ruby programs and libraries used for the Ruby programming language.</p>
            <button className="packages-list-item-btn btn btn-light border">Learn more</button>
          </li>

          <li className="packages-list-item border rounded-2">
            <div className="packages-list-item-desc">
              <SiNpm size={`1em`} color="#CB0000" />
              <h3 className="packages-list-item-title">npm</h3>
            </div>
            <p className="packages-list-item-text">A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.</p>
            <button className="packages-list-item-btn btn btn-light border">Learn more</button>
          </li>

          <li className="packages-list-item border rounded-2">
            <div className="packages-list-item-desc">
              <GiCardboardBoxClosed size={`1em`} color="#24292F" />
              <h3 className="packages-list-item-title">Containers</h3>
            </div>
            <p className="packages-list-item-text">A single place for your team to manage Docker images and decide who can see and access your images.</p>
            <button className="packages-list-item-btn btn btn-light border">Learn more</button>
          </li>
        </ul>
      </div>
      {/* <h1 className="text-center">Packages page</h1> */}
    </>
  )
}

export default index;