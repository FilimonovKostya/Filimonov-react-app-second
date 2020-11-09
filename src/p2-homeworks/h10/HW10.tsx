import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {CircularProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitialStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {

    const loading = useSelector<AppStoreType, InitialStateType>(state => state.loading);

    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1000)
    };

    return (
        <div>
            <hr/>

            {loading
                ? (
                    <CircularProgress color="secondary"/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>

                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
