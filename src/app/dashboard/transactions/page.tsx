import LatestTransactions from "@/components/transactions/Transaction";

const Transactions = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mr-5">
        <LatestTransactions />
      </div>
    </>
  );
};

export default Transactions;
