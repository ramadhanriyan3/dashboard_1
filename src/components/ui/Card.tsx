import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex gap-5 bg-soft1 p-5 rounded-lg w-full cursor-pointer hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-2">
        <span>Total Users</span>
        <span className="font-bold text-2xl">10.723</span>
        <span className="text-sm font-light">
          <span className="text-lime-500">12%</span> More then previous
        </span>
      </div>
    </div>
  );
};

export default Card;
