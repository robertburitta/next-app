export enum UserStatus {
	USER = 'USER',
	BANNED = 'BANNED',
}

export interface User {
	firstName: string;
	lastName: string;
	email: string;
	isAdmin: boolean;
	status: UserStatus;
	id: string;
}