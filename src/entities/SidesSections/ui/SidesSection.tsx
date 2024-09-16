import Image from 'next/image';
import Link from 'next/link';

type ImageProps = Readonly<{
	imageSrc: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
}>;

type LinkProps = Readonly<{
	linkPath: string;
	linkLabel: string;
}>;

type TextProps = Readonly<{
	tag: string;
	title: string;
	text: string;
}>;

type TSidesSection = Readonly<{
	children?: React.ReactNode;
	turnAround?: boolean;
}> &
	ImageProps &
	LinkProps &
	TextProps;

export const SidesSection = ({
	linkPath,
	linkLabel,
	tag,
	text,
	title,
	children,
	imageAlt,
	imageSrc,
	imageHeight,
	imageWidth,
	turnAround,
}: TSidesSection) => {
	return (
		<section className='py-20'>
			<div
				className={`container flex items-center gap-10 lg:gap-2 justify-between ${
					turnAround && 'flex-row-reverse'
				} md:flex-col-reverse md:items-start`}
			>
				<div className='w-1/2 sm:w-[100%] md:w-9/12'>
					<span className='bg-orange-500 px-[14px] py-[4px] text-white rounded-full block w-fit mb-4'>
						{tag}
					</span>
					<h2 className='text-section-title leading-[1] mb-6'>{title}</h2>
					<p className='text-black-500 mb-[40px]'>{text}</p>
					{children}
					<div className='flex items-center gap-[8px] group'>
						<Image
							width={24}
							height={24}
							src='/svg/done-orange-arrow.svg'
							alt='See how it works'
						/>
						<Link className='group-hover:underline' href={linkPath}>
							{linkLabel}
						</Link>
					</div>
				</div>
				<div className='w-[48%] bg-grey rounded-3xl flex items-center justify-center md:w-full'>
					<Image
						width={imageWidth}
						height={imageHeight}
						src={imageSrc}
						alt={imageAlt}
						style={{ width: 'auto' }}
					/>
				</div>
			</div>
		</section>
	);
};
