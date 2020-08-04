import React from "react";
import Message from "./Message";

 const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

export type MessageType = {
<<<<<<< HEAD
    avatar: string
    name:string
    message:string
    time:string
}

function HW1() {
=======
     avatar: string
     name:string
     message:string
     time:string
 }


 function HW1() {
>>>>>>> 9317b43f977d42f89611d2c77368e3d2677e213c
    return (
        <div>
            <hr/>
            home works 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*/!*<AlternativeMessage/>*!/*/}
            <hr/>
        </div>
    );
}

export default HW1;
