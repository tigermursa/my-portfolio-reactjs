import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/img/not-found-animation.json';
import { Link } from 'react-router-dom';

const ForOFor = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-1">
      <h1 className="text-4xl  mb-4 font-bold ">Mursalin Hossain </h1>
      <h1 className="text-xl   font-bold mb-10">There is always room to grow </h1>
      <h1 className="text-4xl   md:text-7xl mb-4">404 - Page Not Found</h1>
      <Lottie options={defaultOptions} height={300} width={300} />
      <p className=" text-lg font-semibold mb-4">Developer Maybe Working on the Route</p>
      <Link to="/" className="mt-8  font-bold btn btn-outline">
        Go back to Home
      </Link>
    </div>
  );
};

export default ForOFor;
