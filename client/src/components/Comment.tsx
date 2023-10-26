import { BsPersonCircle } from 'react-icons/bs';

interface CommentProps {
    author: string;
    content: string;
    date: string;
}

const Comment = ({ author, content, date }: CommentProps) => {
    return (
        <div className="rounded-md border border-zinc-300 p-4">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <BsPersonCircle size="2rem" />
                    <p className="text-xl font-bold">{author}</p>
                </div>
                <p>{date}</p>
            </div>
            <p className="pt-3 text-lg text-zinc-600">{content}</p>
        </div>
    );
};

export default Comment;
