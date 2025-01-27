import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Apartment from "./Apartment"
import ApartmentDetail from "./ApartmentDetail"
import { useState } from "react";
import Reserve from "./Reserve.jsx";


function index() {
  const [open, setOpen] = useState(false);
  const childDataHandler = (openModel)=>{
    setOpen(openModel)
    console.log(open)
  }
  const {id} = useParams()
  const {data,loading,error}=useFetch(`/hotels/find/${id}`)
  return (
    <div className="dark:bg-[#121212] pb-10 relative" >
        <Apartment data={data}/>
        <ApartmentDetail data={data} sendToParent={childDataHandler}/>
        {
    open && <Reserve  setOpen={setOpen}/>
   }
    </div>

  )
}

export default index