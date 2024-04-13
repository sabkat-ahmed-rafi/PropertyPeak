import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const House = ({ house }) => {
  const { relevant_image, estate_title, segment_name, description, price, status, area, location, facilities, id } = house;

  return (
    <>
      <section data-aos="slide-left" className="flex flex-col flex-grow mt-10 w-[40%] border-4 p-6 space-y-3">
        <div>
          <img src={relevant_image} alt="house" className="" />
        </div>
        <h1 className="text-3xl font-bold flex-grow">{estate_title}</h1>
        <p className="text-slate-600">{description}</p>
            <div className="flex justify-between">
            <p className="text-xl font-semibold">{price}</p>
            <p className="text-xl font-semibold">{location}</p>
            </div>
        <div className="flex justify-evenly">
            <p className="bg-red-300 py-1 px-2 rounded  font-bold">{segment_name}</p>
            <p className="bg-green-300 py-1 px-2 rounded  font-bold">{status}</p>
            <p className="bg-blue-300 py-1 px-2 rounded  font-bold">{area}</p>
        </div>
        <div>
            <ul className="flex justify-between">
                {
                    facilities.map(facility => <li key={facility.id} className="bg-purple-300 gap-2 text-sm py-1 px-2 rounded font-bold">{facility}</li>)
                }
            </ul>
        </div>
                <Link to={`/house/${id}`}><button className="btn w-full bg-slate-900 hover:text-black hover:font-extrabold text-white">View Details</button></Link>
      </section>
    </>
  );
};

export default House;
