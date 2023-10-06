import { useTranslation } from 'react-i18next';
import TeacherCard from './TeacherCard';
import { Teacher } from '../types';

interface TeacherListProps {
	teachers: Teacher[];
	error: boolean;
}

const TeacherList = ({ teachers, error }: TeacherListProps) => {
	const { t } = useTranslation();

	if (error) return <p>{t('teacherList.errorMessage')}</p>;
	return (
		<div className='pt-10 flex flex-col gap-4'>
			{teachers.map((teacher: Teacher, index) => (
				<TeacherCard key={index} {...teacher} />
			))}
		</div>
	);
};

export default TeacherList;
