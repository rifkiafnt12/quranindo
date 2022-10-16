import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => (
            <>
              <div className="left">
                <img src={val.cover} alt="" data-aos="fade-up-right" />
              </div>
              <div className="right" data-aos="fade-up-left">
                <Heading title="About Qur'an Indonesia" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button data-aos="fade-up-right">Info Aplikasi</button>
                <button className="primaryBtn" data-aos="fade-up-left">
                  Download Aplikasi
                </button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
