import { Card, CardTitle } from "../ui/card";
import PointerRoute from "./pointer-route";

const ProjectsInformation = ({ mode }) => {
  const data = [
    {
      id: 1,
      title: "Google drive - Clone",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F79dc1a37-4a40-4a87-b35c-50649a50661e-1rd4ri.png&w=1920&q=75",
    },
    {
      id: 2,
      title: "Notion - Clone",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F079020a2-9f16-4a51-9cfc-5248b1116bb9-1rd4ri.png&w=1920&q=75",
    },
    {
      id: 3,
      title: "Twitter-X Clone - Web",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa25260aa-2108-43b9-83cd-30a100acc40a-1rd4ri.png&w=1920&q=75",
    },
    {
      id: 4,
      title: "Netflix clone - Mobile",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F39e07bb5-ae9d-41e1-8b68-3bf5e8f95825-1rd4ri.png&w=1920&q=75",
    },
    {
      id: 5,
      title: "Netflix clone - WEB",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F0b160e6d-556e-4cae-b3e5-0b5f11003462-minn2a.png&w=1920&q=75",
    },
    {
      id: 6,
      title: "Blog",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4dd6619c-d41e-4817-ba62-8d4614317fea-minmyu.png&w=1920&q=75",
    },
  ];
  return (
    <div className={`${mode ? "bg-white" : "bg-darkBlue"} font-montserrat`}>
      <PointerRoute text={"Loyihalar"} />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {data.map((item) => (
          <Card
            className={`${
              mode
                ? "bg-white text-gray-700 border"
                : "bg-darkBlue text-white border-gray-800"
            } rounded-sm cursor-pointer`}
            key={item.id}
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-[180px] w-full md:object-cover"
            />
            <CardTitle
              className={`rounded-none p-3 tracking-[.1px] text-[18px] font-semibold`}
            >
              {item.title}
            </CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsInformation;
