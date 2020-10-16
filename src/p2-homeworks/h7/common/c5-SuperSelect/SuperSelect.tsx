import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: ['x','y','z']
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    // @ts-ignore
    const mappedOptions = options?.map((f, index) => <option key={index}  value={f}>{f}</option>); // map options
    // with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback}  {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
