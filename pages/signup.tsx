import React from 'react'
import { useSignUp } from "../hooks/useSignUp"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
const SignUpPage = () => {
	const router = useRouter()
	console.log(router)
	const { isPending, form: { register, handleSignUp, formState: { errors } } } = useSignUp({
		onSuccess: (user) => {
			toast.success(user)
			router.push("/")
		},
		onError: (err) => {
			toast.error(`${err}`)
		}
	})
	return (
		<form onSubmit={handleSignUp}>email<input type="text" {...register('email')} />{errors.email?.message}
			password <input type="text" {...register('password')} />{errors.password?.message}
			<button>{isPending ? 'loading..' : 'submit'}</button>
			<ToastContainer />
		</form>
	)
}

export default SignUpPage