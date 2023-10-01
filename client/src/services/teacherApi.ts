import { api } from './api';
import { Teacher } from '../types';

export const teacherApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTeachers: builder.query<Teacher[], void>({
			query: () => '/teachers',
		}),
	}),
});

export const { useGetTeachersQuery } = teacherApi;
