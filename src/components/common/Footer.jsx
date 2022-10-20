import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos="zoom-in">{item.icon}</i>
          </>
        ))}
        <p data-aos="zoom-in">Mobile Apps by AmalPost © 2022 | Kebijakan Privasi</p>
      </footer>
    </>
  );
};

export default Footer;
