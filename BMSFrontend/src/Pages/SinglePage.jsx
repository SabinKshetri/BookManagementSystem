import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const { id } = useParams();
  const [singlebook, setSinglebook] = useState([]);
  console.log(id);
  const fetchsingleBook = async () => {
    const response = await axios.get(`http://localhost:8080/book/${id}`);
    if (response.status === 200) {
      setSinglebook(response.data.data);
    }
  };
  useEffect(() => {
    fetchsingleBook();
  }, []);

  return (
    <>
      <NavBar />
      <div className="max-w-sm mt-20 rounded overflow-hidden shadow-lg">
        <img className="w-full h-1/2 " src={singlebook.imageUrl} alt="img" />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2 overflow-hidden">
            {singlebook.bookName}
            <p>RS{singlebook.bookPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
