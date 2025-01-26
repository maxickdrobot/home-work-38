import { ChangeEvent } from "react";

interface InputsProps {
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputsProps) => {
    const { placeholder, onChange } = props;

    return (
        <input type="text" placeholder={placeholder} onChange={onChange}/>
    );
}

export default Input;