import { trafficData } from "../constants/utils";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/Button";

/**
 * Home page
 */
const Dashboard = () => {

  return <div className="mt-12">
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-[80%] lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-right ">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Users</p>
            <p className="text-2xl">2034</p>
          </div>
        </div>
        <div className="mt-6">
          <Button color="white" bgColor="#03c9d7" text="View More" borderRadius="10px" size="md"/>
        </div>
      </div>

      <div className="flex flex-wrap m-3 justify-center gap-1 items-center">
        {trafficData.map((item) => (
          <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 rounded-2xl">
            <button type="button" style={{color: item.iconColor, backgroundColor: item.iconBg}} className="text-2xl opacity-0.9 rounded-full p-4 mb-2 hover:drop-shadow-md">
              {item.icon}
            </button>
            <p>
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
            </p>
            <p className="text-sm text-gray-400 mt-0.5">{item.title}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Charts */}
  </div>
};

export default Dashboard;
