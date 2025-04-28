type footerProps = { name: string; url: string } | string;

interface configProps {
	name: string;
	bio: string;
	tags?: string[];
	socials?: {
		twitter?: string;
		x?: string;
		github?: string;
		linkedin?: string;
		instagram?: string;
		facebook?: string;
		tiktok?: string;
		youtube?: string;
		twitch?: string;
		discord?: string;
		telegram?: string;
		spotify?: string;
		medium?: string;
		whatsapp?: string;
		pinterest?: string;
		patreon?: string;
	};
	links?: {
		emoji?: string;
		title: string;
		description?: string;
		url: string;
	}[];
}

export type { configProps, footerProps };
