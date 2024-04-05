import Card from "@/components/ui/Card";
import Chart from "@/components/ui/Chart";
import LatestTransactions from "../../components/transactions/Transaction";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5 mr-5">
      <div className="flex justify-between gap-5">
        <Card />
        <Card />
        <Card />
      </div>
      <LatestTransactions />
      <Chart />
    </div>
  );
};

export default Dashboard;
