import { Platform } from '$lib/types';

export const title = 'Home';

export const name = 'Erfan';

export const lastName = 'Jahedi';

export const description =
	'I’m a computer science student passionate about building creative solutions, from full-stack web apps to machine learning projects. I love exploring new technologies and recently started diving deeper into AI. I’m always eager to learn, collaborate, and turn ideas into reality!' + '\n\n' + 'You can check out more or contact me through the links below.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/erfnjhdi' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/erfan-jahedi-b46568295'
	},
	{
		platform: Platform.Email,
		link: 'erfanjahedi81@gmail.com'
	},
];

