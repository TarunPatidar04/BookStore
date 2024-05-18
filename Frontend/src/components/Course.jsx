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
        console.log(res.data);
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
            We're deligathed to have you{" "}
            <span className="text-pink-500">Here : &#41; </span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consectetur pariatur debitis necessitatibus esse accusamus iste,
            quis aliquam culpa vitae suscipit laudantium tenetur iure temporibus
            numquam ex ipsam? Cum, quod. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo magnam, soluta dolor modi debitis
            numquam voluptatem earum fugiat esse nostrum?
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
