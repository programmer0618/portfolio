import React, { useState } from "react";
import Layout from "../layouts/layout";
import { IoCalendarNumber } from "react-icons/io5";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ComboboxDemo } from "../ui/combobox";
import EditProfile from "../layouts/edit-profile";
import moment from "moment";

const Profile = () => {
  const { mode } = useSelector((state) => state.mode);
  const { user } = useSelector((state) => state.userData);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      {user ? (
        <>
          <div className="flex gap-4 justify-between md2:items-center items-start lg:items-start xl:items-center flex-col md2:flex-row lg:flex-col xl:flex-row">
            <div className="flex gap-4 xs:items-center justify-center  flex-col xs:flex-row">
              <img
                src={`${
                  user?.image
                    ? `http://localhost:5000/${user.image}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaJS0dnDYQ5NkVr30LWhCjQoMLtm6BC0TDA&s"
                }`}
                className="w-[100px] h-[100px] object-cover rounded-full cursor-pointer"
                alt="Profile Img"
              />
              <div>
                <h1 className="text-2xl font-bold line-clamp-1">
                  {`${user?.firstname} ${user?.lastname}`}
                </h1>
                <p className="flex items-center gap-1 text-gray-600 text-[20px] line-clamp-1">
                  <IoCalendarNumber />
                  {moment(user?.createdAt).format("DD MMMM, YYYY")}
                </p>
              </div>
            </div>
            <Button
              className={`${
                mode ? "text-white" : "text-gray-800"
              } bg-green-500 hover:bg-blue-600 shadow-sm font-normal font-montserrat h-[35px] mb-4`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Profilni tahrirlash
            </Button>
          </div>
          <div className="sm:w-[50%] flex justify-end ms-auto items-center">
            <ComboboxDemo />
          </div>
          <div>
            <h1 className="text-3xl mt-3 font-bold font-spaceGrotesk">
              Siz hozirda hech qanday kursga qo'shilmagansiz!
            </h1>
          </div>
          {isOpen && <EditProfile setIsOpen={setIsOpen} mode={mode} />}
        </>
      ) : (
        <div>
          <h1 className="sm:text-3xl text-xl font-bold font-spaceGrotesk">
            Siz hozirda ro'yxatdan o'tmagansiz!
            <br />
            <span
              className="text-[18px] text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/sign-in")}
            >
              Tizimga kirish
            </span>
          </h1>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
