import { useTranslation } from 'react-i18next';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Teacher } from '../types';

interface TeacherTableProps {
    teacher: Teacher;
}

const TeacherTable = ({ teacher }: TeacherTableProps) => {
    const { t } = useTranslation();

    return (
        <table className='text-left text-xl'>
            <tbody>
                <tr>
                    <th>{t('teacherPage.name')}:</th>
                    <td className='pl-5 '>
                        {teacher.title} {teacher.name} {teacher.surname}
                    </td>
                </tr>
                <tr>
                    <th className='pt-5'>{t('teacherPage.department')}:</th>
                    <td className='pl-5 pt-5'>{teacher.department}</td>
                </tr>
                <tr>
                    <th className='pt-5'>{t('teacherPage.building')}:</th>
                    <td className='pl-5 pt-5'>{teacher.building}</td>
                </tr>
                <tr>
                    <th className='pt-5'>{t('teacherPage.room')}:</th>
                    <td className='pl-5 pt-5'>{teacher.room}</td>
                </tr>
                <tr>
                    <th className='pt-5'>{t('teacherPage.mail')}:</th>
                    <td className='pl-5 pt-5'>{teacher.contactEmail}</td>
                </tr>
                <tr>
                    <th className='pt-5'>{t('teacherPage.contacts')}:</th>
                    <td className='flex gap-5 pl-5 pt-5'>
                        {teacher.linkedinUrl && (
                            <Link to={teacher.linkedinUrl} target='_blank' className='h-w-8 w-8'>
                                <AiFillLinkedin className='h-full w-full' />
                            </Link>
                        )}
                        {teacher.instagramUrl && (
                            <Link to={teacher.instagramUrl} target='_blank' className='h-w-8 w-8'>
                                <AiOutlineInstagram className='h-full w-full' />
                            </Link>
                        )}
                    </td>
                </tr>
                <tr>
                    <th className='pt-5 align-top'>{t('teacherPage.subjects')}:</th>
                    {teacher.subjects ? (
                        <td className='pl-5 pt-5'>
                            {teacher.subjects.map((subject, index) => (
                                <span key={index}>
                                    {subject}
                                    {teacher.subjects && index !== teacher.subjects.length - 1 ? ',' : '.'}{' '}
                                </span>
                            ))}
                        </td>
                    ) : (
                        ''
                    )}
                </tr>
                {/* <tr>
                    <th className='pt-5 align-top'>{t('teacherPage.about')}:</th>
                    <td className='pl-5 pt-5'>
                        {i18n.language === 'uk' ? teacher.description_ukraine : teacher.decription_slovak}
                    </td>
                </tr> */}
            </tbody>
        </table>
    );
};

export default TeacherTable;
