export type TOverview = {
	id: number;
	imgPath: string;
	body: string;
	user: TOverviewUser;
};

export type TOverviewUser = Readonly<{
	name: string;
	stance: string;
	avatar: string;
}>;
