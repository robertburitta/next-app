import React from 'react';
import { PageWithLayout } from "../types/PageWithLayout";
import { getBaseLayout } from "../layout/BaseLayout";
import { useMessages } from "../hooks/useMessages";

const Chat: PageWithLayout = () => {
	const { rooms: { handleCreateRoom }, messages: { handleSendMessage, register, setValue } } = useMessages();

	return (
		<div>Chat</div>
	);
};

Chat.getLayout = getBaseLayout;

export default Chat;

// getStaticProps getServerSideProps
// useSWR