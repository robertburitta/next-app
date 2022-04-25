import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { auth, db } from '../config/firebase';
import { ref, set, push } from 'firebase/database';
import { ResultHandler } from '../types/ResultHandler';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// interface Response<T> {
// 	page: number;
// 	version: string;
// 	data: T;
// }

const SignUpSchema = zod.object({
	firstName: zod.string().nonempty(),
	lastName: zod.string().nonempty(),
	email: zod.string().email().nonempty(),
	password: zod.string().min(6).max(15).nonempty(),
	confirm: zod.string().min(6).max(15).nonempty()
}).refine((data) => data.password === data.confirm, {
	message: "Passwords don't match",
	path: ['confirm']
});

type SignUpData = zod.infer<typeof SignUpSchema>;

export const useSignUp = ({ onSuccess, onError }: ResultHandler<any>) => {
	const [isPending, setIsPending] = useState(false);
	const { handleSubmit, ...form } = useForm<SignUpData>({ resolver: zodResolver(SignUpSchema) });

	const handleSignUp = async ({ firstName, lastName, email, password, confirm }: SignUpData) => {
		setIsPending(true);

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);

			push(ref(db, 'users'), {
				firstName,
				lastName,
				email
			});

			onSuccess?.('Zarejestrowano');
			setIsPending(false);
		} catch (err) {
			onError?.(err as Error);
			setIsPending(false);
		}
	};

	return {
		isPending,
		form: {
			handleSignUp: handleSubmit(handleSignUp), ...form
		}
	};
};