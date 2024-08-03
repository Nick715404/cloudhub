import { Logo } from '@/entities/Logo';
import Image from 'next/image';

type MenuProps = {
	closeCallback: () => void;
	state: boolean;
};

export const Menu = ({ closeCallback, state }: MenuProps) => {
	return (
		<div
			id='mobile-menu'
			className={`absolute top-0 left-0 w-full h-dvh bg-white ${
				state ? 'visible' : 'hidden'
			}`}
		>
			<div className='p-[11px]'>
				<div className='flex items-center justify-between'>
					<Logo />
					<div id='close-menu' onClick={closeCallback}>
						<Image
							width={30}
							height={30}
							src='/svg/close.svg'
							alt='Close mobile menu'
						/>
					</div>
				</div>
				<div className=''>links</div>
				<div className=''>btn</div>
				<div className=''>login</div>
			</div>
		</div>
	);
};
