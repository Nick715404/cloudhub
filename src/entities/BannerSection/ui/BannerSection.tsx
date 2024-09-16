import Image from 'next/image';

type BannerSectionProps = {
	title: string;
	subTitle: string;
	imgSettings: BannerSectionImgSettings;
};

type BannerSectionImgSettings = {
	imgPath: string;
	imgAlt: string;
	maxWidth: number;
	maxHeight: number;
	aspectRatio?: string;
	bottom?: string;
};

export const BannerSection = ({
	imgSettings,
	subTitle,
	title,
}: BannerSectionProps) => {
	return (
		<div className='bg-grey pt-[50px] aspect-[1.2/1] w-full max-h-[395] max-w-[570px]  rounded-[8px] border relative text-center overflow-hidden'>
			<h3>{title}</h3>
			<span>{subTitle}</span>
			<div
				style={{
					maxWidth: `${imgSettings.maxWidth}px`,
					maxHeight: `${imgSettings.maxHeight}px`,
					aspectRatio: `${imgSettings.aspectRatio}`,
					bottom: `${imgSettings.bottom}`,
				}}
				className={`absolute -bottom-24 left-[50%] -translate-x-[50%] w-full`}
			>
				<Image fill src={imgSettings.imgPath} alt={imgSettings.imgAlt} />
			</div>
		</div>
	);
};
