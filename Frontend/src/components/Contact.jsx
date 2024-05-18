import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <div className=" mt-48 flex justify-center items-center">
          <form method="" onSubmit={handleSubmit(onSubmit)} className="">
            <h3 className="font-bold text-2xl">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <span>Full Name</span> <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-80 py-1 px-3 border outline-none rounded-md"
                {...register("name", { required: true })}
              />{" "}
              <br />
              {errors.name && (
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
              <span>message</span> <br />
              <input
                type="text"
                placeholder="Enter your message"
                className="w-80 py-1 px-3 border outline-none rounded-md"
                {...register("message", { required: true })}
              />{" "}
              <br />
              {errors.message && (
                <span className=" text-sm text-pink-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 hover:bg-pink-700 duration-200 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
