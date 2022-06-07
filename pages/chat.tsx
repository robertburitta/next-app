import React from 'react';
import { PageWithLayout } from '../types/PageWithLayout';
import { getBaseLayout } from '../layout/BaseLayout';
import { RoomTable } from '../components/rooms/RoomTable';
import { RoomCreate } from '../components/rooms/RoomCreate';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Chat: PageWithLayout = () => {
	const user = useSelector((state: RootState) => state.user.user);

	return (
		<React.Fragment>
			{user.isAdmin && <RoomCreate />}
			<RoomTable />
		</React.Fragment>
	);
};

Chat.getLayout = getBaseLayout;

export default Chat;