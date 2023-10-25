// DO NOT MODIFY EXISTING TYPES

export interface Teacher {
	teacherId: number;
	photoUrl: string | null;
	name: string;
	surname: string;
	building: string | null;
	department: string | null;
	room: string | null;
	contactEmail: string | null;
	linkedinUrl: string | null;
	instagramUrl: string | null;
	description_ukraine: string | null;
	decription_slovak: string | null;
	title: string | null;
	subjects: string[] | null;
	comments: Comment[] | null;
}

export interface SerializedError {
	name?: string;
	message?: string;
	stack?: string;
	code?: string;
}

export interface SortOption {
	value: string;
	label: string;
}

export interface Comment {
	author: string;
	commentText: string;
	date: string;
	commentId: number;
}
