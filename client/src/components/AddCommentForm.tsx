import { useState } from 'react';
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

	const addComment = () => {
		onAddComment(commentData.name, commentData.context);
	};

	return (
		<form
			className={isActive ? `${formStyles} scale-100` : `${formStyles} scale-0`}
			onSubmit={(e) => e.preventDefault()}
		>
			<div className='flex flex-col gap-5'>
				<input
					type='text'
					placeholder={t('commentForm.name')}
					className='outline-none border-b-2 border-blue-400 focus:border-blue-800 text-lg px-2'
					value={commentData.name}
					onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
				/>
				<textarea
					placeholder={t('commentForm.context')}
					className='outline-none border-2 border-blue-400 focus:border-blue-800 text-lg px-2 py-1 rounded-sm'
					value={commentData.context}
					onChange={(e) => setCommentData({ ...commentData, context: e.target.value })}
				></textarea>
			</div>
			<div className='border border-zinc-200 my-8'></div>
			<div className='flex justify-end'>
				<div className='flex gap-4'>
					<button className='bg-red-600 text-white px-3 py-2 rounded-md' onClick={onCancel}>
						{t('commentForm.cancel')}
					</button>
					<button className='bg-blue-500 text-white px-3 py-2 rounded-md' onClick={addComment} type='submit'>
						{t('commentForm.add')}
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddCommentForm;
