import { TLink } from '@/shared/constants';
import Link from 'next/link';

type NavigationItemProps = { link: TLink };

export const NavigationItem = ({ link }: NavigationItemProps) => {
	return (
		<li>
			<Link
				className='relative px-[10px] py-[10px] block transition-all hover:text-orange-500 after:absolute after:w-full after:h-1 after:bg-orange-500 after:bottom-0 after:left-0 after:opacity-0 after:transition-all hover:after:opacity-100'
				href={link.path}
			>
				{link.label}
			</Link>
		</li>
	);
};
