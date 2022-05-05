import React, { InputHTMLAttributes } from 'react';
import { inputStyle, labelStyle, errorStyle } from './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	ref: string;
	error?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error, ...props }, ref) => {
	const { name, placeholder } = props;
	console.log(error);

	return (
		<label htmlFor={name} className={labelStyle}>
			{placeholder}
			<input id={name} className={inputStyle} {...props} ref={ref} />
			<span className={errorStyle}>{error}</span>
		</label>
	);
};

const FormInput = React.forwardRef(Input);

export default FormInput;