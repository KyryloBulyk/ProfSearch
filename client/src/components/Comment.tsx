import { BsPersonCircle } from 'react-icons/bs';

interface CommentProps {
	author: string;
	content: string;
	date: string;
}

const Comment = ({ author, content, date }: CommentProps) => {
	return (
		<div className='border border-zinc-300 rounded-md p-4'>
			<div className='flex justify-between'>
				<div className='flex items-center gap-4'>
					<BsPersonCircle size='2rem' />
					<p className='font-bold text-xl'>{author}</p>
				</div>
				<p>{date}</p>
			</div>
			<p className='pt-3 text-lg text-zinc-600'>{content}</p>
		</div>
	);
};

export default Comment;
