import React, { useEffect, useState } from "react";
import NavigationBar from "../../../NavigationBar/NavigationBar";
import Footer from "../../../Footer/Footer";
import MyServices from "./MyServices";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
<MyServices></MyServices>
    </div>
  );
};

export default Services;
