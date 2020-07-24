import React from "react";
import {MessageType} from "./HW1";
import s from './Message.module.css'

function Message(props: MessageType) {
    return (
        <div>
            <div className={s.circle}>
                <img src={props.avatar} alt="avatar"/>
                <div className={s.envelope}>
                   <p  >{props.name}</p>
                    <p>{props.message}</p>
                    <div className={s.time}>
                        <span>{props.time}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Message;
