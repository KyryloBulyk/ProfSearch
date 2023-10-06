import { api } from './api';
import { Teacher } from '../types';

export const teacherApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTeachers: builder.query<Teacher[], void>({
			query: () => '/teachers',
		}),
		getTeacher: builder.query<Teacher, string>({
			query: (id) => `/teachers/${id}`,
		}),
	}),
});

export const { useGetTeachersQuery, useGetTeacherQuery } = teacherApi;
