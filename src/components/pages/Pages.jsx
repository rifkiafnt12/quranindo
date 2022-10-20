import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import { Services } from "./Services";
import { Feature } from "./Feature";
import { About } from "../pages/About";
import { Testimonials } from "./Testimonials";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Home } from "../home/Home";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/feature" component={Feature} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
