import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number] | number) => void
    value: [number, number]

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, value}) => {

    const onChangeHandler = (event: ChangeEvent<{}>, value:(number[] | number)) => {
       onChangeRange && onChangeRange(value as number)
    }

    return (
        <Slider
            value={value}
            onChange={ onChangeHandler }
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
        />
    );
}

export default SuperDoubleRange;
