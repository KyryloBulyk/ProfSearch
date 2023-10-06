import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { useTranslation } from 'react-i18next';
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Teacher } from '../types';
import { teachersData } from '../utils';

const TeacherPage = () => {
	const { id } = useParams();
	const { t } = useTranslation();
	const [teacher, setTeacher] = useState<Teacher>(teachersData[0]);
	const { fetching } = useFetching(async () => {
		const { data } = await axios.get(`http://147.232.182.160:8080/api/teachers/${id}`);
		setTeacher(data);
	});
	// TODO - fetch teacher by id
	// useEffect(() => {
	// 	fetching();
	// }, []);

	return (
		<div className='py-24 max-w-7xl my-0 mx-auto flex'>
			<div className='flex flex-col md:flex-row gap-10'>
				<div className='w-52 h-full'>
					{teacher.photoUrl && <img src={teacher.photoUrl} alt={teacher.surname} className='rounded-md' />}
				</div>
				<table className='text-left text-xl'>
					<tbody>
						<tr>
							<th className=''>{t('teacherPage.name')}:</th>
							<td className='pl-5 '>
								{teacher.title} {teacher.name} {teacher.surname}
							</td>
						</tr>
						<tr>
							<th className='pt-5'>{t('teacherPage.department')}:</th>
							<td className='pl-5 pt-5'>{teacher.department}</td>
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
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TeacherPage;