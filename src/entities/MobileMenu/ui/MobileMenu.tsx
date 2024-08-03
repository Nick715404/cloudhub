'use client';

import Image from 'next/image';
import { Menu } from './Menu';
import { useMenu } from '../model';

export const MobileMenu = () => {
	const { handleClose, handleOpen, open } = useMenu();

	return (
		<>
			<div
				onClick={handleOpen}
				id='burger-icon'
				className='outline-2'
				tabIndex={2}
			>
				<Image width={24} height={24} src='/svg/burger.svg' alt='Burger menu' />
			</div>
			<Menu state={open} closeCallback={handleClose} />
		</>
	);
};
