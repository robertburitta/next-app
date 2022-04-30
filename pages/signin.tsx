import React from 'react';
import { useSignIn } from '../hooks/useSignIn';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../components/Button';
import { PageWithLayout } from "../types/PageWithLayout";
import { getBaseLayout } from "../layout/BaseLayout";
const SignInPage: PageWithLayout = () => {
	const router = useRouter();

	const { isPending, form: { register, handleSignIn, formState: { errors } } } = useSignIn({
		onSuccess: (user) => {
			toast(`Witaj ${user?.firstName}`, {
				autoClose: 5000,
				onClose: () => {
					router.push('/');
				}
			});
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

				<Button color="white" />
				<button>{isPending ? 'loading..' : 'submit'}</button>
			</form>
			<Link href="/signup">Dont have an account? Sing Up</Link>
		</React.Fragment>
	);
};

SignInPage.getLayout = getBaseLayout;

export default SignInPage;