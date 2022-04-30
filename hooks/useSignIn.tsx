import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { auth } from '../config/firebase';
import { ResultHandler } from '../types/ResultHandler';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SignInSchema = zod.object({
	email: zod.string().email().nonempty(),
	password: zod.string().min(6).max(15).nonempty()
});

type SignInData = zod.infer<typeof SignInSchema>;

export const useSignIn = ({ onSuccess, onError }: ResultHandler<any>) => {
	const [isPending, setIsPending] = useState(false);
	const { handleSubmit, ...form } = useForm<SignInData>({ resolver: zodResolver(SignInSchema) });

	const handleSignIn = async ({ email, password }: SignInData) => {
		setIsPending(true);

		try {
			signInWithEmailAndPassword(auth, email, password);

			onSuccess?.();
			setIsPending(false);
		} catch (err) {
			onError?.(err as Error);
			setIsPending(false);
		}
	};

	return {
		isPending,
		form: {
			handleSignIn: handleSubmit(handleSignIn), ...form
		}
	};
};