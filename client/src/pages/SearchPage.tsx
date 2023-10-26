import Fuse from 'fuse.js';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import Select, { SingleValue } from 'react-select';
import BounceLoader from 'react-spinners/BounceLoader';
import TeacherList from '../components/TeacherList';
import { fuseOptions } from '../utils';
import { Teacher } from '../types';
import api from '../api/teachers';

type OptionType = {
    value: string;
    label: string;
};

const SearchPage = () => {
    const { t } = useTranslation();
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [search, setSearch] = useState('');
    const [sorting, setSorting] = useState<OptionType>();
    const lastElementRef = useRef(null);
    const { fetching, error } = useFetching(async () => {
        const { data } = await api.get('/teachers');
        setTeachers(data);
    });

    useEffect(() => {
        fetching();
    }, []);

    const sortOptions: OptionType[] = [
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

    const handleSort = (selectedOption: SingleValue<OptionType>) => {
        if (!selectedOption || !teachers) return;
        setSorting(selectedOption);
        if (selectedOption.value === 'alphabet') {
            const sortedTeachers = [...teachers].sort((a, b) => {
                if (a.surname < b.surname) {
                    return -1;
                }
                if (a.surname > b.surname) {
                    return 1;
                }
                return 0;
            });
            setTeachers(sortedTeachers);
        }
    };

    return (
        <div>
            <div className='mx-auto my-0 max-w-7xl px-4 py-24'>
                <h1 className='text-4xl font-bold md:text-6xl'>
                    {t('header.title')}
                    {/* Find the Right <span className='text-blue-600'>Teacher</span> for You */}
                </h1>
                <p className='pt-2 text-sm md:text-lg'>{t('header.subtitle')}</p>
                <div className='flex pt-10'>
                    <input
                        type='text'
                        className='-mr-1 w-full rounded-l-lg border border-zinc-300 p-2 text-sm duration-100 focus:outline-blue-500 md:p-4 md:text-base'
                        placeholder={t('header.inputPlaceholder')}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className='w-52 rounded-r-lg bg-blue-500 p-2 text-sm text-white md:text-base'
                        onClick={handleSearch}
                    >
                        {t('header.button')}
                    </button>
                </div>
            </div>
            <div className='bg-stone-100 px-4 py-20'>
                {!teachers ? (
                    <BounceLoader color='#3575E2' className='absolute left-1/2' />
                ) : (
                    <div className='mx-auto my-0 max-w-7xl'>
                        <div className='flex items-center justify-between'>
                            <p className=' text-xl font-bold md:text-3xl'>
                                {teachers.length} {t('teacherList.teachers')}
                            </p>
                            <Select
                                placeholder={t('teacherList.filter')}
                                options={sortOptions}
                                className='w-52'
                                value={sorting}
                                onChange={(selectedOption: SingleValue<OptionType>) =>
                                    handleSort(selectedOption as OptionType)
                                }
                            />
                        </div>
                        <TeacherList teachers={teachers} error={error} />
                        <div className='h-5' ref={lastElementRef}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
