import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newSearch } from "../../redux/Slices/searchSlice";
import { FaWindowClose } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const searchHandler = () => {
    dispatch(
      newSearch({
        destination,
        dates: { startDate, endDate },
        options: { adults, children, rooms },
      })
    );

    navigate("/Result", {
      state: {
        destination,
        dates: { startDate, endDate },
        options: { adults, children, rooms },
      },
    });
  };

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="bg-[#003173] dark:bg-[#1E1E1E] text-white py-16 px-10 md:px-20 flex flex-col items-center gap-4 ">
        <h1 className="text-3xl md:text-6xl font-bold text-center
        max-sm:text-5xl">
          A lifetime of discounts? It's Genius
        </h1>
        <p className="text-sm md:text-lg text-center">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Booking.com account.
        </p>
       <div className="flex   items-center gap-5 justify-center"> 
       <Link to={"/login"}>
          <button className="bg-white px-4 py-2 rounded-lg text-blue-700 dark:text-black mt-2">
            Sign In
          </button>
          </Link>
          <button onClick={() => setPopUp(true)} className="bg-white px-4 py-2 rounded-lg text-blue-700 dark:text-black mt-2">
            Search 
          </button>
       </div>
      
      </div>

      {/* Input Section */}
     {popUp ? (
       <div className="fixed  top-0 w-full flex justify-center z-10 bg-[#0000009c] dark:bg-[#fbf6f636] h-screen bottom-0  ">
       <div className=" fixed top-1/3 w-[500px] h-1/2 px-8  bg-white dark:bg-[#1f1e1e] shadow-md rounded-lg p-4 flex flex-col gap-4
       max-sm:w-[90%] max-sm:h-fit  ">
       {/* close btn */}
       <FaWindowClose onClick={() => setPopUp(false)}  className="absolute text-red-500 size-5 top-2 right-2 text-3xl   cursor-pointer" />
         {/* Destination Input */}
         <input
           type="text"
           placeholder="Where are you going?"
           className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onChange={(e) => setDestination(e.target.value)}
         />

         {/* Start Date Input */}
         <input
           type="date"
           className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onChange={(e) => setStartDate(e.target.value)}
         />

         {/* End Date Input */}
         <input
           type="date"
           className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onChange={(e) => setEndDate(e.target.value)}
         />

         {/* Guests Dropdown */}
         <div className="relative">
           <button
             onClick={() => setShowGuestsDropdown((prev) => !prev)}
             className="w-full md:w-auto border rounded-lg p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
           >
             {`${adults} adult${adults > 1 ? "s" : ""}, ${children} child${
               children > 1 ? "ren" : ""
             }, ${rooms} room${rooms > 1 ? "s" : ""}`}
           </button>
           {showGuestsDropdown && (
             <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 mt-2 z-20 w-full md:w-auto">
               {/* Adults */}
               <div className="flex justify-between items-center mb-2">
                 <span>Adults</span>
                 <div className="flex items-center gap-2">
                   <button
                     className="bg-gray-200 px-2 rounded"
                     onClick={() => setAdults((prev) => Math.max(prev - 1, 1))}
                   >
                     -
                   </button>
                   <span>{adults}</span>
                   <button
                     className="bg-gray-200 px-2 rounded"
                     onClick={() => setAdults((prev) => prev + 1)}
                   >
                     +
                   </button>
                 </div>
               </div>

               {/* Children */}
               <div className="flex justify-between items-center mb-2">
                 <span>Children</span>
                 <div className="flex items-center gap-2">
                   <button
                     className="bg-gray-200 px-2 rounded"
                     onClick={() => setChildren((prev) => Math.max(prev - 1, 0))}
                   >
                     -
                   </button>
                   <span>{children}</span>
                   <button
                     className="bg-gray-200 px-2 rounded"
                     onClick={() => setChildren((prev) => prev + 1)}
                   >
                     +
                   </button>
                 </div>
               </div>

               {/* Rooms */}
               <div className="flex justify-between items-center">
                 <span>Rooms</span>
                 <div className="flex items-center gap-2">
                   <button
                     className="bg-gray-200 px-2 rounded"
                     onClick={() => setRooms((prev) => Math.max(prev - 1, 1))}
                   >
                     -
                   </button>
                   <span>{rooms}</span>
                   <button
                     className="bg-gray-200 px-2 rounded"
                     onClick={() => setRooms((prev) => prev + 1)}
                   >
                     +
                   </button>
                 </div>
               </div>
               <button
                 className="mt-4 bg-blue-700 text-white px-4 py-2 rounded"
                 onClick={() => setShowGuestsDropdown(false)}
               >
                 Done
               </button>
             </div>
           )}
         </div>

         {/* Search Button */}
         <button
           onClick={searchHandler}
           className="w-full md:w-auto bg-blue-700 text-white px-4 py-2 rounded-lg"
         >
           Search
         </button>
       </div>
     </div>
     ):("")}
    </div>
  );
}

export default Header;
