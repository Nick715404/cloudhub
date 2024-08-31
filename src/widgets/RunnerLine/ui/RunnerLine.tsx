import Image from 'next/image';
import { RunnerLineLogo } from '../model/types';
import { Fragment } from 'react';

type Props = { logos: RunnerLineLogo[] };

export const RunnerLine = ({ logos }: Props) => {
	return (
		<section>
			<div className='container'>
				<div className='logos'>
					{[...Array(2)].map((_, index) => (
						<Fragment key={index}>
							<div className='whitespace-nowrap'>
								{logos.map((img, index) => (
									<Image
										width={140}
										height={60}
										key={index}
										src={img.path}
										style={{ height: 'auto' }}
										className='h-auto'
										alt={`Logo of - ${img.title}`}
									/>
								))}
							</div>
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
};
