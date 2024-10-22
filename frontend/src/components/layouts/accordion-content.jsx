import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PiCaretUpDown } from "react-icons/pi";
import videoList from "../utils";
import { BsFillCameraVideoFill } from "react-icons/bs";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={"hover:no-underline flex justify-between w-full "}
        >
          <div className="flex items-center justify-start gap-2 ">
            <PiCaretUpDown /> <span>1-modul. Node js</span>{" "}
          </div>
          <div className="flex justify-end gap-4 items-center ">
            <span>16.darslik</span> &bull; <span>2.37 soat</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="border-l-2 border-blue-500 pl-4 ">
          {videoList.map((item) => (
            <div
              className="flex justify-between items-center py-3 cursor-pointer font-montserrat"
              key={item.id}
            >
              <div className="flex items-center gap-2 hover:text-gray-400 transition-all duration-100">
                <BsFillCameraVideoFill />
                <span># {item.title}</span>
              </div>
              <div>{item.duration}</div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className={"hover:no-underline flex justify-between w-full "}
        >
          <div className="flex items-center justify-start gap-2 ">
            <PiCaretUpDown /> <span>2-modul. Express js</span>{" "}
          </div>
          <div className="flex justify-end gap-4 items-center ">
            <span>7.darslik</span> &bull; <span>2.30 soat</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="border-l-2 border-blue-500 pl-4 ">
          {videoList.map((item) => (
            <div
              className="flex justify-between items-center py-3 cursor-pointer font-montserrat"
              key={item.id}
            >
              <div className="flex items-center gap-2">
                <BsFillCameraVideoFill />
                <span># {item.title}</span>
              </div>
              <div>{item.duration}</div>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
