import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value !== "") {
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const onOtpSubmit = () => {
    alert("OTP Submitted: " + otp.join(""));
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center bg-white-100">
      <div>
        <div className="relative flex flex-col items-center border-2 mt-24 p-12 bg-white">
          <div className="">
            <h1 className="mb-5 text-xl font-bold">Enter OTP sent to </h1>
          </div>
          <div className="flex space-x-2">
            {otp.map((data, index) => {
              return (
                <input
                  className="border w-10 h-10 text-center text-lg"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              );
            })}
          </div>
          <div>
            <Link to="/Login">
              <button
                type="button"
                className="border-2 text-white w-50 bg-[#FF9C00] px-[100px] mx-auto mt-5 p-2 rounded-xl"
                onClick={onOtpSubmit}
              >
                Submit OTP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpInput;
