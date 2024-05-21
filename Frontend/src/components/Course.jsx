import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";
const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center  justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
          Welcome to our courses library! <br />
            <span className="text-pink-500"> Explore and enrich your knowledge &#41; </span>
          </h1>
          <p className="mt-12 ">
          Dive into our vast collection of books covering various topics and genres. Whether you're
          interested in expanding your skills, exploring new hobbies, or delving into captivating
          stories, we have something for everyone. Start your journey today and unlock the door to
          endless learning possibilities.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6 cursor-pointer">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 mt-12 ">
          {book.map((item) => (
            <Cards key={item} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
