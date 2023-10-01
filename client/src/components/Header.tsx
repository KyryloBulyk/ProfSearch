import { useTranslation } from 'react-i18next';

const Header = () => {
	const { i18n } = useTranslation();
	const changeLanguage = (language: 'uk' | 'sk') => {
		i18n.changeLanguage(language);
	};

	return (
		<div className='flex gap-2 max-w-7xl my-0 mx-auto justify-center pt-2'>
			<button className='bg-yellow-400 text-blue-500 font-bold p-3 rounded' onClick={() => changeLanguage('uk')}>
				UK
			</button>
			<button className='bg-red-500 text-white font-bold p-3 rounded' onClick={() => changeLanguage('sk')}>
				SK
			</button>
		</div>
	);
};

export default Header;
