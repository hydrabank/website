import ProfilePhoto from "../dynamic/Avatar";
import LinksRow from "../links/Row";
import DynamicRow from "../dynamic/DynamicRow";
import Pulse from "react-reveal/Pulse";

function Home() {
    return (
        <div className="TopComponentry">
        <ProfilePhoto />
          <Pulse>
          <div className="TopComponentry-NoMargin">
            <h2 className="Name">hi there, i'm danny 👋🏻</h2>
            <h3 className="Tagline">
              I'm a software engineer,
              systems administrator,
              and a UI designer. I also do video editing.
            </h3>
            <LinksRow />
            <DynamicRow />
          </div>
          </Pulse>
      </div>
    );
};

export default Home;