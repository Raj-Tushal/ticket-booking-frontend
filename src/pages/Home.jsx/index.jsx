import EmailList from "../../components/EmailList.jsx";
import Featured from "./Featured.jsx";
import FeaturedProperties from "./FeaturedProperties.jsx";
import Header from "./Header.jsx";
import PropertyList from "./PropertyList.jsx";

function index() {
  return (
    <div className="w-full    ">
      <Header />

{/* Home container */}
      <div className="px-20 dark:bg-[#121212] dark:text-white">
        <Featured />
        <h1 className="text-3xl font-bold my-7">Browse By Property Type</h1>
        <PropertyList />
        <h1 className="text-3xl font-bold my-7">Homes Guests Love</h1>
        <FeaturedProperties />
      </div>

  
    </div>
  );
}

export default index;
