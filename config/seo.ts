import { NextSeoProps } from 'next-seo';

const SEO: NextSeoProps = {
	title: 'Dika Greyrat | Personal Bio Page',
	titleTemplate: 'Dika Greyrat - Like Another World',
	defaultTitle: 'Dika Greyrat | Like Another World',
	description:
		"Hey! I'm Dika Greyrat, I am a fan of anime, manga, and light novels Mushoku Tensei, especially the character Rudeus Greyrat. I have a great respect for the author, Rifujin na Magonote, and the illustrator, Shirotaka. Thank you for creating this amazing story!",
	openGraph: {
		url: 'https://dika.greyrat.me/',
		title: 'Dika Greyrat | Personal Bio Page',
		description:
			"Hey! I'm Dika Greyrat, I am a fan of anime, manga, and light novels Mushoku Tensei, especially the character Rudeus Greyrat. I have a great respect for the author, Rifujin na Magonote, and the illustrator, Shirotaka. Thank you for creating this amazing story!",
		images: [
			{
				url: 'https://dika.greyrat.me/og-image.png',
				alt: 'Dika Greyrat | Personal Bio Page',
			},
		],
	},
	twitter: {
		handle: '@DikaArdnt',
		site: '@DikaArdnt',
		cardType: 'summary_large_image',
	},
	additionalMetaTags: [
		{
			property: 'keywords',
			content: 'Web Developer, Bot Developer, Hisoka Bot, Dika Greyrat, Greyrat Family, Mushoku Tensei, Anime, Manga, Light Novel, Weeb',
		},
	],
};

export { SEO };
export default SEO;
