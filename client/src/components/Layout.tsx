import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
	return (
		<div className='px-4'>
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;
