import Particles from "react-tsparticles";
import "../css/Background.css";

import { default as config } from "./Configuration/BackgroundConf";

const DISABLED = true;

function Background() {
    if (DISABLED === true) return (
        <div className="background">

        </div>
    );
    else return (
        <Particles
            className="Background"
            id="Background"
            options={config}
        />
    );
};

export default Background;