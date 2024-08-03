'use client';

import { useEffect, useState } from 'react';

export const Switcher = () => {
	const [dark, setDark] = useState<boolean>(true);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') setDark(true);
	}, []);

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [dark]);

	return (
		<button onClick={() => setDark(!dark)}>{dark ? 'Light' : 'Dark'}</button>
	);
};
