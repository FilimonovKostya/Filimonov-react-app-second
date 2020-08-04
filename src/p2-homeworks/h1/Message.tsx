import React from "react";
import {MessageType} from "./HW1";
import s from './Message.module.css'

function Message(props: MessageType) {
    return (
<<<<<<< HEAD
        <div className={s.appWrapper}>
            <div><img className={s.appWrapper + '' + s.img} src={props.avatar} alt=""/></div>
            <div><p>{props.name}</p></div>
            <div><p>{props.message}</p></div>
            <div><p className={s.time}>{props.time}</p></div>
=======
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

>>>>>>> 9317b43f977d42f89611d2c77368e3d2677e213c
        </div>
    );
}

export default Message;
