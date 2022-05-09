import { useEffect, useState, } from 'react';
import { ref, get, update } from 'firebase/database';
import { db } from '../config/firebase';
import { User, UserStatus } from '../types/User';

export const useUsers = () => {
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

	const handleBanUser = async (id: string) => {
		try {
			const dbRef = ref(db, 'users/' + id);
			await update(dbRef, { status: UserStatus.BANNED });
		} catch (err) {
			console.error(err);
		}
	};

	const handleUnbanUser = async (id: string) => {
		try {
			const dbRef = ref(db, 'users/' + id);
			await update(dbRef, { status: UserStatus.USER });
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return { users, getUsers, handleBanUser, handleUnbanUser };
};