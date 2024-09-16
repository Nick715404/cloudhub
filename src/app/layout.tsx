import '@/shared/styles/globals.css';
import { inter } from '@/shared/constants';
import { Header } from '@/widgets';
import type { Metadata } from 'next';
import { AuthProvider } from './_providers';

export const metadata: Metadata = {
	title: 'Home Page - CloudHub',
	description: 'CloudHub - its a good instrument for your cloud services!',
};

type TRootLayout = { children: Readonly<React.ReactNode> };

export default function RootLayout({ children }: TRootLayout) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<AuthProvider>
					<Header />
					<main className='mt-44 md:mt-16'>{children}</main>
				</AuthProvider>
			</body>
		</html>
	);
}
