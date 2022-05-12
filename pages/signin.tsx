import React from 'react';
import { useSignIn } from '../hooks/useSignIn';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Button } from '../components/Button';
import { PageWithLayout } from '../types/PageWithLayout';
import { getAuthLayout } from '../layout/AuthLayout';
import FormInput from '../components/Input';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/userSlice';

const SignInPage: PageWithLayout = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const { isPending, form: { register, handleSignIn, formState: { errors } } } = useSignIn({
		onSuccess: (user) => {
			router.push('/');
			toast.success(`Welcome ${user?.firstName}`);

			if (user) {
				dispatch(userActions.loginUser(user));
			}
		},
		onError: (err) => {
			toast.error(`${err}`);
		}
	});

	return (
		<React.Fragment>
			<h1>Sign In</h1>
			<form onSubmit={handleSignIn} style={{ width: '100%' }}>
				<FormInput type='email' placeholder="Email" {...register('email')} error={errors.email?.message} />
				<FormInput type='password' placeholder="Password" {...register('password')} error={errors.password?.message} />
				<Button isPending={isPending}>Submit</Button>
			</form>
			<Link href="/signup">Dont have an account? Sing Up</Link>
		</React.Fragment>
	);
};

SignInPage.getLayout = getAuthLayout;

export default SignInPage;