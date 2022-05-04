import React from 'react';
import { useSignUp } from '../hooks/useSignUp';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { PageWithLayout } from '../types/PageWithLayout';
import { getAuthLayout } from '../layout/AuthLayout';

import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../components/Button';

const SignUpPage: PageWithLayout = () => {
	const { isPending, form: { register, handleSignUp, formState: { errors } } } = useSignUp({
		onSuccess: () => {
			toast.success('Successfully signed up!');
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

				<Button>{isPending ? 'loading..' : 'submit'}</Button>
			</form>
			<Link href="/signin">Already have account? Sing In</Link>
		</React.Fragment>
	);
};

SignUpPage.getLayout = getAuthLayout;

export default SignUpPage;