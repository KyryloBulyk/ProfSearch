import { Teacher } from './types';

export const teachersData: Teacher[] = [
	{
		teacherId: 1,
		photoUrl: 'https://i.imgur.com/5QxXb2o.png',
		name: 'John',
		surname: 'Doe',
		location: 'London',
		department: 'KPI',
		contactEmail: 'some@gmail.com',
		linkedinUrl: 'https://www.linkedin.com/',
		instagramUrl: 'https://www.instagram.com/',
		title: 'doc. Ing.',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	},
	{
		teacherId: 2,
		photoUrl: 'https://i.imgur.com/5QxXb2o.png',
		name: 'Steve',
		surname: 'Rogers',
		location: 'LA',
		department: 'KTMI',
		contactEmail: 'his@gmail.com',
		linkedinUrl: 'https://www.linkedin.com/',
		instagramUrl: 'https://www.instagram.com/',
		title: 'doc.',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
	},
];

export const fuseOptions = {
	includeScore: true,
	keys: ['name', 'surname', 'location', 'department', 'title', 'description'],
};
