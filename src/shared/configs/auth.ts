import type { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { users } from '../constants';

const googleProvider = GoogleProvider({
	clientId: process.env.NEXTGOOGLE_CLIENT_ID!,
	clientSecret: process.env.NEXTGOOGLE_SECRET_ID!,
});

const credentials = Credentials({
	credentials: {
		email: {
			label: 'Email',
			type: 'email',
			placeholder: 'Your email',
			required: true,
		},
		password: {
			label: 'Password',
			type: 'password',
			placeholder: 'Your pass',
			required: true,
		},
	},
	async authorize(credentials) {
		if (!credentials?.email || !credentials.password) return null;

		const currentUser = users.find(user => user.email === credentials.email);

		if (currentUser && currentUser.password === credentials.password) {
			const { password, ...user } = currentUser;
			return user as User;
		}

		return null;
	},
});

export const authConfig: AuthOptions = {
	providers: [googleProvider],
};
