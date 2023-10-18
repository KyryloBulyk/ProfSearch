import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ProgressBar from './TimeProgressBar';

const Header = () => {
	const { i18n } = useTranslation();
	const changeLanguage = (language: 'uk' | 'sk') => {
		i18n.changeLanguage(language);
	};

	return (
		<div className='flex justify-between items-center max-w-7xl my-0 mx-auto pt-4'>
			<div>
				<Link to='/'>
					<img
						src='/img/capture.png'
						alt='logo'
						className='h-16 hidden md:inline'
					/>
					<img
						src='/img/sm_logo.png'
						alt='logo'
						className='h-16 md:hidden'
					/>
				</Link>
			</div>
			<div className='flex gap-2 items-center -mt-3'>
				<div className='pr-5 pb-0.5 w-40 md:w-64'>
					<ProgressBar />
				</div>
				<button
					className='bg-yellow-400 text-blue-500 font-bold p-3 rounded'
					onClick={() => changeLanguage('uk')}
				>
					UK
				</button>
				<button
					className='bg-red-500 text-white font-bold p-3 rounded'
					onClick={() => changeLanguage('sk')}
				>
					SK
				</button>
			</div>
		</div>
	);
};

export default Header;
