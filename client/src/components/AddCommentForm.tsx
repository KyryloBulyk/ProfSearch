import { Button } from 'profsearch-ui-kit';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const formStyles = 'border border-zinc-300 p-4 duration-150 transform transition-all absolute w-full z-10';

interface AddCommentFormProps {
    isActive: boolean;
    onAddComment: (name: string, context: string) => void;
    onCancel: () => void;
}

const AddCommentForm = ({ isActive, onAddComment, onCancel }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const [commentData, setCommentData] = useState({ name: '', context: '' });
    const [lastCommentTime, setLastCommentTime] = useState<number | null>(
        JSON.parse(localStorage.getItem('lastCommentTime') || 'null'),
    );

    const addComment = () => {
        if (!commentData.name.trim() || !commentData.context.trim()) {
            alert('Please fill all fields.');
            return;
        }

        const currentTime = Date.now();

        if (lastCommentTime && currentTime - lastCommentTime < 30 * 1000) {
            alert('Please wait for 30 seconds before adding another comment.');
            return;
        }

        onAddComment(commentData.name, commentData.context);
        setLastCommentTime(currentTime);
    };

    useEffect(() => {
        localStorage.setItem('lastCommentTime', JSON.stringify(lastCommentTime));
    }, [lastCommentTime]);

    return (
        <form
            className={isActive ? `${formStyles} scale-100` : `${formStyles} scale-0`}
            onSubmit={(e) => e.preventDefault()}
        >
            <div className='flex flex-col gap-5'>
                <input
                    type='text'
                    placeholder={t('commentForm.name')}
                    className='border-b-2 border-blue-400 px-2 text-lg outline-none focus:border-blue-800'
                    value={commentData.name}
                    onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                />
                <textarea
                    placeholder={t('commentForm.context')}
                    className='rounded-sm border-2 border-blue-400 px-2 py-1 text-lg outline-none focus:border-blue-800'
                    value={commentData.context}
                    onChange={(e) =>
                        setCommentData({
                            ...commentData,
                            context: e.target.value,
                        })
                    }
                ></textarea>
            </div>
            <div className='my-8 border border-zinc-200'></div>
            <div className='flex justify-end'>
                <div className='flex gap-4'>
                    <Button className='bg-red-600 px-3 py-2' onClick={onCancel}>
                        {t('commentForm.cancel')}
                    </Button>
                    <Button className='px-3 py-2' onClick={addComment} type='submit'>
                        {t('commentForm.add')}
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default AddCommentForm;
