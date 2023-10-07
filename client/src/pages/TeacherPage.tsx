import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { useTranslation } from 'react-i18next';
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Teacher } from '../types';
import { teachersData } from '../utils';
import api from '../api/teachers';

const TeacherPage = () => {
	const { id } = useParams();
	const { t } = useTranslation();
	const [teacher, setTeacher] = useState<Teacher>(teachersData[0]);
	const { fetching } = useFetching(async () => {
		const { data } = await api.get(`/teachers/${id}`);
		setTeacher(data);
	});
	// TODO - fetch teacher by id
	// useEffect(() => {
	// 	fetching();
	// }, []);

	return (
		<div className='py-24 max-w-7xl my-0 mx-auto flex'>
			<div className='flex flex-col md:flex-row gap-10'>
				<div className='w-1/3'>
					{teacher.photoUrl && (
						<img src={teacher.photoUrl} alt={teacher.surname} className='w-full rounded-md' />
					)}
				</div>
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
									<Link to={teacher.linkedinUrl} className='w-8 h-w-8'>
										<AiFillLinkedin className='w-full h-full' />
									</Link>
								)}
								{teacher.instagramUrl && (
									<Link to={teacher.instagramUrl} className='w-8 h-w-8'>
										<AiOutlineInstagram className='w-full h-full' />
									</Link>
								)}
							</td>
						</tr>
						<tr>
							<th className='pt-5 align-top'>{t('teacherPage.subjects')}:</th>
							<td className='pl-5 pt-5'>
								{teacher.subjects.map((subject, index) => (
									<span key={index}>
										{subject}
										{index !== teacher.subjects.length - 1 ? ',' : '.'}{' '}
									</span>
								))}
							</td>
						</tr>
						<tr>
							<th className='pt-5 align-top'>{t('teacherPage.about')}:</th>
							<p className='pl-5 pt-5'>{teacher.description}</p>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TeacherPage;
