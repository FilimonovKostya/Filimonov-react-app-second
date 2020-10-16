import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import {FormControl, InputLabel, Select} from "@material-ui/core";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        value,// их не было изначально ,  я просто их кинул,так как чекбоксы не отдавали свое состояние в селект ,а селект отдавал
        ...restProps
    }
) => {

    const mappedOptions = options?.map((f, index) =>   <option key={index} selected={f} value={f}> {f} </option>); // map options
    // with key

    const onChangeCallback = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(event.currentTarget.value)
    }

    return (


            <FormControl variant="outlined" >
                <InputLabel htmlFor="outlined-age-native-simple">X Y Z</InputLabel>
                <Select
                    native
                    onChange={onChangeCallback}
                    label="X Y Z"
                    value={value}

                >
                    {mappedOptions}
                </Select>
            </FormControl>


    );
}

export default SuperSelect;
