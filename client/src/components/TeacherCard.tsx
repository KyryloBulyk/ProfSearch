import { Teacher } from '../types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TeacherCard = (props: Teacher) => {
	const { t } = useTranslation();

	return (
		<div className='flex gap-6 bg-white p-6 rounded-lg'>
			<img
				src={props.photoUrl ? props.photoUrl : 'https://via.placeholder.com/150'}
				alt='avatar'
				className='w-28 h-full rounded'
			/>
			<div className='flex flex-col w-11/12'>
				<p className='text-lg'>{props.department}</p>
				<h1 className='text-2xl font-medium'>
					{props.title} {props.name} {props.surname}
				</h1>
				<p className='text-zinc-500 truncate pr-8'>{props.description}</p>
				<Link
					to={`/teachers/${props.teacherId}`}
					className='bg-blue-500 text-white text-center text-sm p-1 rounded-lg w-40 mt-4'
				>
					{t('teacherCard.button')}
				</Link>
			</div>
		</div>
	);
};

export default TeacherCard;
