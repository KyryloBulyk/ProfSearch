import { useParams } from 'react-router-dom';
// import { useGetTeacherQuery } from '../services/teacherApi';

const TeacherPage = () => {
	const { id } = useParams();
	// const { data, error, isSuccess, isLoading } = useGetTeacherQuery(id);

	return (
		<div className='max-w-7xl my-0 mx-auto pt-10'>
			<p></p>
		</div>
	);
};

export default TeacherPage;
