import React, { useEffect, useState } from "react";
import House from "./House";

const Houses = () => {

    const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        console.log(data);
        setHouses(data)
      } catch {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {
        houses.map(eachHouse => <House key={eachHouse.id} house={eachHouse}/>)
      }
    </>
  );
};

export default Houses;
