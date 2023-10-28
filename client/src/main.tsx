// import 'profsearch-ui-kit/dist/index.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import App from './App.tsx';
import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<BounceLoader color='#3575E2' className='absolute left-1/2 top-2/4' />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
);
