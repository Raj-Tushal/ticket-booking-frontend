import Button from "./Button";
import { FaBed } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";
import { IoCarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux/Slices/themeSlice'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { logout } from "../redux/Slices/auth";
import toast from "react-hot-toast";
import { useState } from "react";
function Navbar() {
  const dispatch = useDispatch()
  const light = useSelector((state) => state.themeReducer.light);
  const { isAuthenticated } = useSelector((state) => state.auth)

  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu)

  // logOutHandler
const logOutHandler = ()=>{
  dispatch(logout())
  localStorage.removeItem("token")
  toast.success("Logout Success")
}

  return (
    <>
      <div className="w-full   bg-[#003173] dark:bg-[#1E1E1E] px-20
      max-md:px-5">
        {/* top */}
        <div className="w-full h-16 bg-[#003173]  dark:bg-[#1E1E1E]   text-white flex justify-between py-12 items-center
        ">
          <Link to="/">
            <h1 className="text-3xl font-bold">Booking App</h1>
          </Link>
          <div className={` ${showMenu ? " max-sm:block" : "max-sm:hidden"} flex gap-4 items-center p-2 rounded-xl bg-[#17437c]
          max-sm:absolute top-[110px] max-sm:z-10 right-8 max-sm:flex-col max-sm:items-start max-sm:pr-8 max-sm:p-2 max-sm:rounded-lg max-sm:py-5 max-sm:flex
          max-sm:bg-[#4081d6] dark:bg-[#363636]`}>
            <button className="text-3xl" onClick={() => dispatch(changeTheme())}>{light ? <MdDarkMode /> : <MdOutlineDarkMode />}</button>
              <img src={isAuthenticated ? "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg":"https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"}
              className="w-10 h-10 rounded-full"  
              alt="" />
            {isAuthenticated ? (<Link to={"/login"}><button onClick={logOutHandler}>Logout</button></Link>)
              : (
                <>
                  <Link to={"/login"}>
                    <Button text="Login" />
                  </Link>
                  <Link to={"/Register"}>
                    <Button text="Register" />
                  </Link>
                </>
              )
            }
          </div>
          <FaBars onClick={()=>setShowMenu(!showMenu)} className="text-3xl max-sm:block sm:hidden" />
        </div>

        {/* bottom */}
        <div className="w-full max-sm:hidden  h-20 gap-12 flex-wrap py-5 flex text-white font-bold">
          <Btn text="Stays" icon={<FaBed />} />
          <Btn text="Flights" icon={<MdOutlineFlight />} />
          <Btn text="Cars" icon={<IoCarSharp />} />
          <Btn text="Hotels" icon={<LiaHotelSolid />} />

        </div>
      </div>
    </>
  );
}

export default Navbar;

function Btn({ text, icon }) {
  return (
    <button className="flex gap-2  items-center border-2 border-white rounded-xl px-2 ">
      {icon}
      {text}
    </button>
  );
}
