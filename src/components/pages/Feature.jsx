import { Visibility } from "@mui/icons-material";
import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { feature } from "../data/dummydata";

const allCategory = ["all", ...new Set(feature.map((item) => item.category))];
export const Feature = () => {
  const [list, setList] = useState(feature);
  const [category] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = feature.filter((item) => item.category === category);
    setList(newItems);

    if (category === "all") {
      setList(feature);
    }
  };
  return (
    <>
      <article>
        <div className="container">
          <Heading title="Fitur Aplikasi" />
          <div className="catButton">
            {category.map((category) => (
              <button className="primaryBtn" onClick={() => filterItems(category)} data-aos="fade-down">
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((items) => (
              <div className="box" data-aos="flip-left">
                <div className="img">
                  <img src={items.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{items.title}</h3>
                  <span>{items.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
