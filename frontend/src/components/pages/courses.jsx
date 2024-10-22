import { useNavigate } from "react-router-dom";
import Layout from "../layouts/layout";
import { IoSearch } from "react-icons/io5";
import { ComboboxDemo } from "../ui/combobox";
import CourseCard from "../layouts/course-card";
import { useSelector } from "react-redux";

const Courses = () => {
  const navigate = useNavigate();
  const { mode } = useSelector((state) => state.mode);

  const data = [
    {
      id: 1,
      title: "Murakkab Backend",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fd7180d95-5960-48a9-bd2c-1e3dda377329-gnzzth.png&w=1920&q=75",
      button1: "BackEnd",
      button2: "Murakkab",
      button3: "Bepul",
      slug: "murakkab-backend",
    },
    {
      id: 2,
      title: "Nuxt JS",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F31fea751-8eaf-4034-8af8-e8ae50b6f863-sfstg7.png&w=1920&q=75",
      button1: "Full-Stack",
      button2: "O'rta",
      button3: "Bepul",
      slug: "nuxt-js",
    },
    {
      id: 3,
      title: "Tensorflow JS",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F74f237af-c2d6-4784-8e7f-6c7ff0d65c01-ectn4b.png&w=1920&q=75",
      button1: "Sun'iy intelekt",
      button2: "O'rta",
      button3: "Bepul",
      slug: "tensorflow-js",
    },
    {
      id: 4,
      title: "Foundation (HTML, CSS, JS)",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbcdfb541-3300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75",
      button1: "Front-End",
      button2: "Boshlang'ich",
      button3: "Bepul",
      slug: "foundation-html-css-js",
    },
    {
      id: 5,
      title: "React Native",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F27f17594-ae28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75",
      button1: "Mobile",
      button2: "O'rta",
      button3: "Bepul",
      slug: "react-native",
    },
    {
      id: 6,
      title: "NextJS",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F70e1537d-4afc-4cfe-8915-58a814e623da-kilw5u.png&w=1920&q=75",
      button1: "Full-Stack",
      button2: "O'rta",
      button3: "Bepul",
      slug: "nextjs",
    },
    {
      id: 7,
      title: "Telegram Bot",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F1662922d-b61d-401b-aa1a-693a6231d8a0-kilw9a.png&w=1920&q=75",
      button1: "Back-End",
      button2: "O'rta",
      button3: "Bepul",
      slug: "telegram-bot",
    },
    {
      id: 8,
      title: "TypeScript",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fb74304fd-3b49-43b5-b005-0a786dc405dd-kilwa5.png&w=1920&q=75",
      button1: "Front-End",
      button2: "O'rta",
      button3: "Bepul",
      slug: "typescript",
    },
    {
      id: 9,
      title: "NestJS",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F9bc23e02-4912-4db2-9022-c265a1c4eb43-kilwb0.png&w=1920&q=75",
      button1: "Back-End",
      button2: "O'rta",
      button3: "Bepul",
      slug: "nestjs",
    },
    {
      id: 10,
      title: "NodeJS",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F0e386b44-1f7d-4331-a1d9-6ba2cf04a5e8-kilwbv.png&w=1920&q=75",
      button1: "Back-End",
      button2: "O'rta",
      button3: "Bepul",
      slug: "nodejs",
    },
    {
      id: 11,
      title: "VueJS & VueX",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbddfc919-2260-46dd-a078-b956bd9a377c-kilwcq.png&w=1920&q=75",
      button1: "Front-End",
      button2: "O'rta",
      button3: "Bepul",
      slug: "vuejs-vuex",
    },
    {
      id: 12,
      title: "ReactJS & Redux",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
      button1: "Front-End",
      button2: "O'rta",
      button3: "Bepul",
      slug: "reactjs-redux",
    },
    {
      id: 13,
      title: "JavaScript",
      img: "https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F35ca3db9-fb43-4f12-bd48-8b08a503db09-kilwwj.png&w=1920&q=75",
      button1: "Front-End",
      button2: "Boshlang'ich",
      button3: "Bepul",
      slug: "javascript",
    },
  ];

  return (
    <Layout>
      <header className="flex justify-between items-center">
        <div className="text-2xl font-bold font-spaceGrotesk flex gap-2">
          <h2 className="text-blue-500">Kurslar</h2>/
          <h2
            className="underline hover:text-blue-200 cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            Loyihalar
          </h2>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Qidirish"
              className={`border-none focus:outline-none h-[35px] pl-4 ${
                mode ? "bg-gray-100" : "bg-gray-800"
              } pr-10`}
            />
            <IoSearch
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
              cursor={"pointer"}
            />
          </div>
          <div className="relative">
            <ComboboxDemo />
          </div>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <CourseCard key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
};

export default Courses;
