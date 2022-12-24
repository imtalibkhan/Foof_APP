import React from "react";
import {AiFillLinkedin,AiFillTwitterSquare,AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return <footer>
    <div>
      <h2> Food App</h2>
      <p>we are trying to give you besr experiance possible</p>
      <br />
      <em>love to hear your feedback</em>

      <strong>All right received @foodApp</strong>
    </div>


    <aside>
        <h4>Follow us </h4>
        <a href="https://www.linkedin.com/in/abutalib-khan-1b66a6226/">
            <AiFillLinkedin/>
        </a>
        <a href="https://github.com/imtalibkhan">
            <AiFillGithub/>
        </a>
        <a href="https://twitter.com/imtalibkhan">
            <AiFillTwitterSquare/>
        </a>

    </aside>
  </footer>;
};

export default Footer;
