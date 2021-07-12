import './css/Core.css';
import ProfilePhoto from "./reactLib/dynamic/Avatar";
import LinksRow from "./reactLib/links/Row";
import DynamicRow from "./reactLib/dynamic/DynamicRow";
function Core() {
 return (
   <div className="Core">
    <ProfilePhoto />
    <h2 className="Name">Daniel Hyders</h2>
    <h3 className="Tagline">
      Software engineer,
      web & UI designer,
      systems administrator
    </h3>
    <LinksRow />
    <DynamicRow />
   </div>
 );
}

export default Core;
