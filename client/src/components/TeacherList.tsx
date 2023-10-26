import { useTranslation } from 'react-i18next';
import { Teacher } from '../types';
import TeacherCard from './TeacherCard';

interface TeacherListProps {
    teachers: Teacher[];
    error: boolean;
}

const TeacherList = ({ teachers, error }: TeacherListProps) => {
    const { t } = useTranslation();

    if (error) return <h1 className='pt-10 text-center text-2xl font-bold'>{t('teacherList.errorMessage')}😞</h1>;
    return (
        <div className='flex flex-col gap-4 pt-10'>
            {teachers.map((teacher: Teacher, index) => (
                <TeacherCard key={index} {...teacher} />
            ))}
        </div>
    );
};

export default TeacherList;
