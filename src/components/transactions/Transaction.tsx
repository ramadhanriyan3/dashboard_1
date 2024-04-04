import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-soft1 p-5 rounded-lg">
      <h2 className="mb-5 font-semibold text-soft2 text-lg">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="py-3">Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr className="p-2">
            <td className="flex gap-2 items-center py-2">
              <Image
                src={"/noavatar.png"}
                alt=""
                width={30}
                height={30}
                className="rounded-[50%] object-cover"
              />
              <p>John Doe</p>
            </td>
            <td>
              <span className="rounded-md  p-[5px] text-xs text-white bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          {/* ini contoh cancel: #f7737375, done: #afd6ee75  */}
          <tr className="p-2">
            <td className="flex gap-2 items-center py-2">
              <Image
                src={"/noavatar.png"}
                alt=""
                width={30}
                height={30}
                className="rounded-[50%] object-cover"
              />
              <p>John Doe</p>
            </td>
            <td>
              <span className="rounded-md p-[5px] text-xs text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
