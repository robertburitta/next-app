import { useEffect, useState } from 'react';
import { ref, get, update, onValue } from 'firebase/database';
import { db } from '../config/firebase';
import { User, UserStatus } from '../types/User';
import { ResultHandler } from '../types/ResultHandler';

export const useUsers = ({ onSuccess, onError }: ResultHandler<string>) => {
	const [users, setUsers] = useState<User[]>([]);

	const getUsers = async () => {
		try {
			const dbRef = ref(db, 'users/');
			const usersArr: User[] = [];
			const snapshot = await get(dbRef);

			snapshot.forEach((user) => {
				usersArr.push(user.val());
			});

			setUsers(usersArr);
		} catch (err) {
			console.error(err);
		}
	};

	const handleBanUser = async (user: User) => {
		try {
			const dbRef = ref(db, 'users/' + user.id);

			await update(dbRef, { status: UserStatus.BANNED }).then(() => {
				onSuccess?.(`Banned user ${user.email}`);
				getUsers();
			});
		} catch (err) {
			onError?.(err as Error);
		}
	};

	const handleUnbanUser = async (user: User) => {
		try {
			const dbRef = ref(db, 'users/' + user.id);

			await update(dbRef, { status: UserStatus.USER }).then(() => {
				onSuccess?.(`Unbanned user ${user.email}`);
				getUsers();
			});
		} catch (err) {
			onError?.(err as Error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return { users, getUsers, handleBanUser, handleUnbanUser };
};