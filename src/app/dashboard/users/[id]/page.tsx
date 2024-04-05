import Image from "next/image";
import { userData } from "@/lib/dummyData";

const UserById = ({ params }: { params: { id: string } }) => {
  const user = userData.find((item) => item.id === params.id);

  return (
    <div className="bg-soft1 mr-5 rounded-lg p-5">
      <form name="product-form" action="post" className="flex flex-col gap-5">
        <div className="flex justify-start gap-5">
          <div className="w-3/12">
            <Image
              src={"/noavatar.png"}
              alt=""
              height={300}
              width={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col w-9/12 gap-5">
            <div className="flex flex-col gap-3 justify-start w-full">
              <label htmlFor="Username" className="font-bold">
                Username
              </label>
              <input
                type="text"
                name="Username"
                id="Username"
                placeholder="Username"
                className="outline-none bg-primary p-3 rounded-sm"
                defaultValue={user!.name}
              />
              <div className="flex flex-col gap-3 justify-start w-full">
                <label htmlFor="Email" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  defaultValue={user!.email}
                  placeholder="Email"
                  className="outline-none bg-primary p-3 rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-3 justify-start w-full">
                <label htmlFor="Password" className="font-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  placeholder="Password"
                  className="outline-none bg-primary p-3 rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-3 justify-start w-full">
                <label htmlFor="Phone number" className="font-bold">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="Phone number"
                  id="Phone number"
                  placeholder="Phone number"
                  className="outline-none bg-primary p-3 rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-start w-full">
              <label htmlFor="role" className="font-bold">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="outline-none bg-primary p-3 rounded-sm text-[18px]"
                defaultValue={user!.role}
              >
                <option value="">Choose a Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <div className="flex flex-col gap-3 justify-start w-full">
                <label htmlFor="status" className="font-bold">
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  className="outline-none bg-primary p-3 rounded-sm text-[18px]"
                  defaultValue={user!.status}
                >
                  <option value="">Choose a Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <button className="bg-teal-400 font-bold text-lg text-white p-3 rounded-lg mt-3">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserById;
