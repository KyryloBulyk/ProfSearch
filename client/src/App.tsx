import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SearchPage from './pages/SearchPage';
import TeacherPage from './pages/TeacherPage';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<SearchPage />} />
				<Route path='teacher' element={<TeacherPage />} />
				<Route path='teachers/:id' element={<TeacherPage />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
