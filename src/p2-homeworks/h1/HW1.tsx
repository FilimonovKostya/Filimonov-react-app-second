import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Filimonov Kostya",
    message: "Power in props",
    time: "14:08",
};

export type MessageType = {

    avatar: string
    name: string
    message: string
    time: string
}


export function HW1() {

    const fix = {
        padding:'10px 0'
    }

    return (
        <div style={fix}>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*/!*<AlternativeMessage/>*!/*/}

        </div>
    );
}

export default HW1;
