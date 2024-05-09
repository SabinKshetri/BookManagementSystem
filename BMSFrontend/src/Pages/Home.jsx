import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import BookCard from "../components/BookCard";
import axios from "axios";

const Home = () => {
  const [book, setBook] = useState([]);
  const fetchBook = async () => {
    const response = await axios.get("http://localhost:8080/book");
    setBook(response.data.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <>
      <NavBar />
      <div className="flex justify-evenly gap-3 flex-wrap">
        {book.length > 0 &&
          book.map((item) => {
            return <BookCard item={item} />;
          })}
      </div>
    </>
  );
};

export default Home;
