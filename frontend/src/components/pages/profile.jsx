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
  return (
    <Layout>
      {user && (
        <>
          <div className="flex gap-4 justify-between">
            <div className="flex items-center gap-4 justify-start">
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
              } bg-green-500 hover:bg-blue-600 shadow-sm font-normal font-montserrat h-[35px]`}
              onClick={() => setIsOpen(!isOpen)}
            >
              Profilni tahrirlash
            </Button>
          </div>
          <div className="w-full flex justify-end items-center">
            <ComboboxDemo />
          </div>
          <div>
            <h1 className="text-3xl mt-3 font-bold font-spaceGrotesk">
              Siz hozirda hech qanday kursga qo'shilmagansiz!
            </h1>
          </div>
          {isOpen && <EditProfile setIsOpen={setIsOpen} mode={mode} />}
        </>
      )}
    </Layout>
  );
};

export default Profile;
