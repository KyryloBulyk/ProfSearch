import { Teacher } from './types';

export const teachersData: Teacher[] = [
	{
		teacherId: 1,
		photoUrl: 'https://kpi.fei.tuke.sk/sites/www.kpi.fei.tuke.sk/files/pictures/picture-26-1613466875.jpg',
		subjects: [
			'doménovo špecifické jazyky',
			'inžinierstvo počítačových jazykov',
			'architektúry softvérových systémov',
			'moderné používateľské rozhrania',
		],
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
		subjects: [
			'doménovo špecifické jazyky',
			'inžinierstvo počítačových jazykov',
			'architektúry softvérových systémov',
			'moderné používateľské rozhrania',
		],
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
// This is function for calculating days left to study

// export function daysLeftToStudy() {
// 	const startDate = '2023-09-25';
// 	const endDate = '2023-12-22';
// 	const startDateTime = new Date(startDate).getTime();
// 	const endDateTime = new Date(endDate).getTime();

// 	if (startDateTime > endDateTime) {
// 		throw new Error('Start date cannot be after end date');
// 	}

// 	const currentDate = new Date().getTime();

// 	const daysLeft = Math.floor((endDateTime - currentDate) / (24 * 60 * 60 * 1000));

// 	return daysLeft;
// }

export function getStudyWeek() {
	const startDate = '2023-09-25';
	const endDate = '2023-12-22';
	const startDateTime = new Date(startDate).getTime();
	const endDateTime = new Date(endDate).getTime();

	if (startDateTime > endDateTime) {
		throw new Error('Start date cannot be after end date');
	}

	const currentDate = new Date().getTime();

	const totalWeeks = Math.ceil((endDateTime - startDateTime) / (7 * 24 * 60 * 60 * 1000));

	const currentWeek = Math.ceil((currentDate - startDateTime) / (7 * 24 * 60 * 60 * 1000));
	return currentWeek > totalWeeks ? totalWeeks : currentWeek;
}
