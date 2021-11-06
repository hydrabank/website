import React, { useEffect, useState } from "react";
import "../../css/Avatar.css";

let ColourBorder = false;
let EnableDiscordPulledAvatar = false;

function ApiAvatar() {
    const [avatarURL, setAvatarURL] = useState("https://0.gravatar.com/avatar/b13747e57ab1c3050d8f1b60468f9a61?size=512");
    const [hex, setHex] = useState("747F8D");
    const [status, setStatus] = useState("Offline on Discord");
    useEffect(function () {
        getStatus();
        getAvatar();
    }, []);

    // No longer used, however it's still here if you'd like to enable it otherwise.
    // Just toggle the ColourBorder boolean at the top of the file to enable it.
    async function getStatus() {
        if (ColourBorder === false) {
            setStatus(null);
            console.log("Colour border not enabled, returning..")
            return setHex("00000000");
        };
        let err = false;
        const request = await fetch("https://api.bean.codes/internal/danny/status").then(r => r.json()).catch(e => {
            err = true;
        });
        if (err === true) return;
        const value = request.response.general.colour.replace("#", "".trim()).trim();
        const stat = request.response.general.type;
        setHex(value);
        if (stat === "dnd") {
            setStatus("Do Not Disturb on Discord");
        } if (stat === "idle") {
            setStatus("Idling on Discord");
        } if (stat === "online") {
            setStatus("Online on Discord");
        } if (stat === "offline") {
            setStatus("Offline on Discord");
        };
    };

    // No longer used, however it's still here if you'd like to enable it otherwise.
    // Toggle the EnableDiscordPulledAvatar boolean at the top of the file to enable it.
    async function getAvatar() {
        if (EnableDiscordPulledAvatar === false) return console.log("Discord-sourced avatar not enabled, returning..");
        let err = false;
        const request = await fetch("https://api.bean.codes/internal/danny/avatar").then(r => r.json()).catch(e => {
            err = true;
        });
        if (err === true) return;

        return setAvatarURL(request.response);
    };
    return (
        <img
        src={avatarURL}
        alt="Profile"
        data-tip={status}
        style={{ borderColor: `#${hex}` }}
        className="avatar-9hCM8K"
        />
    );
};

export default ApiAvatar;