import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks & Libraries', slug: 'framework' }),
	defineSkillCategory({ name: 'DevOps & Cloud', slug: 'devops' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Frontend & Design', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'AI & ML Tools', slug: 'ai-ml' }),
	defineSkillCategory({ name: 'Other', slug: 'other' })

] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'java',
		color: 'orange',
		description:'',
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:'',
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:'',
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c++',
		color: 'cadetblue',
		description:'',
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'cornflowerblue',
		description:'',
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'midnightblue',
		description:'',
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:'',
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:'',
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'pink',
		description:'',
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'figma',
		color: 'indianred',
		description:'',
		name: 'Figma',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'miro',
		color: 'orangered',
		description:'',
		name: 'Miro',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:'',
		name: 'React Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'olive',
		description:'',
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'springboot',
		color: 'seagreen',
		description:'',
		name: 'Springboot',
		category: 'framework'
	}),
	defineSkill({
		slug: 'scikit',
		color: 'seagreen',
		description:'',
		name: 'Scikit-learn',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: '',
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mongoDB',
		color: 'seagreen',
		description:'',
		name: 'MongoDB',
		category: 'other'
	}),
	defineSkill({
		slug: 'aws',
		color: 'tomato',
		description:'',
		name: 'AWS',
		category: 'other'
	}),
	defineSkill({
		slug: 'git',
		color: 'purple',
		description:'',
		name: 'Git',
		category: 'other'
	}),
	defineSkill({
		slug: 'github',
		color: 'sandybrown',
		description:'',
		name: 'Github',
		category: 'other'
	}),
	defineSkill({
		slug: 'docker',
		color: 'salmon',
		description:'',
		name: 'Docker',
		category: 'other'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'orangered',
		description:'',
		name: 'Node.Js',
		category: 'other'
	}),
	defineSkill({
		slug: 'jira',
		color: 'slateblue',
		description:'',
		name: 'Jira',
		category: 'other'
	}),
	defineSkill({
		slug: 'postman',
		color: 'tan',
		description:'',
		name: 'Postman',
		category: 'other'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
