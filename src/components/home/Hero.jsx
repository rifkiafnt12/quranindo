import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContainer">
            <h2 data-aos="fade-up">{val.text}</h2>
            <h1>
              <Typewriter options={{ strings: [`${val.name}`, `${val.post}`, `${val.design}`, `${val.surat}`, `${val.fitur}`], autoStart: true, loop: true }} />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button data-aos="fade-up-right">Download in PlayStore & AppStore</button>
          </div>
        ))}
      </section>
    </>
  );
};
