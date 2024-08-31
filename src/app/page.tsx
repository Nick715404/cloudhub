import Link from 'next/link';
import Image from 'next/image';
import { Button, SidesSection } from '@/entities';
import { logos } from '@/shared/constants';
import { RunnerLine } from '@/widgets/RunnerLine';

export default function Home() {
	return (
		<div className='home-page'>
			<section className='h-dvh relative'>
				<div className='container'>
					<div className='text-center md:text-left'>
						<h1 className='mb-[24px] text-page-title leading-[1] font-semibold tracking-[-3px] md:leading-[40px] md:tracking-[-1px]'>
							Create, inspect, and apply <br /> synthetic surveillance broadly.
						</h1>
						<p className='mb-8 text-black-500'>
							Start with a stunning homepage. Stay motivated without hurting
							your pocket.
						</p>
						<div className='flex items-center justify-center mb-6 md:justify-start'>
							<Button label='Start for free' as='button' />
						</div>
						<span className='text-black-400 flex gap-2 justify-center md:flex-col md:gap-0'>
							Want to talk or get a live demo?
							<Link
								className='text-black-500 transition-all duration-75 hover:underline hover:text-orange-500'
								href='#'
							>
								Get in touch →
							</Link>
						</span>
					</div>
				</div>
				<div className='absolute bottom-[12rem] left-0 w-full aspect-[2/1] pointer-events-none'>
					<Image
						src='/png/home-hero-banner.webp'
						alt='Our partners'
						fill
						priority
					/>
				</div>
			</section>

			<RunnerLine logos={logos} />

			<SidesSection
				tag='Share'
				title='Share anything you’re working on.'
				text="Campsite has been instrumental in keeping designers aware of each others work-in-progress in a way that was previously slowing us down. It's also one of the only channels where."
				linkLabel='See how it works'
				linkPath='#'
				imageAlt='Share anything you’re working on.'
				imageSrc='/png/public-api-check.png'
				imageWidth={531}
				imageHeight={337}
			>
				<ul className='flex items-center gap-7 mb-10'>
					<li className='flex items-center gap-2'>
						<Image src='/svg/check.svg' alt='' width={24} height={24} />
						<span>Coded</span>
					</li>
					<li className='flex items-center gap-2'>
						<Image src='/svg/check.svg' alt='' width={24} height={24} />
						<span>100% Secure</span>
					</li>
				</ul>
			</SidesSection>

			<SidesSection
				tag='Feedback'
				title='Better feedback at the right time.'
				text="Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where."
				linkLabel='See how it works'
				linkPath='#'
				imageAlt='Share anything you’re working on.'
				imageSrc='/png/feedback-banner.png'
				imageWidth={358}
				imageHeight={361}
				turnAround
			/>
		</div>
	);
}
