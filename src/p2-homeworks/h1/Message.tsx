import React from "react";
import {MessageType} from "./HW1";
import s from './Message.module.css'

function Message(props: MessageType) {
    return (

        <div className={s.appWrapper}>
            <div><img className={s.appWrapper + '' + s.img} src={props.avatar} alt=""/></div>
            <div><p className={s.name}>{props.name}</p></div>
            <div><p>{props.message}</p></div>
            <div><p className={s.time}>{props.time}</p></div>
        </div>

    );
}

export default Message;
