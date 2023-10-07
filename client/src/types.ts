export interface Teacher {
	teacherId: number;
	photoUrl: string | null;
	classification: string;
	name: string;
	surname: string;
	building: string | null;
	room: string | null;
	subjects: Array<string> | null;
	location: string | null;
	department: string | null;
	contact: string | null;
	contactEmail: string | null;
	linkedinUrl: string | null;
	instagramUrl: string | null;
	description: string | null;
	title: string | null;
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
