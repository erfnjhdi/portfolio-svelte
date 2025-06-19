import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelors of Computer Science',
		description: '',
		location: 'Montreal, QC, Canada',
		logo: Assets.conc,
		name: '',
		organization: 'Concordia University',
		period: "Joined in 2022, expected to graduate in 2026",
		shortDescription: '',
		slug: 'dummy-education-item',
		color: 'magenta',
		subjects: ['Java', 'Python', 'C++', 'Data Structures and Algorithms', 'Artificial Intelligence', 'SQL', 'Javascript', 'Operating Systems'],
	}
];

export const title = 'Education';
