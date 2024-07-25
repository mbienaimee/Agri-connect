import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../pages/Footer.jsx";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      console.log("Form reference is not set");
      return;
    }

    emailjs
      .sendForm(
        "service_f1j5179",
        "template_nz4v8lg",
        form.current,
        "90CXZsK5Trlx1EhNS"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Success!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .catch((error) => {
        console.log("Error in sending email: ", error);
      });
  };

  return (
    <div>
      <h1 className="text-[#FF9C00] font-bold my-3 ml-[45rem] -mb-[3rem] text-2xl">
        Contact <span className="animate-pulse ">📞</span> us
      </h1>
      <div className="w-3/4 mx-auto my-[5rem]  mb-[4rem] flex justify-center">
        <div
          style={{ backgroundImage: "url('./contact.jpg')" }}
          className="flex flex-col justify-center w-[38rem]  object-cover bg-no-repeat rounded-lg ml-[2rem]"
        >
          <div className="flex  gap-4 p-4">
            <div className="ml-[3rem]">
              <GrLocation />
            </div>
            <div className="font-bold">
              <span className="text-white">Kacyiru, Kigali Rwanda</span>
              <br />
              <span className="text-green-500">Impact Center</span>
            </div>
          </div>
          <div className="flex ml-[3rem] font-bold gap-4 p-4">
            <div>
              <MdOutlinePhonelinkRing />
            </div>
            <div>
              <span className="text-white">Let's Talk</span>
              <br />
              <span className="text-green-500">+250783059629</span>
            </div>
          </div>
          <div className="flex ml-[3rem] font-bold gap-4 p-4">
            <div>
              <MdMarkEmailRead />
            </div>
            <div>
              <span className="text-white">General Support</span>
              <br />
              <span className="text-green-500">agrisales@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="-ml-[7.5rem]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex rounded-lg flex-col  border-2 border-gray-300 w-[4orem] p-24"
          >
            <label className="mb-2 ">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Type your names here"
              required
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <label className="mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Type your email here"
              required
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <label className="mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Leave your message here"
              required
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <button className="bg-green-500 p-2   flex justify-center text-white rounded">
              <input type="submit" value="Send" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
