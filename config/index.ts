import { configProps, footerProps } from '../@types/prop.types';

// main avatar picture
export const avatar: string = '/profile/profile.jpg';

// main cover or banner picture (optional)
export const cover: string | false = '/profile/cover.jpg';

// footer page
export const footer: footerProps = {
	name: 'Abdul Mufid',
	url: 'https://affidev.com',
};

export const config: configProps = {
	name: 'Abdul Mufid',
	bio: 'Just People',
	tags: ['💻 Coder', '🎵 Music'],
	socials: {
		twitter: 'https://twitter.com/eabdalmufid',
		instagram: 'https://www.instagram.com/eabdlmufid',
		facebook: 'https://www.facebook.com/eabdalmufid',
		youtube: 'https://www.youtube.com/@eabdalmufid',
		github: 'https://github.com/eabdalmufid',
		telegram: 'https://t.me/eabdalmufid',
		whatsapp: 'https://wa.me/6289509952003',
	},
	links: [
		{
			emoji: '🌐',
			title: 'Website Personal',
			description: 'Explore my biography, projects, and more',
			url: 'https://affidev.com',
		},
		{
			emoji: '🔗',
			title: 'Undangan Digital',
			description: 'Create and share elegant digital invitations with RSVP, maps, countdowns, and more',
			url: 'https://invite.affidev.com',
		},
		{
			emoji: '⚡',
			title: 'Agen Pulsa & PPOB',
			description: 'Top up credit, data packages, electricity tokens, and other bill payments easily and quickly.',
			url: 'https://store.affidev.com',
		},
	],
};

export default config;
