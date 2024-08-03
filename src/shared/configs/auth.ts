import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const googleProvider = GoogleProvider({
	clientId: process.env.NEXTGOOGLE_CLIENT_ID!,
	clientSecret: process.env.NEXTGOOGLE_SECRET_ID!,
});

export const authConfig: AuthOptions = {
	providers: [googleProvider],
};
