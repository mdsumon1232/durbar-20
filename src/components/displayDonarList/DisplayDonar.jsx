import "animate.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import donate from "../../assets/images/blood-donate.png";

const DisplayDonar = (props) => {
  const {
    donar_id,
    full_name,
    phone_number,
    email,
    last_donate,
    blood_group,
    division,
    distric,
    sub_distric,
  } = props.allDonar;

  const [currentTime, setCurrentTime] = useState(new Date());

  const startDate = new Date(last_donate);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeDifference = currentTime - startDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const seconds = Math.floor((timeDifference / 1000) % 60);

  const [ready, setReady] = useState(null);

  useEffect(() => {
    if (days >= 120) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, []);

  return (
    <div className=" relative  bg-purple-100 shadow-xl shadow-gray-300">
      <p className="w-10  h-10 leading-10 font-bold absolute left-1/2 -translate-x-[50%] -top-[16px] text-center rounded-full bg-red-600 text-lime-50">
        {blood_group}
      </p>
      <div
        className={`w-14 h-14  rounded-full absolute -right-[19px] -top-7 ${
          ready ? "bg-green-500" : "bg-black"
        }`}
      >
        <p className="text-[14px] text-center h-full pt-1 text-white">
          {ready ? "Ready" : "not Ready"}
        </p>
      </div>
      <div className="p-2 relative ">
        <h3 className="mt-5 mb-2 text-[20px] font-semibold ">{full_name}</h3>
        <p className="text-[16px] mb-2">Division: {division}</p>
        <p className="text-[16px] mb-2">District: {distric}</p>
        <p className="text-[16px] mb-2">Sub District: {sub_distric}</p>
        <p className="text-[16px] mb-2">
          Last Donate : {moment(last_donate).format(" D MMMM  YYYY")}
        </p>
        <img
          src={donate}
          className="w-32 absolute right-[70px] top-[19%] -translate-y-[50%] animate__animated animate__pulse animate__infinite"
          alt=""
        />
      </div>
      <div className="flex  w-full my-2">
        <div className="basis-1/4 bg-violet-300 mx-1 text-center py-2 rounded-sm">
          <h3 className="text-[20px]">{days}</h3>
          <p className="text-[14px]"> Days</p>
        </div>
        <div className="basis-1/4 bg-violet-300 mx-1 text-center py-2 rounded">
          <h3 className="text-[20px]">{hours}</h3>
          <p className="text-[14px]">Hours</p>
        </div>
        <div className="basis-1/4 bg-violet-300 mx-1 text-center py-2 rounded-sm">
          <h3 className="text-[20px]">{minutes}</h3>
          <p className="text-[14px]">Minutes</p>
        </div>
        <div className="basis-1/4 bg-violet-300 mx-1 text-center py-2 rounded-sm">
          <h3 className="text-[20px]">{seconds}</h3>
          <p className="text-[14px]">Seconds</p>
        </div>
      </div>

      <div className="flex w-full">
        <a
          href="tel:{phone_number}"
          className="bg-red-600 w-1/2 text-center py-1 text-white"
        >
          Call
        </a>

        <a
          className="bg-red-700 w-1/2 text-center py-1 text-white"
          href={`sms:+{phone_number}?body=Share%20this%20message%20on%20sms`}
        >
          Message
        </a>
      </div>
    </div>
  );
};

export default DisplayDonar;
