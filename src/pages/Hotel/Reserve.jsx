import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import API from '../../utils/api';

function Reserve({ setOpen }) {
  const navigate = useNavigate()
  const {startDate,endDate } = useSelector((state)=> state.search.dates)

  const [selectedRooms, setSelectedRooms] = useState([]);
  
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/hotels/rooms/${id}`);

  // ON ROOM SELECT
  const handleSelect = (e) => {
    const checked = e.target.checked
    const value = e.target.value

    setSelectedRooms(
      checked ? [...selectedRooms, value] :
        selectedRooms.filter((items) => items !== value)
    )


  }

  const getAllDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const allDates = [];
  
    while (start <= end) {
      allDates.push(new Date(start).toISOString().split("T")[0]); // Format as YYYY-MM-DD
      start.setDate(start.getDate() + 1); // Increment date by 1 day
    }
  
    return allDates;
  };


    // Generate all dates between startDate and endDate
    const alldates = getAllDates(startDate, endDate);
    // console.log(alldates,"alldates")

    let isAvailable = (roomNumber) => {
      const isFound = roomNumber.unavailableDates.some((date) =>
        alldates.includes(new Date(date).toISOString().split("T")[0]) // Format both dates as YYYY-MM-DD
      );
    
      return !isFound;
    };

  // ON REGISTER
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = API.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#0000008a] z-[1000] flex items-center justify-center">
      {/* Modal Container */}
      <div className="w-[90%] max-w-[600px] bg-white dark:bg-[#1E1E1E] p-6 rounded-md shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-red-500 hover:text-red-600"
          onClick={() => setOpen(false)}
        >
          X
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Select your rooms:
        </h2>

        {/* Room Options */}
        <div className="space-y-4">
          {data.map((room) => {
            return (
              <>
                {/* Room Option 1 */}
                <div key={room._id} className="p-4 border border-gray-300 dark:border-gray-700 rounded-md flex justify-between items-center">
                  <div>
                    <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                      {room.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {room.desc}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Max people: {room.maxPeople}
                    </p>
                    <p className="text-md font-bold mt-2 text-gray-800 dark:text-gray-100">
                      ${room.price}
                    </p>
                  </div>
                  {/* Checkboxes */}
                  <div className="flex justify-center gap-2 items-center space-x-2">
                    {room.roomNumbers.map((roomNumber) => {
                      return (
                        <div key={roomNumber._id} className='flex items-center flex-col justify-center gap-2'>
                          <label className="text-sm text-gray-700 dark:text-gray-300">{roomNumber.number}</label>
                          <input type="checkbox"
                           value={roomNumber._id} className="w-4 h-4"
                            onChange={handleSelect}
                            disabled={!isAvailable(roomNumber)}
 />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </>
            )
          })}

        </div>

        {/* Reserve Now Button */}
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-3 rounded-md text-md font-semibold hover:bg-blue-700"
            onClick={handleClick}>
            Reserve Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;

