import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ item }) => {
  return (
    <>
      <div
        className="max-w-sm mt-20 rounded overflow-hidden shadow-lg"
        key={item._id}
      >
        <img className="w-full h-1/2 " src={item.imageUrl} alt="img" />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2 overflow-hidden">
            {item.bookName}
            <p>RS{item.bookPrice}</p>
            <Link to={`/single/${item._id}`}>See More</Link>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default BookCard;
