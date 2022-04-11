import { Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLastfm } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ConfigurationFetch from "../../../lib/ConfigurationFetch.js";

export default function Home() {
    const [spotifyString, setSpotifyString] = useState("Not listening");
    const [discordString, setDiscordString] = useState("Offline");
    const [lastFmStyle, setLastFmStyle] = useState({ color: "white" });
    const [discordStyle, setDiscordStyle] = useState({ color: "white" });

    useEffect(() => {
        const executableAPIFunction = async () => {
            const configuration = await ConfigurationFetch();
            fetch(configuration.api.basePath + "/internal/danny/spotify").then(response => response.json()).then(data => {
                setSpotifyString(data.response.listening ? <b><b className="font-thin">Listening to</b> {data.response.title} <b className="font-thin">by</b> {data.response.artist}</b> : <b className="font-thin"><b>Not</b> listening</b>);
                setLastFmStyle(data.response.listening ? { color: "D51007" } : { color: "white" });
            }).catch(error => {
                console.error("Error fetching Spotify data:", error);
            });

            fetch(configuration.api.basePath + "/internal/danny/status").then(response => response.json()).then(data => {
                if (data.response.general.type === "dnd") {
                    setDiscordString("on do not disturb");
                    setDiscordStyle({ color: "ED4245" });
                } else if (data.response.general.type === "idle") {
                    setDiscordString("idle");
                    setDiscordStyle({ color: "FEE75C" });
                } else if (data.response.general.type === "online") {
                    setDiscordString("online");
                    setDiscordStyle({ color: "57F287" });
                } else {
                    setDiscordString("offline");
                    setDiscordStyle({ color: "white" });
                };
            }).catch(error => {
                console.error("Error fetching status data:", error);
            });
        };
        const interval = setInterval(executableAPIFunction, 5000);
        executableAPIFunction();

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="PageBannerPhoto" style={{ zIndex: "0" }}>
                <video src="/assets/mp4/watercolour.mp4" autoPlay={true} muted={true} loop={true} style={{ zIndex: "-1", position: "absolute" }} className="hidden sm:block" />
                <h1 className="PageBanner" style={{ zIndex: "1" }}>Home</h1>
            </div>
            <div className="flex gap-y-6 flex-col py-6 h-screen items-center bg-gray-900">
                <img src="/assets/img/icon2.gif" alt="My icon" className="w-64 h-64 mt-12 bg-gray-800" style={{ borderRadius: "50%" }} />
                <h1 className="Header">Danny</h1>
                <h2 className="Tagline">Cybersecurity analyst, software engineer, communications</h2>
                <div className="flex gap-x-6">
                    <Tooltip title={<span className="font-BreezeText font-thin text-sm">Email</span>} placement="top">
                        <a target="_blank" rel="noreferrer noopener" href="mailto:hello@danny.works">
                            <FontAwesomeIcon size="2x" icon={faMailBulk} color="white" />
                        </a>
                    </Tooltip>
                    <Tooltip title={<span className="font-BreezeText font-thin text-sm">GitHub</span>} placement="top">
                        <a target="_blank" rel="noreferrer noopener" href="https://github.com/Dannnington">
                            <FontAwesomeIcon size="2x" icon={faGithub} color="white" />
                        </a>
                    </Tooltip>
                    <Tooltip title={<span className="font-BreezeText font-thin text-sm">Danny is <b>{discordString}</b></span>} placement="top">
                        <a target="_blank" rel="noreferrer noopener" href="https://discord.com/users/181944866987704320">
                            <FontAwesomeIcon size="2x" icon={faDiscord} style={discordStyle} />
                        </a>
                    </Tooltip>
                    <Tooltip title={<span className="font-BreezeText font-thin text-sm">{spotifyString}</span>} placement="top">
                        <a target="_blank" rel="noreferrer noopener" href="https://last.fm/user/Dannnington">
                            <FontAwesomeIcon size="2x" icon={faLastfm} style={lastFmStyle} />
                        </a>
                    </Tooltip>
                </div>
            </div> 
        </div>
    );
};