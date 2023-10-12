import { BrowserRouter, Routes, Route } from "react-router-dom";
import {FiSettings} from "react-icons/fi";

import { useStateContext, ContextType } from "./contexts/ContextProvider";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Teachers from "./pages/Teachers";
import Comments from "./pages/Comments";
import Dashboard from "./pages/Dashboard";
import "./App.css";


function App() {
  const { isMenuActive } = useStateContext() as ContextType;
  return <div>
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4 z-10">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{backgroundColor: "#d5d5d5d"}}>
              <FiSettings />
            </button>
        </div>
        {isMenuActive ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${isMenuActive ? 'md:ml-72' : 'flex-2'}` }>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/users" element={<Users />}/>
              <Route path="/teachers" element={<Teachers />}/>
              <Route path="/comments" element={<Comments />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>;
}

export default App;
