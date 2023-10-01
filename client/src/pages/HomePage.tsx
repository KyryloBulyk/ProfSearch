import { useGetTeachersQuery } from '../services/teacherApi';

const HomePage = () => {
	const { data } = useGetTeachersQuery();
	console.log(data);
	return <div>HomePage</div>;
};

export default HomePage;
