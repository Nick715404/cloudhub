'use client';

import { useEffect, useState } from 'react';

export const useMenu = () => {
	const [open, setOpen] = useState<boolean>(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		if (open) document.body.classList.add('overflow-hidden');

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [open]);

	return {
		open,
		handleClose,
		handleOpen,
	};
};
