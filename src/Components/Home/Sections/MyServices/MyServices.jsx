import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie";
import webdevelopment from "../../../../../public/lottie/21367-green-background-webdevelopment.json";
import responsive from "../../../../../public/lottie/-responsive-design.json";
import frontend from "../../../../../public/lottie/frontend.json";
import singlepage from "../../../../../public/lottie/single.json";
const MyServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: webdevelopment,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: responsive,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: frontend,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: singlepage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const servicesData = [
    {
      _id: 1,
      serviceName: "Custom Website Development",
      serviceDetail:
        "Develop and design tailor-made websites to meet specific client requirements using HTML, CSS, React, and JavaScript.",
      image:
        "https://www.zibtek.com/blog/content/images/2020/03/Yellow-Modern-Creative-Corporate-Social-Media-Strategy-Presentation--7-.png",
    },
    {
      _id: 2,
      serviceName: "Responsive Web Design",
      serviceDetail:
        "Create websites that seamlessly adapt to different screen sizes and devices, ensuring optimal user experience across desktop, tablet, and mobile.",
      image:
        "https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png",
    },
    {
      _id: 3,
      serviceName: "Front-End Development",
      serviceDetail:
        "Offer expertise in building interactive user interfaces (UI) and engaging user experiences (UX) using HTML, CSS, React, and JavaScript.",
      image:
        "https://contentstatic.techgig.com/photo/76496481/6-Things-front-end-developers-should-learn-in-2020.jpg",
    },
    {
      _id: 4,
      serviceName: "Single-Page Application (SPA) Development",
      serviceDetail:
        "Develop modern, dynamic web applications using React to create fast and seamless user experiences.",
      image:
        "https://aglowiditsolutions.com/wp-content/uploads/2019/07/Single-Page-Application.png",
    },
  ];

  return (
    <div className="mt-40 mb-40 flex flex-col justify-center items-center mx-auto">
      <div></div>
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 p-5">
        My Services{" "}
        <div className="typing-animation">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </h1>
      <div className=" flex gap-4 p-4  w-full justify-center  flex-col items-center md:flex-row">
        <div
          data-aos="fade-right"
          className="w-full md:w-96 rounded-xl shadow-xl border-2 border-blue-500 hover:border-white hover:bg-cyan-600 hover:text-white cursor-pointer"
          style={{ height: "450px" }}
        >
          <div className="w-60 mx-auto">
            <Lottie options={defaultOptions1} />
          </div>
          <h2 className="text-2xl font-bold pt-5">
            {servicesData[0].serviceName}
          </h2>
          <p className="text-justify p-4 font-bold">
            {servicesData[0].serviceDetail}
          </p>
        </div>
        <div
          data-aos="fade-left"
          className=" w-full md:w-96 rounded-xl shadow-xl border-2  border-blue-500 hover:border-white hover:bg-cyan-600 hover:text-white cursor-pointer"
          style={{ height: "450px" }}
        >
          <div className="w-60 mx-auto">
            <Lottie options={defaultOptions2} />
          </div>

          <h2 className="text-2xl font-bold pt-5">
            {servicesData[1].serviceName}
          </h2>
          <p className="text-justify p-4 font-bold">
            {servicesData[1].serviceDetail}
          </p>
        </div>
        <div
          data-aos="fade-right"
          className=" w-full md:w-96 rounded-xl shadow-xl border-2  border-blue-500 hover:border-white hover:bg-cyan-600 hover:text-white cursor-pointer"
          style={{ height: "450px" }}
        >
          <div className="w-60 mx-auto">
            <Lottie options={defaultOptions3} />
          </div>
          <h2 className="text-2xl font-bold pt-5">
            {servicesData[2].serviceName}
          </h2>
          <p className="text-justify p-4 font-bold">
            {servicesData[2].serviceDetail}
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="w-full md:w-96 rounded-xl shadow-xl border-2  border-blue-500 hover:border-white hover:bg-cyan-600 hover:text-white cursor-pointer"
          style={{ height: "450px" }}
        >
          <div className="w-60 mx-auto">
            <Lottie options={defaultOptions4} />
          </div>
          <h2 className="text-2xl font-bold pt-5">
            {servicesData[3].serviceName}
          </h2>
          <p className="text-justify p-4 font-bold">
            {servicesData[3].serviceDetail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
