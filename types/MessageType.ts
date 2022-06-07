import { MessageSchemaType } from '../hooks/useMessages';

interface MessageType extends MessageSchemaType {
	timestamp: number;
}

export type { MessageType };