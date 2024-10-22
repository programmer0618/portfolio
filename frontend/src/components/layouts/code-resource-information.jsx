import React from "react";
import PointerRoute from "./pointer-route";
import { Card, CardTitle } from "../ui/card";
import { FaGithub } from "react-icons/fa";

const CodeResourceInformation = ({ mode }) => {
  const data = [
    {
      id: 1,
      title: "Advanced  Backend",
    },
    {
      id: 2,
      title: "Machine learning - TensorflowJS",
    },
    {
      id: 3,
      title: "Jira Clone - NuxtJS, VueJS & Pinia",
    },
    {
      id: 4,
      title: "Google Drive Clone - NextJS, TailwindCSS & Stripe",
    },
    {
      id: 5,
      title: "Notion Clone - NextJS, Stripe & Convex",
    },
    {
      id: 6,
      title: "Twitter Clone - MERN Stack",
    },
  ];
  return (
    <div>
      <PointerRoute text={"Kod manbalari"} />
      <div
        className={`${
          mode ? "bg-white" : "bg-darkBlue"
        } font-montserrat grid grid-cols-3 gap-2`}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            className={`${
              mode ? "bg-white" : "bg-darkBlue border-gray-700"
            } flex justify-between items-center rounded-[2px] p-3 cursor-pointer`}
          >
            <CardTitle
              className={`${mode ? "text-darkBlue" : "text-white"}
                font-semibold text-[16px] line-clamp-1
                `}
            >
              {item.title}
            </CardTitle>
            <FaGithub className="text-[20px] font-bold text-gray-200" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CodeResourceInformation;
