import React from "react";
import Layout from "../layouts/layout";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { ComboboxDemo } from "../ui/combobox";
import { Card, CardTitle } from "../ui/card";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

const CodeResource = () => {
  const navigate = useNavigate();
  const { mode } = useSelector((state) => state.mode);

  const data = [
    { id: 1, title: "Advance Backend" },
    { id: 2, title: "Machine learning - TensorflowJS" },
    { id: 3, title: "Jira Clone - NuxtJS, VueJS & Pinia" },
    { id: 4, title: "Google Drive Clone - NextJS, TailwindCSS & Stripe" },
    { id: 5, title: "Notion Clone - NextJS, Stripe & Convex" },
    { id: 6, title: "Twitter Clone - MERN Stack" },
    { id: 7, title: "Netflix Clone - MERN Stack" },
    { id: 8, title: "Paint clone - HTML, CSS & JS" },
    { id: 9, title: "Netflix - React Native" },
    { id: 10, title: "Movie APP - React Native" },
    { id: 11, title: "HH Clone - React Native" },
  ];

  return (
    <Layout>
      <header className="flex justify-between items-start xl:items-center gap-2 flex-col xl:flex-row">
        <div className="text-[15px] font-normal text-gray-500 font-spaceGrotesk flex gap-2 flex-wrap">
          <span
            className={`cursor-pointer hover:${
              mode ? "text-black" : "text-white"
            } transition-all duration-200`}
            onClick={() => navigate("/")}
          >
            Bosh sahifa
          </span>{" "}
          /{" "}
          <span
            className={`cursor-pointer hover:${
              mode ? "text-black" : "text-white"
            } transition-all duration-200`}
            onClick={() => navigate("/courses")}
          >
            Kurslar
          </span>{" "}
          /{" "}
          <span
            className={`cursor-pointer hover:${
              mode ? "text-black" : "text-white"
            } transition-all duration-200`}
            onClick={() => navigate("/projects")}
          >
            Loyihalar
          </span>{" "}
          /{" "}
          <span className={`${mode ? "text-black" : "text-white"}`}>
            Kod manbalari
          </span>
        </div>
        <div className="flex justify-between items-center gap-2 w-full md:w-auto flex-col xs:flex-row">
          <div className="relative flex items-center justify-start w-full">
            <input
              type="text"
              placeholder="Qidirish"
              className={`border-none focus:outline-none h-[35px] pl-4 w-full ${
                mode ? "bg-gray-100" : "bg-gray-800"
              } pr-10`}
            />
            <IoSearch
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
              cursor={"pointer"}
            />
          </div>
          <div className="relative w-full">
            <ComboboxDemo />
          </div>
        </div>
      </header>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-2 gap-2 mt-6">
        {data.map((item) => (
          <Card
            key={item.id}
            className={`${
              mode ? "bg-white" : "bg-darkBlue border-gray-700"
            } flex justify-between items-center rounded-[2px] p-3 gap-4 cursor-pointer`}
          >
            <CardTitle
              className={`${mode ? "text-darkBlue" : "text-white"}
                font-semibold text-[16px] line-clamp-1
                `}
            >
              {item.title}
            </CardTitle>
            <FaGithub
              className={`text-[20px] font-bold ${
                mode ? "text-darkBlue" : "text-white"
              }`}
            />
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default CodeResource;
