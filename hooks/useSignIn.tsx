import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { ResultHandler } from '../types/ResultHandler';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '../types/User';
import { auth, db } from '../config/firebase';
import { ref, get, child } from 'firebase/database';


const SignInSchema = zod.object({
	email: zod.string().email().nonempty(),
	password: zod.string().min(6).max(15).nonempty()
});

type SignInData = zod.infer<typeof SignInSchema>;

export const useSignIn = ({ onSuccess, onError }: ResultHandler<User>) => {
	const [isPending, setIsPending] = useState(false);
	const { handleSubmit, ...form } = useForm<SignInData>({ resolver: zodResolver(SignInSchema) });

	const handleSignIn = async ({ email, password }: SignInData) => {
		setIsPending(true);

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);

			const snapshot = await get(child(ref(db), `users/${userCredential.user.uid}`));

			onSuccess?.(snapshot.val());
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