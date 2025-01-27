import React from 'react'

function HotelCard({hotel}) {
  return (
    
        <div className="flex h-fit bg-white dark:bg-[#1E1E1E] shadow-md gap-5 rounded-lg p-4">
            {/* Image Section */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlc8LkNIbkTZOM5hLhY4HpDnkWR0_KcJROQ&s" // Replace with actual image URL
              alt="Apartment"
              className="w-40  rounded-lg object-cover"
            />
      
            {/* Content Section */}
            <div className="flex-1 px-4">
              {/* Title and Distance */}
              <div className="flex justify-between gap-2">
                <h2 className="text-xl font-bold text-blue-600">Tower Street Apartments</h2>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 dark:text-white">Excellent</span>
                  <div className="ml-2 bg-blue-700 text-white text-sm font-bold px-2 py-1 rounded">
                    8.9
                  </div>
                </div>
              </div>
              <p className="text-gray-500 mt-1">500m from center</p>
      
              {/* Badge */}
              <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-1 rounded inline-block mt-2">
                Free airport taxi
              </span>
      
              {/* Description */}
              <p className="mt-3 font-bold dark:text-white">Studio Apartment with Air conditioning</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Entire studio • 1 bathroom • 21m² 1 full bed
              </p>
      
              {/* Cancellation Info */}
              <p className="mt-3 text-green-600 font-bold">Free cancellation</p>
              <p className="text-sm text-green-600">
                You can cancel later, so lock in this great price today!
              </p>
            </div>
      
            {/* Pricing Section */}
            <div className="flex flex-col items-end justify-end">
              <p className="text-2xl font-bold dark:text-white">${hotel.cheapestPrice}</p>
              <p className="text-sm text-gray-500 dark:text-white">Includes taxes and fees</p>
              <Link to={`/hotel/${hotel._id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
                See availability
              </button>
              </Link>
            </div>
        </div>
        )
    }
  

export default HotelCard