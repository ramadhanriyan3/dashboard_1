"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  const pathNameList = pathName.split("/");
  console.log(pathNameList);

  return (
    <div className="flex justify-between items-center p-5 rounded-lg bg-soft1 mt-5 mr-5">
      <div className="font-bold text-soft2 capitalize text-[18px]">
        {pathNameList.length > 2 ? pathNameList[2] : pathNameList[1]}
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2 bg-[#2e374a] rounded-lg p-2">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>
        <div className="flex gap-4">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
