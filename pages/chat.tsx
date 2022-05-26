import React from 'react';
import { PageWithLayout } from "../types/PageWithLayout";
import { getBaseLayout } from "../layout/BaseLayout";
import { useMessages } from "../hooks/useMessages";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const Chat: PageWithLayout = () => {
	const rooms = useSelector((state: RootState) => state.messages.rooms);

	const { rooms: { handleCreateRoom }, messages: { handleSendMessage, register, setValue } } = useMessages();
	console.log(rooms);
	return (<>

		<button onClick={handleCreateRoom}>add room</button>

		<form onSubmit={handleSendMessage}>
			<input {...register('author')} />
			<input type="text" {...register('text')} />
			<input {...register('roomId')} />
			<input type="submit" />
		</form>

		<div>{rooms?.map(room => <div key={room.id}>{room.id} <ul>
			{room.messages?.map((message, i) => <li key={i}>{message?.text}</li>)}
		</ul></div>)}</div>


	</>

	);
};

Chat.getLayout = getBaseLayout;

export default Chat;

// getStaticProps getServerSideProps
// useSWR