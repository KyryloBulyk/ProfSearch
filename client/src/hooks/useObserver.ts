import { useEffect, useRef } from 'react';

type UseObserverProps = {
	ref: React.RefObject<HTMLElement>;
	canLoad: boolean;
	isLoading: boolean;
	callback: () => void;
};

export const useObserver = ({ ref, canLoad, isLoading, callback }: UseObserverProps) => {
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();

		const cb: IntersectionObserverCallback = (entries) => {
			if (entries[0].isIntersecting && canLoad) {
				callback();
			}
		};

		observer.current = new IntersectionObserver(cb);
		if (ref.current) {
			observer.current.observe(ref.current);
		}

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [canLoad, isLoading, callback, ref]);
};
