import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(1);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    console.log(timerId)
    console.log(date)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            console.log('значение id -' + id)
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }




    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
       setShow(false)
    };


    const stringTime = "Time"; // fix with date
    const stringDate = "Date"; // fix with date



    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime} : {date?.toLocaleTimeString()}
            </div>

            {show && (
                <div>
                    {stringDate} : {date?.toLocaleDateString()}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
