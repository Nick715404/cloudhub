import Image from 'next/image';

type TCard = {
	imgPath: string;
	title: string;
	text: string;
};

export const Card = ({ imgPath, text, title }: TCard) => {
	return (
		<div className='bg-black-800 text-[#737373] rounded-[24px] px-[22px] py-[38px] lg:px-[2.2%] lg:py-[20px] md:w-full md:px-4 md:py-5'>
			<Image src={imgPath} alt='icon' width={40} height={40} priority />
			<h3 className='text-white mb-[3px]'>{title}</h3>
			<p className='max-w-[66%] xl:max-w-full lg:text-sm'>{text}</p>
		</div>
	);
};
