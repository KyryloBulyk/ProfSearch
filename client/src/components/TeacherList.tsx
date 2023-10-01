import { useGetTeachersQuery } from '../services/teacherApi';
import { SpinnerCircular } from 'spinners-react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import TeacherCard from './TeacherCard';
import { teachers } from '../utils';
import { Teacher } from '../types';

const TeacherList = () => {
	// const { data, error, isSuccess, isLoading } = useGetTeachersQuery();
	const { t } = useTranslation();

	const sortOptions = [
		{ value: 'alphabet', label: t('teacherList.filterValues.alphabet') },
		{ value: 'rating', label: t('teacherList.filterValues.rating') },
	];

	// if (!isSuccess || isLoading) return <SpinnerCircular color='#3575E2' className='absolute left-1/2' />;
	// if (error) return <p>{t('teacherList.errorMessage')}</p>;
	return (
		<div className='max-w-7xl my-0 mx-auto'>
			<div className='flex justify-between'>
				<p className='text-3xl font-bold'>
					{teachers.length} {t('teacherList.teachers')}
				</p>
				<Select placeholder={t('teacherList.filter')} options={sortOptions} className='w-52' />
			</div>
			<div className='pt-4 flex flex-col gap-4'>
				{teachers.map((teacher: Teacher, index) => (
					<TeacherCard key={index} {...teacher} />
				))}
			</div>
		</div>
	);
};

export default TeacherList;
