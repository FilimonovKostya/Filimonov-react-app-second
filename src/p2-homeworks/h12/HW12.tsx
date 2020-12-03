import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some','yellow','orange', 'brown', 'smoke'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.some)
    const action = useDispatch()

    const onChangeCallback = (color:string) => {
        action(changeThemeC(color))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <SuperSelect title={'Colors'} options={themes} onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
