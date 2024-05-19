import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/signup", userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data) {
          toast.success("Signup successfully");
        }

        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error(" error " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className=" w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Full Name</span> <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 py-1 px-3 border outline-none rounded-md"
                  {...register("fullname", { required: true })}
                />{" "}
                <br />
                {errors.fullname && (
                  <span className="text-sm text-pink-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span> <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 py-1 px-3 border outline-none rounded-md"
                  {...register("email", { required: true })}
                />{" "}
                <br />
                {errors.email && (
                  <span className="text-sm text-pink-500">
                    This field is required
                  </span>
                )}
              </div>
              <br />
              <div className="-mt-2 space-y-2">
                <span>password</span> <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 py-1 px-3 border outline-none rounded-md"
                  {...register("password", { required: true })}
                />{" "}
                <br />
                {errors.password && (
                  <span className="text-sm text-pink-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex  justify-between mt-4">
                <button className="bg-pink-500 text-white px-3 py-1 hover:bg-pink-700 duration-200 rounded-md">
                  Signup
                </button>
                <p>
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
