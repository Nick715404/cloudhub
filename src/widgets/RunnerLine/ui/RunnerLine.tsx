import Image from 'next/image';
import { RunnerLineLogo } from '../model/types';
import { Fragment } from 'react';
import Marquee from 'react-fast-marquee';

type Props = { logos: RunnerLineLogo[] };

export const RunnerLine = ({ logos }: Props) => {
	return (
		<section className='py-8'>
			<div className='container'>
				<Marquee pauseOnHover>
					{[...Array(1)].map((_, index) => (
						<Fragment key={index}>
							<div>
								{logos.map((img, index) => (
									<Image
										width={140}
										height={60}
										key={index}
										src={img.path}
										style={{
											width: 'auto',
											display: 'inline',
										}}
										className='mx-10 md:mx-5'
										alt={`Logo of - ${img.title}`}
									/>
								))}
							</div>
						</Fragment>
					))}
				</Marquee>
			</div>
		</section>
	);
};
