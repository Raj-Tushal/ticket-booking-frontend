import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newSearch } from "../../redux/Slices/searchSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

  // State for destination, startDate, endDate, and guests
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const searchHandler = () => {
    // Dispatching the search details to Redux
    dispatch(
      newSearch({
        destination,
        dates: { startDate, endDate },
        options: { adults, children, rooms },
      })
    );
    console.log(state, "search state");

    // Navigating to Results page with state
    navigate("/Result", {
      state: {
        destination,
        dates: { startDate, endDate },
        options: { adults, children, rooms },
      },
    });
  };

  return (
    <div className="bg-red-800">
      <div className="w-full h-fit py-16 px-20 bg-[#003173] dark:bg-[#1E1E1E] flex flex-col justify-center text-white gap-4">
        <h1 className="text-6xl font-bold">
          A lifetime of discounts? It's Genius
        </h1>
        <p className="text-lg">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <Link to={"/login"}>
          <button className="bg-white p-2 w-fit rounded-lg text-blue-700 dark:text-black">
            Sign in or create an account
          </button>
        </Link>
      </div>

      {/* Input Section */}
      <div className="w-full h-[60px] absolute z-[1000] top-[440px] justify-center flex gap-4 rounded-lg">
        <div className="flex mx-20 gap-1 justify-center w-full bg-yellow-700 p-1 rounded-xl">
          {/* Destination Input */}
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full rounded-lg p-2"
            onChange={(e) => setDestination(e.target.value)}
          />

          {/* Start Date Input */}
          <input
            type="date"
            placeholder="Start date"
            className="rounded-lg p-2"
            onChange={(e) => setStartDate(e.target.value)}
          />

          {/* End Date Input */}
          <input
            type="date"
            placeholder="End date"
            className="rounded-lg p-2"
            onChange={(e) => setEndDate(e.target.value)}
          />

          {/* Guests Dropdown */}
          <div className="relative  bg-red-700 ">
            <button
              onClick={() => setShowGuestsDropdown((prev) => !prev)}
              className="rounded-lg p-2 text-blue-700 bg-white dark:bg-white dark:text-black"
            >
              {`${adults} adult${adults > 1 ? "s" : ""}, ${children} child${
                children > 1 ? "ren" : ""
              }, ${rooms} room${rooms > 1 ? "s" : ""}`}
            </button>

            {showGuestsDropdown && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 z-10">
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
                <div className="flex justify-between items-center mb-2">
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
                  className="mt-4 bg-blue-700 text-white p-2 rounded"
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
            className="flex gap-4 rounded-lg p-2 text-blue-700 bg-white dark:bg-white dark:text-black"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
