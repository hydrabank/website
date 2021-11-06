import "../../css/Skills.css";
import Zoom from "react-reveal/Zoom";

import { faJsSquare, faRust, faPython, faJava, faRedhat } from "@fortawesome/free-brands-svg-icons";
import GenericFasIcon from "../componentry/GenericFasIcon";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const row2Style = { marginLeft: "15%", marginRight: "15%" };

function Skills() {
    return (
        <Zoom bottom>
                <div className="Skills-Section">
                    <h1 className="Title">skills</h1>
                    <h2 className="Subtitle">TL;DR - I have 6+ years of experience in JavaScript, and more experience in other languages and fields.</h2>
                    <div className="Skills-Row">
                        <GenericFasIcon icon={faJsSquare} size="2x" tooltip="JavaScript, 6 years (began June 2016)" />
                        <GenericFasIcon icon={faPython} size="2x" tooltip="Python, ~1 year (began August 2020)" />
                        <GenericFasIcon icon={faJava} size="2x" tooltip="Java, ~1 year (began December 2020)" />
                        <GenericFasIcon icon={faRust} size="2x" tooltip="Rust, ~1 year (began April 2021)" />
                    </div>
                    <div className="Skills-Row">
                        <GenericFasIcon icon={faRedhat} size="2x" tooltip="Linux, 4 years (began May 2017; RHEL is my preferred server distro)" style={row2Style} />
                        <GenericFasIcon icon={faFilm} size="2x" tooltip="Video editing and media, 3 years (began January 2019; Premiere Pro is my favourite video editor)" style={row2Style} />
                    </div>
                    <h2 className="Subtitle" style={{ marginTop: "0%" }}>
                        Besides development, I'm also a systems administrator and an avid linux user. I use RHEL and Rocky Linux on my servers,
                        and I daily drive Arch Linux on my personal system. I have an extensive amount of experience with using Linux-based platforms, along with
                        managing Linux-based ecosystems like Docker and Kubernetes.
                        <br /><br />
                        I also do a lot of media work, with lots of experience in video editing, media production, and VFX/GFX/SFX.
                    </h2>
                </div>
                <div className="Skills-Section">
                    <h1 className="Title">projects</h1>
                    <h2 className="Subtitle">
                        I've worked on a number of projects in the past, and I've collaborated with various companies and tech startups over the years. You can find all of my projects <a href="https://github.com/Dannnington" style={{color: "var(--white)"}}>here</a>.
                    </h2>
                </div>
        </Zoom>
    );
};

export default Skills;