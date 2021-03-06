import React from 'react';
import { useSignUp } from '../hooks/useSignUp';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { PageWithLayout } from '../types/PageWithLayout';
import { getAuthLayout } from '../layout/AuthLayout';
import { Button } from '../components/Button';
import FormInput from '../components/Input';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/userSlice';
import { useRouter } from 'next/router';
import { Routes } from '../router/Routes';

const SignUpPage: PageWithLayout = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { isPending, form: { register, handleSignUp, formState: { errors } } } = useSignUp({
		onSuccess: (user) => {
			router.push('/');
			toast.success('Successfully signed up!');

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
			<h1>Sign Up</h1>
			<form onSubmit={handleSignUp}>
				<FormInput placeholder="First name" {...register('firstName')} error={errors.firstName?.message} />
				<FormInput placeholder="Last name" {...register('lastName')} error={errors.lastName?.message} />
				<FormInput type='email' placeholder="Email" {...register('email')} error={errors.email?.message} />
				<FormInput type='password' placeholder="Password" {...register('password')} error={errors.password?.message} />
				<FormInput type='password' placeholder="Confirm password" {...register('confirm')} error={errors.confirm?.message} />
				<Button isPending={isPending}>Submit</Button>
			</form>
			<Link href={Routes.SIGNIN}>Already have account? Sing In</Link>
		</React.Fragment>
	);
};

SignUpPage.getLayout = getAuthLayout;

export default SignUpPage;