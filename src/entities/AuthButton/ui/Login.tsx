'use client';

import { Button } from '@/entities/Button';
import { useSession, signIn, signOut } from 'next-auth/react';

export const LoginButton = () => {
	const session = useSession();
	console.log(session);

	return (
		<div className='flex items-center flex-row-reverse gap-5'>
			{session?.data && (
				<Button as='a' href='/profile' label='Profile' accent />
			)}
			{session?.data ? (
				<Button
					as='a'
					href='#'
					onClick={() => signOut({ callbackUrl: '/' })}
					label='Sign out'
				/>
			) : (
				<div className='flex items-center flex-row-reverse gap-5'>
					<Button as='a' href='#' label='Start for free' accent />
					<Button
						as='a'
						href='/api/auth/signin'
						onClick={() => signIn()}
						label='Login'
					/>
				</div>
			)}
		</div>
	);
};
