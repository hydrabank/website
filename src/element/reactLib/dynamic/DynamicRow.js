import "../../css/Links.css";
import DynamicItem from "./DynamicItem";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function DynamicRow() {
    return (
        <div className="DynamicRow">
            <DynamicItem type="music" icon={faSpotify} style={{ color: "#1DD05D" }} />
            <DynamicItem type="development" icon={faCodeBranch} style={{ color: "#22A7F2" }} />
        </div>
    );
};

export default DynamicRow;

