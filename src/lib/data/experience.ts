import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Mckesson Canada',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Montreal, QC, Canada',
		period: { from: new Date('2025-01-06'), to: new Date('2025-04-25') },
		skills: getSkills(''),
		name: 'Technical Analyst Intern',
		color: 'yellow',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'In my role at Mckesson I worked on a variety of projects, including analyzing codebases for mvc applications written in Java and providing documentation, writing and editing user stories, and creating frontend mockups for web features using Figma. I also had the chance to work as part of an Agile team and participate in daily standups, sprint planning, and retrospectives. This experience helped me to develop my skills in technical documentation, UI design, and Agile teamwork.',
	}
];

export const title = 'Experience';
