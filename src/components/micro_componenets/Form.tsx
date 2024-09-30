import React from "react";

interface InputFormProps {
    autoComplete?: string;
    customClass?: string;
    disabled?: boolean;
    id?: string;
    inputType?: string;
    maxLength?: number;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    placeholder?: string | undefined;
    required?: boolean;
    tailwindClass?: string;
    value?: string | number | undefined;
}

function InputForm({
                       autoComplete = '',
                       customClass = '',
                       disabled = false,
                       id = '',
                       inputType = 'text',
                       maxLength,
                       name = '',
                       onChange,
                       pattern = '',
                       placeholder = '',
                       required = false,
                       tailwindClass = 'h-9 w-[100%] border border-[#D1D5DC] focus:outline-none rounded p-2',
                       value
                   }: InputFormProps) {

    return (
        <div>
            <input
                type={inputType}
                id={id}
                className={customClass + ' ' + tailwindClass}
                placeholder={placeholder}
                required={required}
                value={value}
                disabled={disabled}
                autoComplete={autoComplete}
                maxLength={maxLength}
                name={name}
                onChange={onChange}
                pattern={pattern}
            />
        </div>
    )
}

export {InputForm}