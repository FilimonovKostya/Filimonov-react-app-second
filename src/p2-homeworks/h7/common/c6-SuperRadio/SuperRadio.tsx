import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import {Radio} from "@material-ui/core";


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(event.currentTarget.value)
    }

    const mappedOptions: any[] = options ? options?.map((o, i) => {
        return (
            (
                <label key={name + "-" + i}>
                    <Radio
                        checked={o === value}
                        onChange={onChangeCallback}
                        value={o}
                        name={name}
                    />
                    {o}
                </label>
            )
        )
    }) : [];

    return <>
        {mappedOptions}
    </>

}

export default SuperRadio;
