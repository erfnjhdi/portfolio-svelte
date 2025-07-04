import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
	  slug: 'alert',
	  color: 'cornflowerblue',
	  name: 'Alert',
	  date: 'January 2024',
	  type: 'Fullstack Web App',
	  shortDescription:
		'Alert is a fullstack web application designed for live incident mapping.',
	  description:
		'Alert is a fullstack web application designed for live incident mapping. Users can report disturbances in real-time such as theft, assault etc. The app was made with ReactJs, Node.Js and MongoDB. ',
	  links: [{ to: 'https://github.com/erfnjhdi/Alert-React', label: 'GitHub' }, 
			{  to: 'https://alert-hazel.vercel.app/', label: 'Website'}
	  ],
	  skills: getSkills('reactjs', 'nodejs', 'mongoDB', 'html', 'css'),
	  subjects: ['ReactJS', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'REST APIs']
	},
	{
	  slug: 'movie-recommender',
	  color: 'darkorange',
	  name: 'Movie Recommendation System',
	  date: 'May 2025',
	  type: 'Fullstack Web App/Machine Learning',
	  shortDescription:
		'Content-based movie recommender using Python, scikit-learn, Flask, ReactJS',
	  description:
		'Engineered TF-IDF vectorization and cosine similarity on 5 000+ movies to achieve 92 % top-5 accuracy and built a responsive ReactJS frontend integrated via Flask REST APIs',
	  links: [{ to: 'https://github.com/erfnjhdi/python_Movie-recommender', label: 'GitHub' }],
	  skills: getSkills('python', 'scikit', 'flask', 'reactjs'),
	  subjects: ['Python', 'scikit-learn', 'Flask', 'ReactJS']
	},
	{
	  slug: 'warzone-engine',
	  color: 'forestgreen',
	  name: 'Warzone Game Engine',
	  date: 'December 2024',
	  type: 'Game Engine',
	  shortDescription:
		'Modular C++ game engine resembling Warzone gameplay, with design patterns and AI players implemented.',
	  description:
		'Constructed a C++ engine simulating Warzone gameplay with map validation and tournament modes, applying Strategy, Adapter, and Observer patterns for modularity and state logging',
	  links: [{ to: 'https://github.com/erfnjhdi/WarzoneGame', label: 'GitHub' }],
	  skills: getSkills('c++'),
	  subjects: ['C++', 'Object-Oriented Programming', 'AI Players', 'Design Patterns']
	},
	{
	  slug: 'soccer-db-system',
	  color: 'crimson',
	  name: 'Soccer Club Database System',
	  date: 'July 2024',
	  type: 'Database Application',
	  shortDescription:
		'BCNF-normalized SQL relational database with a PHP user interface that allows users to perform CRUD operations. ',
	  description:
		'Architected a BCNF-normalized SQL schema to eliminate redundancy and developed a PHP GUI for real-time data interaction, accelerating record updates',
	  links: [{ to: 'https://github.com/erfnjhdi/Soccer-database', label: 'GitHub' }],
	  skills: getSkills('sql', 'html', 'css'),
	  subjects: ['SQL', 'PHP', 'HTML', 'CSS', 'Database Design']
	},
	{
	  slug: 'banking-simulator',
	  color: 'mediumpurple',
	  name: 'Concurrent Banking Simulator',
	  date: 'October 2024',
	  type: 'Simulation',
	  shortDescription:
		'Multithreaded Java simulator application for banking transactions',
	  description:
		'Simulated 100+ concurrent deposits and withdrawals in Java, synchronized threads with semaphores to ensure data integrity and debugged race conditions',
	  links: [{ to: 'https://github.com/erfnjhdi/Banking_System', label: 'GitHub' }],
	  skills: getSkills('java'),
	  subjects: ['Java', 'Concurrency', 'Threads', 'Object-Oriented Programming']
	},
	{
	  slug: 'digit-classifier',
	  color: 'deeppink',
	  name: 'Handwritten Digit Classifier',
	  date: 'June 2025',
	  type: 'Machine Learning Model',
	  shortDescription:
		'Logistic-regression digit classifier built with scikit-learn',
	  description:
		'Trained a logistic-regression model on 1 797 8×8 digit images to reach 97.5 % accuracy, tuned solver parameters and reduced false positives by 10 % via confusion matrix analysis',
	  links: [{ to: 'https://github.com/erfnjhdi/Digit-classifier', label: 'GitHub' }],
	  skills: getSkills('python', 'scikit'),
	  subjects: ['Python', 'scikit-learn', 'NumPy', 'Matplotlib']
	}
  ];
  

export const title = 'Projects';
