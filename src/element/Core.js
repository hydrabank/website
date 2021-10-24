import './css/Core.css';
import ProfilePhoto from "./reactLib/dynamic/Avatar";
import LinksRow from "./reactLib/links/Row";
import DynamicRow from "./reactLib/dynamic/DynamicRow";
import Background from "./reactLib/Background";
import Skills from "./reactLib/sections/Skills";
import Contact from './reactLib/sections/Contact';

import Pulse from "react-reveal/Pulse";
import { Element } from 'react-scroll';

function Core() {
 return (
   <div className="Core">
    <Element name="top"></Element>
    <Background />
      <div className="TopComponentry">
        <ProfilePhoto />
          <Pulse>
          <div className="TopComponentry-NoMargin">
            <h2 className="Name">danny</h2>
            <h3 className="Tagline">
              software engineer,
              systems administrator,
              UI designer
            </h3>
            <LinksRow />
            <DynamicRow />
          </div>
          </Pulse>
      </div>
    <Skills />
    <Contact />
    <br />
   </div>
 );
}

export default Core;
