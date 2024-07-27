import { navigationLinks } from '@/shared/constants';
import { LoginButton, Logo, Navigation } from '@/entities';

export const Header = () => {
  return (
    <header className="my-[18px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex gap-[70px]">
            <Logo />
            <Navigation links={navigationLinks} />
          </div>
          <LoginButton />
        </div>
      </div>
    </header>
  )
}