"use client";

import Image from "next/image";
import Link from "next/link";
import { sidebarItems } from ".";
import { MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col gap-5 pt-4 sticky min-h-screen">
      <div className="flex gap-5 items-center mb-[20px]">
        <Image
          src={"/noavatar.png"}
          alt="ava"
          width={50}
          height={50}
          className="rounded-[50%] object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-[18px]">Admin</p>
          <p className="text-[16px] text-soft2">Administrator</p>
        </div>
      </div>
      <div>
        <ul>
          {sidebarItems.map((cat) => (
            <li key={cat.title}>
              <span className={`font-bold text-soft2 my-2 text-[13px]`}>
                {cat.title}
              </span>
              {cat.list.map((item) => (
                <Link key={item.title} href={item.path}>
                  <div
                    className={`flex gap-2 items-center pl-3 py-3 my-2 rounded-lg hover:bg-[#2e374a] ${
                      pathName === item.path ? "bg-[#2e374a]" : ""
                    }`}
                  >
                    {item.icon}
                    <p> {item.title}</p>
                  </div>
                </Link>
              ))}
            </li>
          ))}
          <button
            type="button"
            onClick={() => {
              confirm("yakin mau keluar?");
            }}
            className="flex w-full gap-2 items-center pl-3 p-3 my-2 rounded-lg hover:bg-[#2e374a]"
          >
            <MdLogout />
            <p>Logout</p>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
