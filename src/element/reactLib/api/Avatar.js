import React, { useEffect, useState } from "react";
import "../../css/Avatar.css";

function ApiAvatar() {
    const [avatarURL, setAvatarURL] = useState("https://cdn.bean.codes/a/pfp/kylar2.png");
    const [hex, setHex] = useState("747F8D");
    const [status, setStatus] = useState("Offline on Discord");
    useEffect(function () {
        getStatus();
        getAvatar();
    }, []);

    async function getStatus() {
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

    async function getAvatar() {
        let err = false;
        const request = await fetch("https://api.bean.codes/internal/danny/avatar").then(r => r.json()).catch(e => {
            err = true;
        });
        if (err === true) return;

        setAvatarURL(request.response);
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