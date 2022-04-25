import React from 'react';
import { useSignUp } from '../hooks/useSignUp';
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link';

import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
	const { isPending, form: { register, handleSignUp, formState: { errors } } } = useSignUp({
		onSuccess: (user) => {
			toast.success(user);
		},
		onError: (err) => {
			toast.error(`${err}`);
		}
	});

	return (
		<React.Fragment>
			<h1>Sign Up</h1>
			<form onSubmit={handleSignUp}>
				First name: <input type='text' {...register('firstName')} />
				{errors.firstName?.message}<br />

				Last name: <input type='text' {...register('lastName')} />
				{errors.lastName?.message}<br />

				Email: <input type='text' {...register('email')} />
				{errors.email?.message}<br />

				Password: <input type='text' {...register('password')} />
				{errors.password?.message}<br />

				Confirm password: <input type='text' {...register('confirm')} />
				{errors.confirm?.message}<br />

				<button>{isPending ? 'loading..' : 'submit'}</button>
				<ToastContainer />
			</form>
			<Link href="/signin">Already have account? Sing In</Link>
		</React.Fragment>
	);
};

export default SignUpPage;