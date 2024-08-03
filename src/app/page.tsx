import { Button } from '@/entities';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='home-page'>
			<section className='h-dvh'>
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
			</section>
		</div>
	);
}
