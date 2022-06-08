import { MessageSchemaType } from '../hooks/useMessages';

interface MessageType extends MessageSchemaType {
	id: string;
	timestamp: number;
}

export type { MessageType };