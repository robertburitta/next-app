import React, { useState } from 'react';
import { useMessages } from '../../hooks/useMessages';
import * as Accordion from '@radix-ui/react-accordion';
import * as styles from './RoomCreate.css';
import FormInput from '../Input';
import { Button } from '../Button';

export const RoomCreate = () => {
	const { rooms: { handleCreateRoom }, } = useMessages();
	const [roomName, setRoomName] = useState('');

	return (
		<Accordion.Root className={styles.root} type='single' collapsible>
			<Accordion.Item value='createRoom'>
				<Accordion.Trigger className={`roomCreate ${styles.trigger}`}>Create new room</Accordion.Trigger>
				<Accordion.Content className={styles.content}>
					<FormInput value={roomName} placeholder='Room name' onChange={(e) => setRoomName(e.target.value)} />
					<Button variant='blue' onClick={() => handleCreateRoom(roomName)}>add room</Button>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	);
};
