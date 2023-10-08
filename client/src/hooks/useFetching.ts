import { useState } from 'react';

type CallbackFunction = () => Promise<void>;

export const useFetching = (callback: CallbackFunction) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetching = async () => {
		try {
			setIsLoading(true);
			await callback();
		} catch (error) {
			if (error instanceof Error) {
				setError(true);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return { fetching, isLoading, error };
};
