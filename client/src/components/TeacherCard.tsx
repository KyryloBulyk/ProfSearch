import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Teacher } from '../types';

const TeacherCard = (props: Teacher) => {
    const { t, i18n } = useTranslation();

    return (
        <div className='flex gap-3 rounded-lg bg-white p-2 md:gap-6 md:p-6'>
            <img
                src={props.photoUrl ? props.photoUrl : 'https://via.placeholder.com/150'}
                alt='avatar'
                className='h-full w-28 rounded'
            />
            <div className='flex w-1/2 flex-col sm:w-3/4 md:w-10/12'>
                <p className='text-lg'>{props.department}</p>
                <h1 className='text-lg font-medium md:text-2xl'>
                    {props.title} {props.name} {props.surname}
                </h1>
                <p className='truncate text-zinc-500'>
                    {i18n.language === 'uk' ? props.description_ukraine : props.decription_slovak}
                </p>
                <div className='pt-4'>
                    <Link
                        to={`/teachers/${props.teacherId}`}
                        className='border-b-2 border-blue-500 text-center text-sm text-blue-500 sm:rounded sm:border-none sm:bg-blue-500 sm:px-2 sm:py-1 sm:text-white'
                    >
                        {t('teacherCard.button')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;
// className='border-b-2 border-blue-500 text-center text-sm text-blue-500'
