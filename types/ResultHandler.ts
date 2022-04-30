export interface ResultHandler<T> {
	onSuccess?: (data?: T) => void;
	onError?: (error: Error) => void;
}