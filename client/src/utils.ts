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
		department: 'KPI',
		contactEmail: 'some@gmail.com',
		linkedinUrl: 'https://www.linkedin.com/',
		instagramUrl: 'https://www.instagram.com/',
		title: 'doc. Ing.',
		building: 'A',
		room: 'A-123',
		description_ukraine:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
		decription_slovak:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
		comments: [
			{
				commentId: 1,
				author: 'John',
				commentText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
				date: '2021-09-25',
			},
		],
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

export function timeAgo(commentTime: string): string {
	const now = new Date();
	const commentDate = new Date(commentTime);
	const seconds = Math.floor((now.getTime() - commentDate.getTime()) / 1000);

	if (seconds < 60) return 'Just now';

	const minutes = Math.floor(seconds / 60);
	if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;

	const hours = Math.floor(minutes / 60);
	if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;

	const days = Math.floor(hours / 24);
	if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`;

	const months = Math.floor(days / 30);
	if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;

	const years = Math.floor(months / 12);
	return `${years} year${years !== 1 ? 's' : ''} ago`;
}
