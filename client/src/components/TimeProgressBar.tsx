import ProgressBar from '@ramonak/react-progress-bar';
import { useTranslation } from 'react-i18next';
import { getStudyWeek } from '../utils';

const TimeProgressBar = () => {
	const { t } = useTranslation();

	return (
		<div className='relative'>
			<p className='text-sm font-bold text-blue-950'>{t('progressBar.header')}</p>
			<ProgressBar
				completed={getStudyWeek()}
				maxCompleted={12}
				width='100%'
				height='30px'
				borderRadius='4px'
				bgColor='#3b82f6'
				customLabel={`${getStudyWeek()}`}
				animateOnRender
			/>
		</div>
	);
};

export default TimeProgressBar;
