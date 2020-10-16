import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: ['x','y','z']
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

const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange, onChangeOption
    onChangeOption && onChangeOption(e.currentTarget.value)
}

    const mappedOptions: any[] = options ? options?.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input
                type={"radio"}
                name={name}
                checked={o === value}
                onChange={onChangeCallback}
                value={o}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : [];
debugger
    return (

        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
