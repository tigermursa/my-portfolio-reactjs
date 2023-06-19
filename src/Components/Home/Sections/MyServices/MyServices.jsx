import React from "react";

const MyServices = ({ service }) => {
  const { serviceName, _id, serviceDetail, image } = service;
  return (
    <div className="w-full md:w-1/4 p-4 ">
      <div className="card bg-base-100 shadow-xl flex flex-col h-full hover:shadow-2xl hover:bg-base-200 hover:-translate-y-1">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center flex-grow">
          <h2 className="card-title font-bold">{serviceName}</h2>
          <p className="font-thin">{serviceDetail}</p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
