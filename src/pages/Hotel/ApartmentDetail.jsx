import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
const ApartmentDetail = ({ data,sendToParent}) => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const {dates,options} = useSelector((state)=> state.search)
  const {isAuthenticated} = useSelector((state)=> state.auth)
  // Calculate the number of nights
  const startDate = new Date(dates?.startDate);
  const endDate = new Date(dates?.endDate);
  const nights = Math.max(
    Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)),
    0
  );

  const reserveHandler = () => {
  if (isAuthenticated) {
setOpenModal(true)
sendToParent(openModal)
  } else {
    navigate("/login")
  }
  }
  return (
    <div className="flex flex-col mx-20 lg:flex-row items-start  bg-gray-50 dark:bg-[#1E1E1E] p-6 gap-5 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="flex-1 mb-6 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Stay in the heart of City</h2>
        <p className="text-gray-700 dark:text-gray-400">
          {data.desc}
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Perfect for a {nights}-night stay!</h3>
        <p className="text-sm text-gray-700 mb-4">
          Located in the real heart of Krakow, this property <br /> has an excellent location score of 9.8!
        </p>
        <p className="text-2xl font-bold text-gray-900 mb-4">${nights * data.cheapestPrice *options.rooms }  <span className="text-sm text-gray-600">({nights} nights)</span></p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        onClick={reserveHandler}>
          Reserve or Book Now!
        </button>
      </div>
    </div>
  );
};

export default ApartmentDetail;
