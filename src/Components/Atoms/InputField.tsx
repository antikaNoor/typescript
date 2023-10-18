import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

type InputFieldProps = {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    name: string;
    label: string;
};

const InputField: React.FC<InputFieldProps> = ({ type, value, onChange, placeholder, name, label }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <label>{label}</label>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                type={showPassword ? 'text' : type}
                autoComplete="off"
            ></input>
            <span>
                <AiFillEye />
            </span>
        </>
    )
}

export default InputField;
