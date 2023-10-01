import { useTranslation } from 'react-i18next';
import TeacherList from '../components/TeacherList';

const SearchPage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<div className='py-24 max-w-7xl my-0 mx-auto'>
				<h1 className='text-6xl font-bold'>
					{t('header.title')}
					{/* Find the Right <span className='text-blue-600'>Teacher</span> for You */}
				</h1>
				<p className='text-lg pt-2'>{t('header.subtitle')}</p>
				<div className='flex pt-10'>
					<input
						type='text'
						className='rounded-l-lg border border-zinc-300 p-4 text-base w-full focus:outline-blue-500 -mr-1'
						placeholder={t('header.inputPlaceholder')}
					/>
					<button className='bg-blue-500 text-white p-2 text-base rounded-r-lg w-52'>
						{t('header.button')}
					</button>
				</div>
			</div>
			<div className='bg-stone-100 py-20'>
				<TeacherList />
			</div>
		</div>
	);
};

export default SearchPage;
