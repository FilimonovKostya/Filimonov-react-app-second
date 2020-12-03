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

    const mappedOptions = options?.map((f, index) =>   <option key={index} selected={f} value={f}> {f} </option>);
    // with key

    const onChangeCallback = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        // onChange, onChangeOption
        debugger
        onChangeOption && onChangeOption(event.currentTarget.value)
    }

    return (


            <FormControl variant="outlined" >
                <InputLabel htmlFor="outlined-age-native-simple">{restProps.title}</InputLabel>
                <Select
                    native
                    onChange={onChangeCallback}

                    value={value}

                >
                    {mappedOptions}
                </Select>
            </FormControl>


    );
}

export default SuperSelect;
