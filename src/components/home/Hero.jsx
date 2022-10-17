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
            <div className="platform">
              <a href="https://play.google.com/store/apps/details?id=com.QuranIndo.App">
                <img src="https://quranforandroid.com/assets/img/badge-googleplay-id.png" alt="" data-aos="fade-up-right" />
              </a>
              <a href="https://itunes.apple.com/id/app/id1475973021">
                <img src="https://quranforandroid.com/assets/img/badge-appstore-id.png" alt="" data-aos="fade-up-left" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
