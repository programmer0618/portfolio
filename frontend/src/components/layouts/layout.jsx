import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Layout = ({ children }) => {
  const { mode } = useSelector((state) => state.mode);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    ref.current.complete();
  }, [location]);

  return (
    <div className={`${mode ? "bg-white" : "bg-slate"} scroll-smooth w-full`}>
      <div
        className={`mx-auto fixed w-full top-0 left-0 ${
          mode ? "bg-light" : "bg-slate"
        } z-[9]`}
      >
        <LoadingBar color="blue" ref={ref} />
        <Navbar />

        <div className="relative border-t-[1px] border-gray-700">
          <div
            className={`fixed w-[288px] top-[80px] left-0 ${
              mode ? "bg-light" : "bg-slate"
            } h-screen z-[-1]`}
          >
            <Sidebar loadingBarRef={ref} />
          </div>
          <div
            className={`absolute md:left-[288px] left-0 top-0 md:w-[calc(100%-288px)] w-full ${
              mode ? "bg-white" : "bg-darkBlue"
            } h-[calc(100vh-80px)] overflow-y-scroll`}
          >
            <div
              className={`container mx-auto py-10 px-3 lg:px-32 w-full ${
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

export default Layout;
