import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie";

import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p57yyig",
        "template_jaq2xcs",
        form.current,
        "0mmzw8DpmVifKqi-G"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire(
            "Sent!",
            "Your message has been sent to Mursalins's email!",
            "success"
          );
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full  mx-auto">
      <div className="mb-48 mt-32 " data-aos="fade-up">
        <div className="mt-10">
          <div>
            <h1 className=" mb-10 mt-5 font-serif text-4xl md:text-5xl  font-bold">
              Contact Me{" "}
              <div className="typing-animation">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </h1>
            <div className=" ">
              <div className="contact-wrapper">
                {/* left contact page */}
                <div className="direct-contact-container">
                  <ul className="contact-list">
                    <li className="list-item">
                      <span className="contact-text place flex">
                        <FaMapMarkerAlt />
                        Dhaka, Bangladesh
                      </span>
                    </li>
                    <li className="list-item hidden md:block">
                      <span className="contact-text phone flex">
                        <FaWhatsapp />
                        Whatsapp (+88) 01782868063
                      </span>
                    </li>
                    <li className="list-item md:hidden">
                      <span className="contact-text phone flex">
                        <FaWhatsapp />
                        (+88) 01782868063
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="contact-text phone flex email">
                        <FaRegEnvelope />
                        mursalinhossain377@gmail.com
                      </span>
                    </li>
                  </ul>
                  <hr />
                  <ul className="flex justify-around mt-5 mb-5">
                    <li>
                      <a
                        href="  https://github.com/tigermursa  "
                        target="_blank"
                        className="contact-icon"
                      >
                        <FaGithub className="text-6xl hover:bg-black hover:rounded-full" />
                      </a>
                    </li>
                    <li>
                      <a
                        href=" https://www.linkedin.com/in/mursalin77/ "
                        target="_blank"
                        className="contact-icon"
                      >
                        <FaLinkedin className="text-6xl hover:bg-blue-600 rounded-none" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" className="contact-icon">
                        <FaFacebook className="text-6xl hover:bg-sky-500 hover:rounded-full" />
                      </a>
                    </li>
                    <li>
                      <a href="   " target="_blank" className="contact-icon">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div className="copyright mb-10">
                    You can directly message me from here &#8594;
                  </div>
                </div>
                {/* Right contact page */}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="w-full md:w-96 md:ms-10 ms-0"
                  role="form"
                >
                  <div className="mb-4">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="user_email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="input input-bordered textarea w-full h-40"
                      placeholder="Your Message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline w-full">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
