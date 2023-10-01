import { Teacher } from '../types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TeacherCard = (props: Teacher) => {
	const { t } = useTranslation();

	return (
		<div className='flex gap-6 bg-white p-6 rounded-lg'>
			<img
				src='https://kpi.fei.tuke.sk/sites/www.kpi.fei.tuke.sk/files/pictures/picture-26-1613466875.jpg'
				alt='avatar'
				className='max-h-24 max-w-2max-h-24 rounded-sm'
			/>
			<div className='flex flex-col w-11/12'>
				<p className='text-lg'>{props.department}</p>
				<h1 className='text-2xl font-medium'>
					{props.degree} {props.name} {props.surname}
				</h1>
				<p className='text-zinc-500 truncate pr-1'>{props.description}</p>
				<Link to='/' className='bg-blue-500 text-white text-center text-sm p-1 rounded-lg w-40 mt-4'>
					{t('teacherCard.button')}
				</Link>
			</div>
		</div>
	);
};

export default TeacherCard;
