import { navigationLinks } from '@/shared/constants';
import { LoginButton, Logo, Navigation } from '@/entities';
import { MobileMenu } from '@/entities/MobileMenu';

export const Header = () => {
	return (
		<header className='fixed top-0 left-0 w-full z-20 bg-white py-[12px] lg:py-[11px]'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<div className='flex gap-[70px]'>
						<Logo />
						<Navigation links={navigationLinks} />
					</div>
					<div className='lg:hidden'>
						<LoginButton />
					</div>
					<div className='hidden lg:block'>
						<MobileMenu />
					</div>
				</div>
			</div>
		</header>
	);
};
