import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Teacher } from '../types';

const TeacherPage = () => {
	const { id } = useParams();
	const [teacher, setTeacher] = useState<Teacher>();
	const [error, setError] = useState(false);
	// TODO - fetch teacher by id
	useEffect(() => {
		const fetchTeacher = async () => {
			try {
				const { data } = await axios.get(`/api/teachers/${id}`);
				setTeacher(data);
			} catch (error) {
				setError(true);
			}
		};
		fetchTeacher();
	}, []);

	return <div>TeacherPage</div>;
};

export default TeacherPage;
