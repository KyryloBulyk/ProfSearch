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

export function timeAgo(postedDate: string): string {
	const currentDate = new Date();
	const dateParts = postedDate.split('-').map((part) => parseInt(part, 10));
	const commentDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

	const diffInSeconds = Math.floor((currentDate.getTime() - commentDate.getTime()) / 1000);
	const minute = 60;
	const hour = minute * 60;
	const day = hour * 24;
	const month = day * 30.44; // average days in month
	const year = day * 365.25; // accounting for leap years

	if (diffInSeconds < minute) {
		return 'just now';
	} else if (diffInSeconds < hour) {
		return `${Math.floor(diffInSeconds / minute)} minutes ago`;
	} else if (diffInSeconds < day) {
		return `${Math.floor(diffInSeconds / hour)} hours ago`;
	} else if (diffInSeconds < month) {
		return `${Math.floor(diffInSeconds / day)} days ago`;
	} else if (diffInSeconds < year) {
		return `${Math.floor(diffInSeconds / month)} months ago`;
	} else {
		return `${Math.floor(diffInSeconds / year)} years ago`;
	}
}
