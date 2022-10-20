import React from "react";
import { Heading } from "../common/Heading";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Contact Us" />
          <div className="content flexsb">
            <div className="middle">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" data-aos="zoom-in-down" />
                  <input type="email" placeholder="Email" data-aos="zoom-in-up" />
                </div>
                <input type="text" placeholder="Subject" data-aos="zoom-in-up" />
                <textarea data-aos="zoom-in-down" name="" id="" cols="30" rows="10"></textarea>
                <button data-aos="zoom-in-down">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
