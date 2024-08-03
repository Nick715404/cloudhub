'use client';

import { SessionProvider } from 'next-auth/react';

type Props = Readonly<{ children: React.ReactNode }>;

export const AuthProvider = ({ children }: Props) => {
	return <SessionProvider>{children}</SessionProvider>;
};
