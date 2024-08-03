import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
	return (
		<Link href='/' className='group'>
			<Image
				width={105}
				height={25}
				src='/svg/logo.svg'
				priority
				alt='Logo CloudHub'
				className='group-hover:scale-105 transition-all duration-75'
			/>
		</Link>
	);
};
