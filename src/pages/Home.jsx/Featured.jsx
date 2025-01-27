import useFetch from "../../hooks/useFetch.js";

function Featured() {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Lahore,Islamabad,Karachi");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-10 flex gap-4">
      <Country count={data[0]} city="Lahore" />
      <Country count={data[1]} city="Islamabad" />
      <Country count={data[2]} city="Karachi" />
    </div>
  );
}

export default Featured;

const Country = ({ count, city }) => {
  return (
    <div className="w-1/3 relative h-[300px] flex gap-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mK1ngB_A_Mh419DDdL8A0VxlOC0IfrxDMA&s"
        className="h-full full rounded-2xl"
        alt=""
      />
      <div className="absolute bottom-[5px] left-5 text-white font-bold text-3xl">
        <h1>{city}</h1>
        <h1>{count} Properties</h1>
      </div>
    </div>
  );
};
