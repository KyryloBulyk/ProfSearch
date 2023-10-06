import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Teacher } from '../types';

const TeacherPage = () => {
	const { id } = useParams();
	const [teacher, setTeacher] = useState<Teacher>();
	const { fetching } = useFetching(async () => {
		const { data } = await axios.get(`/api/teachers/${id}`);
		setTeacher(data);
	});
	// TODO - fetch teacher by id
	// useEffect(() => {
	// 	fetching();
	// }, []);

	return <div>TeacherPage</div>;
};

export default TeacherPage;
