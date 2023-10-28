import { Button } from 'profsearch-ui-kit';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import api from '../api/teachers';
import AddCommentForm from '../components/AddCommentForm';
import Comment from '../components/Comment';
import TeacherTable from '../components/TeacherTable';
import { useFetching } from '../hooks/useFetching';
import { Teacher } from '../types';
import { timeAgo } from '../utils';

const TeacherPage = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const [teacher, setTeacher] = useState<Teacher>();
    const [isCommentFormVisible, setIsCommentFormVisible] = useState(false);
    const { fetching } = useFetching(async () => {
        const { data } = await api.get(`/teachers/${id}`);
        if (data.comments) {
            data.comments.sort(
                (a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            );
        }
        setTeacher(data);
    });

    useEffect(() => {
        fetching();
    }, []);

    const addComment = async (author: string, commentText: string) => {
        await api.post(`/teachers/${id}/comments`, {
            author,
            commentText,
            date: new Date().toISOString(),
        });
        hideCommentForm();
        fetching();
        toast.success('Comment added successfully!');
    };

    const showCommentForm = () => {
        setIsCommentFormVisible(true);
    };

    const hideCommentForm = () => {
        setIsCommentFormVisible(false);
    };

    if (!teacher) return <h1 className='pt-20 text-center text-3xl font-bold'>Teacher not found</h1>;
    return (
        <div className='mx-auto my-0 max-w-7xl px-2 py-24 md:px-4'>
            <Toaster />
            <div className='flex flex-col items-start gap-10 sm:flex-row'>
                {teacher.photoUrl && <img src={teacher.photoUrl} alt={teacher.surname} className='w-48 rounded' />}
                <TeacherTable teacher={teacher} />
            </div>
            <div className='mx-auto my-0 max-w-4xl pl-3 pt-10'>
                <div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-end'>
                    <h1 className='order-2 pt-5 text-3xl font-bold sm:order-1 sm:pt-10'>{t('teacherPage.comments')}</h1>
                    {!isCommentFormVisible && (
                        <Button className='order-1 p-2 sm:order-2 md:px-3 md:py-2' onClick={showCommentForm}>
                            {t('teacherPage.comment.button')}
                        </Button>
                    )}
                </div>
                <div className='relative pt-0 sm:pt-8'>
                    <AddCommentForm
                        onCancel={hideCommentForm}
                        onAddComment={addComment}
                        isActive={isCommentFormVisible}
                    />
                    <div className={isCommentFormVisible ? 'flex flex-col gap-5 pt-72' : 'flex flex-col gap-5 pt-8'}>
                        {teacher.comments &&
                            teacher.comments.map((comment) => (
                                <Comment
                                    key={comment.commentId}
                                    content={comment.commentText}
                                    author={comment.author}
                                    date={comment.date ? timeAgo(comment.date) : ''}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherPage;
