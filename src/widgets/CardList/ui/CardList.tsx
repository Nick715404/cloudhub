import { Card } from '@/entities/Card/ui';
import { TCard } from '@/shared/types';
import { Fragment } from 'react';

type TCardList = {
	cards: TCard[];
};

export const CardList = ({ cards }: TCardList) => {
	return (
		<div className='flex items-center justify-between gap-[10px] md:flex-col'>
			{cards.map(card => (
				<Fragment key={card.id}>
					<Card title={card.title} text={card.text} imgPath={card.imgPath} />
				</Fragment>
			))}
		</div>
	);
};
