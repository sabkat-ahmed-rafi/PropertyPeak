import React, { useEffect, useState } from "react";
import House from "./House";

const Houses = () => {

    const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setHouses(data)
      } catch {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <section className="flex flex-col items-center justify-center mt-10 space-y-3">
      <h1 className="text-4xl font-bold text-slate-900">Estate</h1>
      <p className="text-slate-700 text-center">Discover an array of residential properties that cater to your lifestyle preferences. <br /> From cozy apartments in vibrant city centers to sprawling suburban homes nestled amidst nature.</p>
    </section>
      <section className="flex flex-wrap mx-6 gap-16 justify-center">
      {
        houses.map(eachHouse => <House key={eachHouse.id} house={eachHouse}/>)
      }
      </section>
    </>
  );
};

export default Houses;
