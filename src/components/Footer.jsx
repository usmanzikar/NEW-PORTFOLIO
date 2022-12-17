import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://pbs.twimg.com/profile_images/1571038676636811264/2xhOi0ED_400x400.jpg"}
          alt="Founder"
        />

        <h2>Muhammad Usman</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/chaudary-usman-422363196/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/usmanzikar" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;