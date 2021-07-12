import "../../css/Links.css";
import LinkItem from "./Item";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function LinksRow() {
    return (
        <div className="Links">
            <LinkItem href="mailto:hello@bean.codes" icon={faEnvelope} data-tip="Email" />
            <LinkItem href="/Resume.pdf" icon={faAddressCard} data-tip="Resume" />
            <LinkItem href="https://dsc.bio/Dannington" icon={faDiscord} data-tip="My Discord information (dsc.bio)" />
            <LinkItem href="https://github.com/Dannnington" icon={faGithub} data-tip="GitHub" />
        </div>
    );
};

export default LinksRow;

