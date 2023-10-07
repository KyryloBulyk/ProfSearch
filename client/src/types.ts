// DO NOT MODIFY THIS FILE

export interface Teacher {
	teacherId: number;
	photoUrl: string | null;
	name: string;
	surname: string;
	location: string | null;
	department: string | null;
	contactEmail: string | null;
	linkedinUrl: string | null;
	instagramUrl: string | null;
	description: string | null;
	title: string | null;
	subjects: string[];
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
