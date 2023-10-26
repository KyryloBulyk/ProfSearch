import { Teacher } from '../types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TeacherCard = (props: Teacher) => {
	const { t, i18n } = useTranslation();

	return (
		<div className='flex gap-6 bg-white p-2 md:p-6 rounded-lg'>
			<img
				src={props.photoUrl ? props.photoUrl : 'https://via.placeholder.com/150'}
				alt='avatar'
				className='w-28 h-full rounded'
			/>
			<div className='flex flex-col w-1/2 sm:w-3/4 md:w-10/12'>
				<p className='text-lg'>{props.department}</p>
				<h1 className='text-lg md:text-2xl font-medium'>
					{props.title} {props.name} {props.surname}
				</h1>
				<p className='text-zinc-500 truncate'>
					{i18n.language === 'uk' ? props.description_ukraine : props.decription_slovak}
				</p>
				<div className='pt-4'>
					<Link
						to={`/teachers/${props.teacherId}`}
						className='bg-blue-500 text-white text-center text-sm py-1 px-2 rounded-lg'
					>
						{t('teacherCard.button')}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TeacherCard;
