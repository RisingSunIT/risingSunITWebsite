import { SiReact, SiDocker, SiFigma, SiJira } from "react-icons/si";
import { FaArrowRight, FaArrowLeft, FaArrowUp, FaArrowDown } from "react-icons/fa6";

export default function WorkStyleDiagram() {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className="text-[#36c1cf] text-4xl pb-4 text-center">Workflow</h1>
      {/* Plan → Design */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <SiJira className="text-blue-500 text-6xl" />
          <p className="text-2xl mt-2">Plan</p>
        </div>
        <FaArrowRight className="text-gray-500 dark:text-white text-[60px] leading-none animate-move-horizontal-sm lg:animate-move-horizontal" />
        <div className="flex flex-col items-center ml-auto">
          <SiFigma className="text-pink-500 text-6xl" />
          <p className="text-2xl mt-2">Design</p>
        </div>
      </div>

      {/* Vertical Arrows */}
      <div className="flex items-center gap-x-12 md:gap-x-24 lg:gap-x-64">
        <FaArrowUp className="text-gray-500 dark:text-white text-[60px] leading-none animate-move-vertical-up" />
        <div className="text-center font-bold text-3xl text-gray-500 dark:text-white">
          <p>Agile,<br /> Fast,<br /> Efficient</p>
        </div>
        <FaArrowDown className="text-gray-500 dark:text-white text-[60px] leading-none animate-move-vertical-down" />
      </div>

      {/* Deploy → Develop */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col items-center">
          <SiDocker className="text-blue-400 text-6xl" />
          <p className="text-2xl mt-2">Deploy</p>
        </div>
        <FaArrowLeft className="text-gray-500 dark:text-white text-[60px] leading-none lg:animate-move-horizontal-reverse animate-move-horizontal-reverse-sm" />
        <div className="flex flex-col items-center ml-auto">
          <SiReact className="text-cyan-500 text-6xl" />
          <p className="text-2xl mt-2">Develop</p>
        </div>
      </div>
    </div>
  );
}
