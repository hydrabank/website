import './css/Core.css';
import Background from "./reactLib/Background";
import Skills from "./reactLib/sections/Skills";
import Contact from './reactLib/sections/Contact';
import Home from "./reactLib/sections/Home";
import HomeButton from './reactLib/componentry/HomeButton';
import { Element } from 'react-scroll';

import { BrowserRouter as Router, Routes as Switch, Route, NavLink } from "react-router-dom";

function Core() {
  return (
    <div className="Core">
      <Router>
        <HomeButton />
        <Element name="top" />
        <Background />
        <div className="PageContent">
          <Switch>
            <Route exact path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Switch>
        </div>
      </Router>
      <br />
    </div>
  );
}

export default Core;
