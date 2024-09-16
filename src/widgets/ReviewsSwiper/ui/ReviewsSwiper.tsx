'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TOverview } from '@/shared/types';
import { ReviewItem } from '@/entities/ReviewItem/ui/ReviewItem';
import { ReviewUser } from '@/entities/ReviewItem/ui/ReviewUser';

type OverviewsSwiperProps = {
	slides: TOverview[];
};

export const ReviewsSwiper = ({ slides }: OverviewsSwiperProps) => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			}}
			spaceBetween={10}
			slidesPerView={2}
		>
			{slides.map(slide => {
				const { avatar, name, stance } = slide.user;

				return (
					<SwiperSlide className='pt-20 md:pt-10' key={slide.id}>
						<ReviewItem text={slide.body} imgPath={slide.imgPath} />
						<ReviewUser
							alt={name}
							avatar={avatar}
							name={name}
							stance={stance}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
