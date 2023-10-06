import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import BounceLoader from 'react-spinners/BounceLoader';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<BounceLoader color='#3575E2' className='absolute top-2/4 left-1/2' />}>
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);
