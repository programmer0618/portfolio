import { IoSearch } from "react-icons/io5";
import Layout from "../layouts/layout";
import { ComboboxDemo } from "../ui/combobox";
import { useNavigate } from "react-router-dom";
import CourseCard from "../layouts/course-card";
import { useSelector } from "react-redux";

const Projects = () => {
  const navigate = useNavigate();
  const { mode } = useSelector((state) => state.mode);

  const data = [
    {
      id: 1,
      title: "Google drive - Clone",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F79dc1a37-4a40-4a87-b35c-50649a50661e-1rd4ri.png&w=1920&q=75",
      button1: "Full-Stack",
      button2: "loyiha",
      button3: "Bepul",
      slug: "google-drive-clone",
    },
    {
      id: 2,
      title: "Notion - Clone",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F079020a2-9f16-4a51-9cfc-5248b1116bb9-1rd4ri.png&w=1920&q=75",
      button1: "Full-Stack",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "notion-clone",
    },
    {
      id: 3,
      title: "Twitter-X Clone - Web",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa25260aa-2108-43b9-83cd-30a100acc40a-1rd4ri.png&w=1920&q=75",
      button1: "Front-End",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "twitter-x-clone-web",
    },
    {
      id: 4,
      title: "Netflix clone - Mobile",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F39e07bb5-ae9d-41e1-8b68-3bf5e8f95825-1rd4ri.png&w=1920&q=75",
      button1: "Mobile",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "netflix-clone-mobile",
    },
    {
      id: 5,
      title: "Netflix clone - WEB",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F39e07bb5-ae9d-41e1-8b68-3bf5e8f95825-1rd4ri.png&w=1920&q=75",
      button1: "Full-Stack",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "netflix-clone-web",
    },
    {
      id: 6,
      title: "Blog",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4dd6619c-d41e-4817-ba62-8d4614317fea-minmyu.png&w=1920&q=75",
      button1: "Full-Stack",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "blog",
    },
    {
      id: 7,
      title: "Head Hunter clone (hh)",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F22f1690e-5968-480b-ac6a-3a03d83f3640-minmve.png&w=1920&q=75",
      button1: "Full-Stack",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "head-hunter-clone",
    },
    {
      id: 8,
      title: "Kinoteatr mobil ilovasi",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F1edd6260-4fe0-4e39-95bd-1759c6969214-minmw9.png&w=1920&q=75",
      button1: "Mobile",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "kinoteatr-mobil-ilovasi",
    },
    {
      id: 9,
      title: "Web telegram bot",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Faef9d507-78fb-4670-b691-9e952282b7f0-minmx4.png&w=1920&q=75",
      button1: "Back-End",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "web-telegram-bot",
    },
    {
      id: 10,
      title: "Internet Magazin",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F9bd81038-feaf-428a-b7bb-42f0f2211cfd-minmxz.png&w=1920&q=75",
      button1: "Front-End",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "internet-magazin",
    },
    {
      id: 11,
      title: "Sammi Tube",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F3cbb9621-6a00-49c4-b42c-33ec40668da2-minmzp.png&w=1920&q=75",
      button1: "Front-End",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "sammi-tube",
    },
    {
      id: 12,
      title: "Paint clone",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F00e2b51c-328a-4414-ab55-564d9bda4d71-minn1f.png&w=1920&q=75",
      button1: "Front-End",
      button2: "Loyiha",
      button3: "Bepul",
      slug: "paint-clone",
    },
  ];

  return (
    <Layout>
      <header className="flex justify-between items-start xl:items-center gap-2 flex-col xl:flex-row">
        <div className="xl:text-2xl md:text-xl font-bold font-spaceGrotesk flex gap-2">
          <h2 className="text-blue-500">Kurslar</h2>/
          <h2
            className="underline hover:text-blue-200 cursor-pointer"
            onClick={() => navigate("/courses")}
          >
            Kurslar
          </h2>
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
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {data.map((item) => (
          <CourseCard key={item.id} {...item} marginTop={"mt-1"} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
