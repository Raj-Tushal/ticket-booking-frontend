import useFetch from "../../hooks/useFetch.js";

function Featured() {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Lahore,Islamabad,Karachi");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-10 flex gap-4
     max-sm:flex-col ">
      <Country count={data[0]} city="Lahore" img="https://media.istockphoto.com/id/1319269543/photo/new-homes-on-a-quiet-street-in-raleigh-nc.jpg?s=612x612&w=0&k=20&c=qaRMP-xgYqFAXR9aTpiG0dtkyqPhJiTAovvxyG1AxvM=" />
      <Country count={data[1]} city="Islamabad" img="https://st3.depositphotos.com/30630704/32626/i/450/depositphotos_326262574-stock-photo-red-gray-row-houses.jpg" />
      <Country count={data[2]} city="Karachi" img="https://media.istockphoto.com/id/1218272707/photo/winter-sunrise-in-snowy-suburb-in-london-uk.jpg?s=612x612&w=0&k=20&c=opzx7JaCFHvkvJsWzXnH_HAYZ80DIH1SrmohY8vqxSg="  />
    </div>
  );
}

export default Featured;

const Country = ({ count, city,img }) => {
  return (
    <div className="w-1/3 relative h-full flex gap-4
     max-sm:w-full ">
      <img
        src={img}
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
