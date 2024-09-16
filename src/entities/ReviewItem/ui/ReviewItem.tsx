import Image from 'next/image';

type ReviewItemProps = {
	text: string;
	imgPath: string;
};

export const ReviewItem = ({ imgPath, text }: ReviewItemProps) => {
	return (
		<div className='mb-8'>
			<Image
				className='mb-6'
				width={52}
				height={52}
				src={imgPath}
				alt='Company Logo'
			/>
			<p color='text-[#171717]'>{text}</p>
		</div>
	);
};
