import { Teacher } from '../types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TeacherCard = (props: Teacher) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex gap-6 rounded-lg bg-white p-2 md:p-6">
            <img
                src={
                    props.photoUrl
                        ? props.photoUrl
                        : 'https://via.placeholder.com/150'
                }
                alt="avatar"
                className="h-full w-28 rounded"
            />
            <div className="flex w-1/2 flex-col sm:w-3/4 md:w-10/12">
                <p className="text-lg">{props.department}</p>
                <h1 className="text-lg font-medium md:text-2xl">
                    {props.title} {props.name} {props.surname}
                </h1>
                <p className="truncate text-zinc-500">
                    {i18n.language === 'uk'
                        ? props.description_ukraine
                        : props.decription_slovak}
                </p>
                <div className="pt-4">
                    <Link
                        to={`/teachers/${props.teacherId}`}
                        className="rounded-lg bg-blue-500 px-2 py-1 text-center text-sm text-white"
                    >
                        {t('teacherCard.button')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;
