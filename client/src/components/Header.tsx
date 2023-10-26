import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import TimeProgressBar from './TimeProgressBar';

const Header = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (language: 'uk' | 'sk') => {
        i18n.changeLanguage(language);
    };

    return (
        <div className='mx-auto my-0 flex max-w-7xl items-center justify-between px-3 py-5'>
            <div>
                <Link to='/'>
                    <img src='/img/capture.png' alt='logo' className='hidden h-14 md:inline' />
                    <img src='/img/sm_logo.png' alt='logo' className='h-14 md:hidden' />
                </Link>
            </div>
            <div className='-mt-3 flex items-center gap-2'>
                <div className='w-40 pb-0.5 pr-5 sm:w-64'>
                    <TimeProgressBar />
                </div>
                <button
                    className='rounded bg-yellow-400 p-3 font-bold text-blue-500'
                    onClick={() => changeLanguage('uk')}
                >
                    UK
                </button>
                <button className='rounded bg-red-500 p-3 font-bold text-white' onClick={() => changeLanguage('sk')}>
                    SK
                </button>
            </div>
        </div>
    );
};

export default Header;
