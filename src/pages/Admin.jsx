import BuyerProfileChart from "../components/BuyerProfileChart";
import Transactions from "../components/Transactions";
import DashboardStatGrid from "./DashboardStatsCharts";

const Admin = () => {
  return (
    <div className=" w-full flex">
      <div>
        <DashboardStatGrid />
        <div className="flex w-full gap-4">
          <Transactions />
          <BuyerProfileChart />
        </div>
      </div>
    </div>
  );
}

export default Admin
