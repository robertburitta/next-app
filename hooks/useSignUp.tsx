import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { auth, db } from '../config/firebase';
import { ref, set } from 'firebase/database';
import { ResultHandler } from '../types/ResultHandler';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '../types/User';

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

export const useSignUp = ({ onSuccess, onError }: ResultHandler<User>) => {
	const [isPending, setIsPending] = useState(false);
	const { handleSubmit, ...form } = useForm<SignUpData>({ resolver: zodResolver(SignUpSchema) });

	const handleSignUp = async ({ firstName, lastName, email, password }: SignUpData) => {
		setIsPending(true);

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);

			set(ref(db, `users/${userCredential.user.uid}`), {
				firstName,
				lastName,
				email
			});

			const user = {
				firstName,
				lastName,
				email
			};

			onSuccess?.(user);
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