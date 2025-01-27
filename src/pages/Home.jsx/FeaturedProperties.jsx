import React from 'react'
import useFetch from "../../hooks/useFetch.js";
function FeaturedProperties() {
  const { data, loading, error } = useFetch("/hotels?featuredHotel=true&limit=4&min=1&max=130");
  // console.log(data,"featured hotels")
  const images = [ 
    "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww",
   "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww"

  ]
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='flex gap-2   flex-wrap justify-between pb-5 dark:text-white'>
{data && images.map((img,i)=>{
  return(
    <Card key={i} img={img} name={data[i]?.name} city={data[i].city} startingPrice={data[i]?.cheapestPrice} rating={data[i]?.rating}/>
  )
})}
    </div>
  )
}

export default FeaturedProperties

const Card = ({img,text,desc,name,city,startingPrice,rating}) => {
    return(
        <div className='flex flex-col gap-4  w-1/5 my-4 '>
        <img src={img} alt=""
        className='h-52   rounded-2xl ' />
        <div className='flex flex-col gap-1'>
            <h1 className='font-bold text-lg'>{name}</h1>
            <p> {city}</p>
            <h1 className='font-bold text-lg'> starting from ${startingPrice}</h1>
            <p ><span className="ml-2 bg-blue-700 text-white text-sm font-bold px-2 py-1 rounded">{rating}</span> Excellent</p>
        </div>
     </div>
    )
}