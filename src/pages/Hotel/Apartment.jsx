import React from 'react';

const ApartmentCard = ({data}) => {
  return (
    <div className="max-w-6xl mx-auto  p-4">
      <h1 className="text-2xl font-bold dark:text-white">{data.name}</h1>
      <p className="text-gray-600">📍 {data.address}</p>
      <p className="text-green-600 font-semibold">
        Excellent location – 500m from center
      </p>
      <p className="text-blue-500 mt-2">
        Book a stay over $114 at this property and get a free airport taxi
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
       <Img source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5coJBJQf1_NtsyqHdQ7yNStuHzHF-VeqTA&s"/>
       <Img source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5coJBJQf1_NtsyqHdQ7yNStuHzHF-VeqTA&s"/>
       <Img source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5coJBJQf1_NtsyqHdQ7yNStuHzHF-VeqTA&s"/>
       <Img source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5coJBJQf1_NtsyqHdQ7yNStuHzHF-VeqTA&s"/>
       <Img source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5coJBJQf1_NtsyqHdQ7yNStuHzHF-VeqTA&s"/>
       <Img source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5coJBJQf1_NtsyqHdQ7yNStuHzHF-VeqTA&s"/>
      </div>
      <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Reserve or Book Now!
      </button>
    </div>
  );
};

export default ApartmentCard;

const Img = ({source})=>{
    return(
        <img
        src={source}
        alt="Apartment 1"
        className="rounded-lg"
      />
    )
}