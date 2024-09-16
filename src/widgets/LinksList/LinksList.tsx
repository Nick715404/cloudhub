import { Button } from '@/entities';
import Image from 'next/image';
import Link from 'next/link';

export const LinksList = () => {
	return (
		<div className='bg-black-800 w-full rounded-[24px] max-h-[358px] mb-[10px] aspect-[2.7/1] overflow-hidden px-10 md:max-h-full md:aspect-auto md:px-0'>
			<div className='bg-[#222222] rounded-b-3xl md:bg-transparent'>
				<div className='flex items-center justify-between gap-5 text-white border-b-black-600 border-b p-8 md:px-6 md:pb-6 md:pt-10 md:flex-col md:items-start'>
					<div className='flex items-center gap-4'>
						<Image
							src='/svg/dark-cloudhub.svg'
							alt='Dark CloudHub Icon'
							width={68}
							height={67}
						/>
						<div className=''>
							<h3>Cloudhub</h3>
							<p className='text-[#737373]'>2m ago in Brand</p>
						</div>
					</div>
					<div className='w-fit'>
						<Button label='View post' as='a' href='#' accent />
					</div>
				</div>
				<div className='relative flex items-center justify-between gap-5 text-white p-8 hover:bg-black-700 rounded-b-[24px] md:gap-2 md:px-6 md:pb-6 md:pt-6'>
					<div className='flex items-center gap-4 md:flex-col md:items-start'>
						<Image
							src='/png/people-images.png'
							alt='Dark CloudHub Icon'
							width={104}
							height={48}
						/>
						<div className='md:text-[12px]'>
							<h3>
								3 people are looking for feedback this{' '}
								<br className='md:hidden' /> week
							</h3>
						</div>
					</div>
					<div className='w-fit'>
						<Image
							src='/svg/right-dark-arrow.svg'
							alt=''
							width={34}
							height={34}
							className='opacity-50'
						/>
					</div>
					{/* <Link
						href='#'
						className='absolute w-full h-full top-0 left-0 group-hover'
					/> */}
				</div>
			</div>
		</div>
	);
};
