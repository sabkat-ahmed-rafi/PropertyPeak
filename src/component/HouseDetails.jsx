import React from "react";
import { useLoaderData } from "react-router-dom";

const HouseDetails = () => {
  const house = useLoaderData();
  const {
    relevant_image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    id,
  } = house;

  return (
    <>
      <section className="text-center text-3xl font-bold my-14">
        Proverty Details
      </section>
      <section className="mt-10 mx-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={relevant_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {estate_title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              April 10, 2024
            </span>
            <p>{description}</p>
            <div className="flex justify-between">
              <p className="text-xl font-semibold">{price}</p>
              <p className="text-xl font-semibold">{location}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="bg-red-300 py-1 px-2 rounded  font-bold">
                {segment_name}
              </p>
              <p className="bg-green-300 py-1 px-2 rounded  font-bold">
                {status}
              </p>
              <p className="bg-blue-300 py-1 px-2 rounded  font-bold">{area}</p>
            </div>
            <div>
            <ul className="flex justify-between">
                {
                    facilities.map(facility => <li key={facility.id} className="bg-purple-300 gap-2 text-sm py-1 px-2 rounded font-bold">{facility}</li>)
                }
            </ul>
        </div>
          </div>
        </a>
      </section>
    </>
  );
};

export default HouseDetails;
