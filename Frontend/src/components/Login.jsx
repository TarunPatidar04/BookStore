import React from "react";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <span>Email</span> <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 py-1 px-3 border outline-none rounded-md"
            />
          </div>
          <br />
          <div className="-mt-2 space-y-2">
            <span>password</span> <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 py-1 px-3 border outline-none rounded-md"
            />
          </div>
          <div className="flex  justify-between mt-4">
            <button className="bg-pink-500 text-white px-3 py-1 hover:bg-pink-700 duration-200 rounded-md">
              Login
            </button>
            <p>
              Not registered ?{" "}
              <span className="underline text-blue-500 cursor-pointer">
                Signup
              </span>{" "}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
