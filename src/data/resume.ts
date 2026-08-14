export interface ResumeLink {
	label: string;
	href: string;
}

export interface ExperienceEntry {
	role: string;
	org?: string;
	period?: string;
	notes?: string | string[];
}

export interface AchievementEntry {
	result: string;
	project: string;
}

export interface EducationEntry {
	degree: string;
	school?: string;
	period?: string;
}

export interface SkillGroup {
	label: string;
	skills: string[];
}

export interface LanguageEntry {
	language: string;
	level: string;
}

export interface ResumeData {
	header: {
		name: string;
		title: string;
		links: ResumeLink[];
	};
	summary: string;
	experience: ExperienceEntry[];
	achievements: AchievementEntry[];
	education: EducationEntry[];
	skillGroups: SkillGroup[];
	languages: LanguageEntry[];
}

export const resume: ResumeData = {
	header: {
		name: 'Ali Mousavi',
		title: 'Senior Frontend Developer',
		links: [
			{ label: 'amousavig@icloud.com', href: 'mailto:amousavig@icloud.com' },
			{ label: 'github.com/almoloo', href: 'https://github.com/almoloo' },
			{ label: 'almoloo.com', href: 'https://almoloo.com' },
			{ label: '0935 138 3855', href: 'tel:+989351383855' },
		],
	},
	summary:
		'10 years of experience designing and building scalable user interfaces with React and Next.js, specializing in video platforms and crypto products. Led the complete frontend redesign of Namasha and built a white-label crypto exchange platform from scratch. Award winner at six international blockchain hackathons.',
	experience: [
		{
			role: 'Independent Development & Hackathon Projects',
			period: 'Oct 2024 — Present',
			notes: [
				'Designed and built decentralized web apps on the Lukso, Algorand, 0G, and Avalanche networks',
				'Delivered complete products from scratch under very tight timelines, using a new framework/toolset on each project',
				'Invested in personal growth and kept skills current with the latest frontend trends, including AI-assisted product development',
				'Won awards at six international hackathons — see Achievements',
			],
		},
		{
			role: 'Frontend Developer & UI Designer',
			org: 'Namasha',
			period: 'Nov 2018 — Sep 2024',
			notes: [
				'Complete redesign of the UI and frontend for the Namasha video-sharing platform',
				'Built a white-label crypto exchange platform, covering both OTC and Exchange modes',
				'Redesigned and implemented the Pikofile download page and the Blogsky blog template',
				'Built internal tools to speed up content and support team workflows',
				'Worked closely with backend and sales teams; ensured cross-browser/cross-device compatibility',
			],
		},
		{
			role: 'Frontend Developer & UI Designer',
			org: 'Kanoon Taban Shahr',
			period: 'Jun 2017 — Nov 2018',
			notes: [
				"Designed and developed UI for corporate clients' websites and mobile apps",
				'Optimized frontend code and fixed technical issues post-launch',
			],
		},
	],
	achievements: [
		{ result: '3rd place, Avalanche Hackathon', project: 'Plutus' },
		{ result: '3rd place, DataverseOS Hackathon', project: 'Lucid' },
		{ result: '3rd place, Lukso "Hack the Grid"', project: 'Echo' },
		{ result: '4th place, Algorand Hackathon', project: 'Twins' },
		{ result: 'Sponsor Award, ethGlobal 2024', project: 'Handshake' },
		{ result: 'Community Track winner, Lukso "BuildUP"', project: 'Luxo' },
		{ result: 'All project code at github.com/almoloo', project: '' },
	],
	education: [
		{
			degree: 'B.A. English Translation',
			school: 'Azad University (South Tehran Branch)',
			period: '2013 — 2018',
		},
	],
	skillGroups: [
		{
			label: 'Frontend',
			skills: [
				'React',
				'Next.js',
				'TypeScript',
				'JavaScript',
				'HTML',
				'CSS',
				'Sass',
				'Tailwind CSS',
				'shadcn/ui',
				'MUI',
				'Ant Design',
				'Redux Toolkit',
				'Zustand',
			],
		},
		{
			label: 'Web3',
			skills: ['Web3.js', 'Wagmi', 'Web3Modal', 'Ethereum', 'Solidity'],
		},
		{
			label: 'Other',
			skills: ['API Integration', 'AI-Assisted Development', 'OpenAI API', 'Docker', 'PostgreSQL', 'MongoDB'],
		},
	],
	languages: [{ language: 'English', level: 'Fluent' }],
};
