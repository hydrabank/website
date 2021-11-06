import { useLocation } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomeButton() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    console.log(location)
    if (isHome) {
        return (
            <div class="HomeButton"></div>
        );
    }
    console.log("N")
    return (
        <div class="HomeButton" style={{ display: "block", position: "fixed", bottom: 25, left: 25 }}>
            <div className="LinksMember" style={{ display: "block", position: "sticky", top: 0, left: 0 }}>
                <a href="/" style={{color: "var(--white)", display: "block", position: "sticky", top: 0, left: 0}} data-tip="Home">
                    <FontAwesomeIcon size="2x" icon={faHome} style={{ display: "block", position: "sticky", top: 0, left: 0 }} />
                </a>
            </div>
        </div>
    );
};

export default HomeButton;