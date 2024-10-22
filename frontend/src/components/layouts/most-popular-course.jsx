import { Card, CardTitle } from "../ui/card";
import PointerRoute from "./pointer-route";

const MostPopularCourse = ({ mode }) => {
  const data = [
    {
      id: 1,
      title: "JavaScript",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F35ca3db9-fb43-4f12-bd48-8b08a503db09-kilwwj.png&w=1920&q=75",
    },
    {
      id: 2,
      title: "ReactJS & Redux ",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
    },
    {
      id: 3,
      title: "VueJS & VueX",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbddfc919-2260-46dd-a078-b956bd9a377c-kilwcq.png&w=1920&q=75",
    },
    {
      id: 4,
      title: "React Native",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F27f17594-ae28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75",
    },
    {
      id: 5,
      title: "Foundation (HTML, CSS, JS)",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbcdfb541-3300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75",
    },
    {
      id: 6,
      title: "Murakkab Backend",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fd7180d95-5960-48a9-bd2c-1e3dda377329-gnzzth.png&w=1920&q=75",
    },
  ];
  return (
    <div className={`${mode ? "bg-white" : "bg-darkBlue"} font-montserrat`}>
      <PointerRoute text={"Mashhur kurslar"} />
      <div className="grid grid-cols-3 gap-4">
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
              className="h-[180px] w-[330px]"
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

export default MostPopularCourse;
