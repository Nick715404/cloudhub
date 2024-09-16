import { TNavLinks } from '@/shared/constants';
import { NavigationItem } from './NavigationItem';

type NavigationProps = { links: TNavLinks };

export const Navigation = ({ links }: NavigationProps) => {
	return (
		<nav className='lg:hidden'>
			<ul className='flex gap-[10px]'>
				{links.map(item => (
					<NavigationItem link={item} key={item.id} />
				))}
			</ul>
		</nav>
	);
};
