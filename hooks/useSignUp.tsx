import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'react-hook-form';
import { auth } from "../config/firebase"
import { ResultHandler } from '../types/ResultHandler'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// interface Response<T> {
// 	page: number;
// 	version: string;
// 	data: T
// }

const SignUpSchema = zod.object({
	email: zod.string().email().nonempty(),
	password: zod.string().min(6).max(15).nonempty()
})

type SignUpData = zod.infer<typeof SignUpSchema>











export const useSignUp = ({ onSuccess, onError }: ResultHandler<any>) => {
	const [isPending, setIsPending] = useState(false)
	const { handleSubmit, ...form } = useForm<SignUpData>({ resolver: zodResolver(SignUpSchema) })




	const handleSignUp = async ({ email, password }: SignUpData) => {
		setIsPending(true)
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)

			onSuccess?.("zarejestrowano")
			setIsPending(false)
		} catch (err) {
			console.error(err)
			setIsPending(false)
			onError?.(err as Error)
		}
	}


	return { isPending, form: { handleSignUp: handleSubmit(handleSignUp), ...form } }
}
