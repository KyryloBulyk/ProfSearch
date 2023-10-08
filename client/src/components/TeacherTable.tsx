import { Link } from 'react-router-dom';
import { Teacher } from '../types';
import { useTranslation } from 'react-i18next';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

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
					<td className='pl-5 pt-5'>{teacher.location}</td>
				</tr>
				<tr>
					<th className='pt-5'>{t('teacherPage.room')}:</th>
					<td className='pl-5 pt-5'>{teacher.location}</td>
				</tr>
				<tr>
					<th className='pt-5'>{t('teacherPage.mail')}:</th>
					<td className='pl-5 pt-5'>{teacher.contactEmail}</td>
				</tr>
				<tr>
					<th className='pt-5'>{t('teacherPage.contacts')}:</th>
					<td className='pl-5 flex gap-5 pt-5'>
						{teacher.linkedinUrl && (
							<Link to={teacher.linkedinUrl} target='_blank' className='w-8 h-w-8'>
								<AiFillLinkedin className='w-full h-full' />
							</Link>
						)}
						{teacher.instagramUrl && (
							<Link to={teacher.instagramUrl} target='_blank' className='w-8 h-w-8'>
								<AiOutlineInstagram className='w-full h-full' />
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
				<tr>
					<th className='pt-5 align-top'>{t('teacherPage.about')}:</th>
					<td className='pl-5 pt-5'>{teacher.description}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default TeacherTable;
