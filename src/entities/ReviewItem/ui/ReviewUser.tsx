import { TOverviewUser } from '@/shared/types';
import Image from 'next/image';

type ReviewUserProps = TOverviewUser & {
	alt: string;
};

export const ReviewUser = ({ alt, avatar, name, stance }: ReviewUserProps) => {
	return (
		<div className='flex items-center gap-3 mb-8'>
			<Image width={40} height={40} src={avatar} alt={alt} />
			<div className='flex flex-col'>
				<span className='text-[#171717] font-bold'>{name}</span>
				<span className='text-sm'>{stance}</span>
			</div>
		</div>
	);
};
