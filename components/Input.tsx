import React, { InputHTMLAttributes } from 'react';
import { inputStyle, roundedInputStyle, labelStyle, errorStyle } from './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	ref: string;
	error?: string;
	rounded?: boolean;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error, rounded, ...props }, ref) => {
	const { name, placeholder } = props;

	return (
		<label htmlFor={name} className={labelStyle}>
			<input id={name} className={`${inputStyle} ${rounded ? roundedInputStyle : ''}`} {...props} ref={ref} />
			<span className={errorStyle}>{error}</span>
		</label>
	);
};

const FormInput = React.forwardRef(Input);

export default FormInput;