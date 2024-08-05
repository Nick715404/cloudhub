import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

const metadata: Metadata = {
	title: 'Profile',
	description: 'Profile page',
};

export default async function ProfilePage() {
	const session = await getServerSession();

	return (
		<div className='container'>
			<h1>Profile</h1>
			<div className='mb-12'>Profile {session?.user?.name}</div>
			{session?.user?.image && (
				<img
					className='block w-[150px] h-[150px]'
					src={session.user.image}
					alt=''
				/>
			)}
			<div className=''></div>
		</div>
	);
}
