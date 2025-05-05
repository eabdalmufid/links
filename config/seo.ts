import { NextSeoProps } from 'next-seo';

const SEO: NextSeoProps = {
	title: 'Abdul Mufid | Personal Bio Page',
	titleTemplate: 'Abdul Mufid - Like Another World',
	defaultTitle: 'Abdul Mufid | Like Another World',
	description:
		"",
	openGraph: {
		url: 'https://affidev.com/links/',
		title: 'Abdul Mufid | Personal Bio Page',
		description:
			"",
		images: [
			{
				url: 'https://dika.greyrat.me/og-image.png',
				alt: 'Abdul Mufid | Personal Bio Page',
			},
		],
	},
	twitter: {
		handle: '@eabdalmufid',
		site: '@eabdalmufid',
		cardType: 'summary_large_image',
	},
	additionalMetaTags: [
		{
			property: 'keywords',
			content: 'Affidev, Web Developer, Bot Developer, Affidev Bot, Affidev Undangan, eabdalmufid, Abdul Mufid',
		},
	],
};

export { SEO };
export default SEO;
