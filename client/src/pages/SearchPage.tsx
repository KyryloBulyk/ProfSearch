import { useTranslation } from 'react-i18next';
import TeacherList from '../components/TeacherList';
import { useEffect, useState } from 'react';
// import { teachersData } from '../utils';
import BounceLoader from 'react-spinners/BounceLoader';
import { useGetTeachersQuery } from '../services/teacherApi';
import Fuse from 'fuse.js';
import Select from 'react-select';
import { fuseOptions } from '../utils';
import { Teacher, SortOption } from '../types';

const SearchPage = () => {
	const { t } = useTranslation();
	const { data, error } = useGetTeachersQuery();
	const [teachers, setTeachers] = useState<Teacher[]>([]);
	const [search, setSearch] = useState('');
	const [sorting, setSorting] = useState('');

	const sortOptions = [
		{ value: 'alphabet', label: t('teacherList.filterValues.alphabet') },
		{ value: 'rating', label: t('teacherList.filterValues.rating') },
	];

	const handleSearch = () => {
		if (!teachers) return;
		const fuse = new Fuse(teachers, fuseOptions);
		const result = fuse.search(search);
		const finalResult = result.map((item) => item.item);
		setTeachers([...finalResult]);
	};

	const handleSort = (selectedOption: SortOption) => {
		setSorting(selectedOption.value);
		if (selectedOption.value === 'alphabet') {
			const sortedTeachers = [...teachers].sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
			setTeachers(sortedTeachers);
		}
	};

	useEffect(() => {
		if (data) {
			setTeachers(data);
		}
	}, [data]);

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
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button className='bg-blue-500 text-white p-2 text-base rounded-r-lg w-52' onClick={handleSearch}>
						{t('header.button')}
					</button>
				</div>
			</div>
			<div className='bg-stone-100 py-20'>
				{!teachers ? (
					<BounceLoader color='#3575E2' className='absolute left-1/2' />
				) : (
					<div className='max-w-7xl my-0 mx-auto'>
						<div className='flex justify-between'>
							<p className='text-3xl font-bold'>
								{teachers.length} {t('teacherList.teachers')}
							</p>
							<Select
								placeholder={t('teacherList.filter')}
								options={sortOptions}
								className='w-52'
								value={sorting}
								onChange={handleSort}
							/>
						</div>
						<TeacherList teachers={teachers} error={error} />
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchPage;
