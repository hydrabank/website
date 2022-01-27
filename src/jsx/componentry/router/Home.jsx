import { Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLastfm } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div>
            <div className="PageBannerPhoto" style={{ zIndex: "0" }}>
                <video src="/watercolour.mp4" autoPlay={true} muted={true} loop={true} style={{ zIndex: "-1", position: "absolute" }} className="hidden sm:block" />
                <h1 className="PageBanner" style={{ zIndex: "1" }}>Home</h1>
            </div>
            <div className="flex gap-y-6 flex-col py-6 h-screen items-center bg-gray-900">
                <img src="/icon.png" alt="Danny" className="w-64 h-64 mt-12 bg-gray-800" style={{ borderRadius: "50%" }} />
                <h1 className="Header">Danny</h1>
                <h2 className="Tagline">Software engineer, cybersecurity analyst</h2>
                <div className="flex gap-x-6">
                    <Tooltip title="GitHub" placement="top">
                        <a aria target="_blank" rel="noreferrer noopener" href="https://github.com/Dannnington">
                                <FontAwesomeIcon size="2x" icon={faGithub} color="white" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Discord" placement="top">
                        <a aria target="_blank" rel="noreferrer noopener" href="https://discords.com/bio/p/dannington">
                            <FontAwesomeIcon size="2x" icon={faDiscord} color="white" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Email" placement="top">
                        <a aria target="_blank" rel="noreferrer noopener" href="mailto:hello@danny.works">
                                <FontAwesomeIcon size="2x" icon={faMailBulk} color="white" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Last.fm" placement="top">
                        <a aria target="_blank" rel="noreferrer noopener" href="https://last.fm/user/Dannnington">
                                <FontAwesomeIcon size="2x" icon={faLastfm} color="white" />
                        </a>
                    </Tooltip>
                </div>
            </div> 
        </div>
    );
};