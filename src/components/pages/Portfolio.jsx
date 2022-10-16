import { Visibility } from "@mui/icons-material";
import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
export const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);

    if (category === "all") {
      setList(portfolio);
    }
  };
  return (
    <>
      <article>
        <div className="container">
          <Heading title="Screenshot Layanan" />
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
