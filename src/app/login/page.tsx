import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form
          action="post"
          className="bg-soft1 rounded-lg p-10 min-w-[25%] flex flex-col gap-5"
        >
          <h2 className="font-bold text-4xl font-white text-center py-5">
            Login
          </h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="outline-none bg-primary p-3 rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="outline-none bg-primary p-3 rounded-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-400 font-bold text-lg text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
