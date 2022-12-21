import React from "react";
import "./style.scss";
import {ImGithub} from "react-icons/im"


const index = () => {
  return (
    <div className="container">
      <div className="section-footer d-flex  align-items-center">
      <div className="section-footer-auth d-flex gap-2 align-items-center">
        <ImGithub size={`2em`} />
        <p className="section-footer-auth">
          © {new Date().getFullYear()} GitHub, Inc.
        </p>
      </div>
      <ul className="info-link-list d-flex align-items-center">
        <li className="info-link-list-item">
          <a
            href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
            target="blank"
            className="link-list-item-link"
          >
            Terms
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
            target="blank"
            className="link-list-item-link"
          >
            Privacy
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://github.com/security"
            target="blank"
            className="link-list-item-link"
          >
            Security
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://www.githubstatus.com/"
            target="blank"
            className="link-list-item-link"
          >
            Status
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://docs.github.com/ru"
            target="blank"
            className="link-list-item-link"
          >
            Docs
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://support.github.com/?tags=dotcom-footer"
            target="blank"
            className="link-list-item-link"
          >
            Contact GitHub
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://github.com/pricing"
            target="blank"
            className="link-list-item-link"
          >
            Pricing
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://docs.github.com/ru"
            target="blank"
            className="link-list-item-link"
          >
            API
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://github.com/services/"
            target="blank"
            className="link-list-item-link"
          >
            Training
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://github.blog/"
            target="blank"
            className="link-list-item-link"
          >
            Blog
          </a>
        </li>
        <li className="info-link-list-item">
          <a
            href="https://github.com/about"
            target="blank"
            className="link-list-item-link"
          >
            About
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default index;
