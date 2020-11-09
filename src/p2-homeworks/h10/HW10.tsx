import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {CircularProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch

    const loading = false;
    const valueBoolean = useSelector<AppStoreType, initStateType>(state=> state.loading)
    const dispatch = useDispatch()


    console.log(valueBoolean)

    const setLoading = () => {
        dispatch(loadingAC)
        // dispatch
        // setTimeout
        // console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        <CircularProgress color="secondary" />
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
