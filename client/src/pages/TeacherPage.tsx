import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { useTranslation } from 'react-i18next';
import Comment from '../components/Comment';
import { useEffect, useState } from 'react';
import { Teacher } from '../types';
import api from '../api/teachers';
import TeacherTable from '../components/TeacherTable';
import AddCommentForm from '../components/AddCommentForm';
import { timeAgo } from '../utils';

const TeacherPage = () => {
	const { id } = useParams();
	const { t } = useTranslation();
	const [teacher, setTeacher] = useState<Teacher>();
	const [isCommentFormVisible, setIsCommentFormVisible] = useState(false);
	const { fetching } = useFetching(async () => {
		const { data } = await api.get(`/teachers/${id}`);
		setTeacher(data);
	});

	useEffect(() => {
		fetching();
	}, []);

	const addComment = async (author: string, commentText: string) => {
		const currentDate = new Date();

		const formattedDate = [
			currentDate.getFullYear(),
			String(currentDate.getMonth() + 1).padStart(2, '0'),
			String(currentDate.getDate()).padStart(2, '0'),
		].join('-');

		await api.post(`/teachers/${id}/comments`, { author, commentText, date: formattedDate });
		hideCommentForm();
		fetching();
	};

	const showCommentForm = () => {
		setIsCommentFormVisible(true);
	};

	const hideCommentForm = () => {
		setIsCommentFormVisible(false);
	};

	if (!teacher) return <h1 className='text-3xl text-center pt-20 font-bold'>Teacher not found</h1>;
	return (
		<div className='py-24 px-4 max-w-7xl my-0 mx-auto'>
			<div className='flex flex-col md:flex-row gap-10'>
				<div className='w-1/3'>
					{teacher.photoUrl && (
						<img
							src={teacher.photoUrl}
							alt={teacher.surname}
							className='w-full rounded-md'
						/>
					)}
				</div>
				<TeacherTable teacher={teacher} />
			</div>

			<div className='pt-10 max-w-4xl my-0 mx-auto pl-3'>
				<div className='flex justify-between items-end'>
					<h1 className='text-3xl font-bold pt-10'>{t('teacherPage.comments')}</h1>
					{!isCommentFormVisible && (
						<button
							className='bg-blue-500 text-white px-3 py-2 rounded-md'
							onClick={showCommentForm}
						>
							{t('teacherPage.comment.button')}
						</button>
					)}
				</div>
				<div className='pt-8 relative'>
					<AddCommentForm
						onCancel={hideCommentForm}
						onAddComment={addComment}
						isActive={isCommentFormVisible}
					/>
					<div className={isCommentFormVisible ? 'pt-72 flex flex-col gap-8' : 'pt-8 flex flex-col gap-8'}>
						{teacher.comments &&
							teacher.comments.map((comment) => (
								<Comment
									key={comment.commentId}
									content={comment.commentText}
									author={comment.author}
									date={timeAgo(comment.date)}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherPage;
