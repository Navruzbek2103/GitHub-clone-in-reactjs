import React from "react";
import "./style.scss";
import HeroMenu from "./HeroMenu"
import HeroBody from "./HeroBody"

const index = () => {
  return (
    <section className="hero">
        <HeroMenu/>
        <HeroBody/>
    </section>
  );
};

export default index;
