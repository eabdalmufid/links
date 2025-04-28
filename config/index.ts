import { configProps, footerProps } from '../@types/prop.types';

// main avatar picture
export const avatar: string = '/profile/profile.jpg';

// main cover or banner picture (optional)
export const cover: string | false = '/profile/cover.jpg';

// footer page
export const footer: footerProps = {
	name: 'Dika Greyrat',
	url: 'https://dikaardnt.com',
};

export const config: configProps = {
	name: 'Dika Greyrat',
	bio: 'Just People who love a Anime and Manga',
	tags: ['💻 Coder', '📺 Anime', '📚 Manga', '🎵 Music'],
	socials: {
		twitter: 'https://twitter.com/DikaArdnt',
		instagram: 'https://www.instagram.com/dika.greyrat',
		facebook: 'https://www.facebook.com/DikaArdnt',
		youtube: 'https://www.youtube.com/@dika.ardianta',
		github: 'https://github.com/DikaArdnt',
		discord: 'https://discord.com/users/808923620792991754',
		telegram: 'https://t.me/DikaArdnt',
		whatsapp: 'https://wa.me/6288292024190',
	},
	links: [
		{
			emoji: '🌐',
			title: 'Personal Website',
			description: 'Explore my biography, projects, and more',
			url: 'https://dikaardnt.com',
		},
		{
			emoji: '🤖',
			title: 'WhatsApp Bot Hosting',
			description: 'WhatsApp Bot Hosting, create bots with just one click without worrying about server costs or code issues',
			url: 'https://hisoka.net',
		},
		{
			emoji: '🔗',
			title: 'Free Short URL',
			description: 'A simple URL shortener service with a simple interface and a variety of features',
			url: 'https://kua.lat',
		},
		{
			emoji: '🅱️',
			title: 'Personal Bio Page',
			description: 'A simple bio page with a variety of features',
			url: 'https://greyrat.me',
		},
	],
};

export default config;
