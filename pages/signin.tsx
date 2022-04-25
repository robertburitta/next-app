import React from 'react';
import { useSignIn } from '../hooks/useSignIn';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';

import 'react-toastify/dist/ReactToastify.css';

const SignInPage = () => {
	const router = useRouter();

	const { isPending, form: { register, handleSignIn, formState: { errors } } } = useSignIn({
		onSuccess: () => {
			router.push('/');
		},
		onError: (err) => {
			toast.error(`${err}`);
		}
	});

	return (
		<React.Fragment>
			<h1>Sign In</h1>
			<form onSubmit={handleSignIn}>
				Email: <input type='text' {...register('email')} />
				{errors.email?.message}<br />

				Password: <input type='text' {...register('password')} />
				{errors.password?.message}<br />

				<button>{isPending ? 'loading..' : 'submit'}</button>
				<ToastContainer />
			</form>
			<Link href="/signup">Dont have an account? Sing Up</Link>
		</React.Fragment>
	);
};

export default SignInPage;