import React, { useEffect, useState } from "react";
import NavigationBar from "../../../NavigationBar/NavigationBar";
import Footer from "../../../Footer/Footer";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {services.map((service) => (
          <div
            key={service._id}
            className="card bg-base-100 shadow-xl flex flex-col h-full hover:shadow-2xl hover:bg-base-200 hover:-translate-y-1"
          >
            <figure className="px-10 pt-10">
              <img src={service.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center flex-grow">
              <h2 className="card-title font-bold">{service.serviceName}</h2>
              <p className="font-thin">{service.serviceDetail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
