'use client';

import { Button } from '@/entities/Button';
import { useSession, signIn, signOut } from 'next-auth/react';

export const LoginButton = () => {
	const { data: session } = useSession();

	if (session?.user) {
		return (
			<div className='flex items-center flex-row-reverse gap-6'>
				<Button as='a' href='/profile' label='Profile' accent />
				<Button
					as='a'
					href='/'
					onClick={() => signOut({ callbackUrl: '/' })}
					label='Sign out'
				/>
			</div>
		);
	}

	return (
		<Button
			onClick={() => signIn}
			as='a'
			href='/api/auth/signin'
			label='Start for free'
		/>
	);
};
