import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Navbar from "./navbar";
import LoadingBar from "react-top-loading-bar";

const SignLayout = ({ children }) => {
  const { mode } = useSelector((state) => state.mode);
  const ref = useRef();
  return (
    <div className={`${mode ? "bg-white" : "bg-slate"} scroll-smooth`}>
      <div
        className={`mx-auto fixed w-full top-0 left-0 ${
          mode ? "bg-light" : "bg-slate"
        } z-[9]`}
      >
        <LoadingBar color="blue" ref={ref} />
        <Navbar />
        <div className="relative border-t-[1px] border-gray-700">
          <div
            className={`w-full ${
              mode ? "bg-white" : "bg-darkBlue"
            } h-[calc(100vh-80px)] overflow-y-scroll`}
          >
            <div
              className={`container mx-auto py-10 px-1 ${
                mode ? "text-gray-800" : "text-white"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLayout;
