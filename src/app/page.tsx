import Link from 'next/link';
import Image from 'next/image';
import { Button, SidesSection } from '@/entities';
import { homePageCards, logos, overviews } from '@/shared/constants';
import { RunnerLine } from '@/widgets/RunnerLine';
import { CardList } from '@/widgets/CardList/ui';
import { LinksList } from '@/widgets/LinksList/LinksList';
import { BannerSection } from '@/entities/BannerSection/ui';
import { ReviewsSwiper } from '@/widgets/ReviewsSwiper/ui/ReviewsSwiper';

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
				title='Better feedback at the right time.'
				tag='Feedback'
				text="Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where."
				linkLabel='See how it works'
				linkPath='#'
				imageAlt='Share anything you’re working on.'
				imageSrc='/png/feedback-banner.png'
				imageWidth={358}
				imageHeight={361}
				turnAround
			/>

			<section className=' relative bg-orange-500 py-20 md:h-auto'>
				<div className='container'>
					<div className=''>
						<span className='block text-center text-white mb-[4px] md:text-left'>
							Best time here
						</span>
						<h2 className='text-center text-white mb-[64px] text-section-title md:text-left md:mb-3'>
							Better feedback at the right time.
						</h2>
						<div className=''>
							<LinksList />
							<CardList cards={homePageCards} />
						</div>
					</div>
				</div>
			</section>

			<section className='my-28'>
				<div className='container'>
					<div>
						<h2 className='text-center text-section-title mb-10'>
							Your Archive of progress
						</h2>
						<div className='flex items-center justify-between gap-8 md:flex-col'>
							<BannerSection
								title='Projects'
								subTitle='Organize, follow, and archive.'
								imgSettings={{
									imgPath: '/png/overview.png',
									imgAlt: 'Organize, follow, and archive.',
									maxWidth: 495,
									maxHeight: 380,
									aspectRatio: '1.2/1',
								}}
							/>
							<BannerSection
								title='Member profiles'
								subTitle='Automatic portfolios of your work.'
								imgSettings={{
									imgPath: '/png/new-leads.png',
									imgAlt: 'Automatic portfolios of your work.',
									maxWidth: 495,
									maxHeight: 320,
									aspectRatio: '1.8/1',
									bottom: '-3rem',
								}}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-grey py-12 md:py-6'>
				<div className='container'>
					<ReviewsSwiper slides={overviews} />
				</div>
			</section>

			<section className='py-20'>
				<div className='container'>
					<div className=''>
						<h2 className='text-section-title text-center mb-14'>
							Loved By Designers At
						</h2>
					</div>
				</div>
			</section>
		</div>
	);
}
