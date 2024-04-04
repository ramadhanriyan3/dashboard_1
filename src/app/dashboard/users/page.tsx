"use client";
import Pagination from "@/components/ui/Pagination";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdSearch } from "react-icons/md";

const Users = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 p-5 bg-soft1 rounded-lg mr-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 bg-[#2e374a] rounded-lg p-2">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search for a user"
            className="bg-transparent outline-none"
          />
        </div>
        <button
          type="button"
          className="p-2 rounded-lg text-white bg-blue-500 font-bold"
          onClick={() => router.push("/dashboard/users/addUser")}
        >
          Add item
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td className="py-3">Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/noavatar.png"}
                  alt="ava"
                  width={30}
                  height={30}
                  className="rounded-[50%] object-cover"
                />
                <p>User 1</p>
              </div>
            </td>
            <td>ramadhann@gmail.com</td>
            <td>29/03/2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <Link href={"/"} className=" mx-3">
                <button className="text-white bg-teal-700 px-3 rounded-md">
                  view
                </button>
              </Link>
              <button className="text-white bg-red-700 px-3 rounded-md">
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
