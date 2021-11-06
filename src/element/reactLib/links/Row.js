import "../../css/Links.css";
import LinkItem from "./Item";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

function LinksRow() {
    return (
        <div className="Links" id="links">
            <LinkItem href="mailto:hello@danny.works" icon={faEnvelope} data-tip="Email" />
            <LinkItem href="/Resume.pdf" icon={faAddressCard} data-tip="Resume" />
            <LinkItem href="https://dsc.bio/Dannington" icon={faDiscord} data-tip="Discord (dsc.bio)" />
            <LinkItem href="https://github.com/Dannnington" icon={faGithub} data-tip="GitHub" />
            <div className="LinksMember">
            <a href="/skills" style={{color: "var(--white)"}} data-tip="Skills">
                    <FontAwesomeIcon icon={faPuzzlePiece} />
            </a>
            </div>
        </div>
    );
};

export default LinksRow;

