import { SiReact, SiDocker, SiFigma, SiJira } from "react-icons/si";
import { FaArrowRight, FaArrowLeft, FaArrowUp, FaArrowDown } from "react-icons/fa6";

export default function WorkStyleDiagram() {
  return (
    <div className="m-4 w-4/5 flex flex-col items-center">
      <h1 className="text-[#36c1cf] text-4xl p-4">Workflow</h1>

      {/* Plan → Design */}
      <div className="flex items-center space-x-64 h-1/3">
        <div className="flex flex-col items-center">
          <SiJira className="text-blue-500 text-6xl" />
          <p className="text-2xl mt-2">Plan</p>
        </div>
        <FaArrowRight className="text-gray-500 dark:text-white text-[60px] leading-none animate-move-horizontal" />
        <div className="flex flex-col items-center">
          <SiFigma className="text-pink-500 text-6xl" />
          <p className="text-2xl mt-2">Design</p>
        </div>
      </div>

      {/* Vertical Arrows */}
      <div className="flex items-center w-[65%] space-x-64 h-1/3">
        <FaArrowUp className="text-gray-500 dark:text-white text-[60px] leading-none animate-move-vertical-up" />
        <div className="text-center font-bold text-3xl text-gray-500 dark:text-white">
          <p>Agile,<br /> Fast,<br /> Efficient</p>
        </div>
        <FaArrowDown className="text-gray-500 dark:text-white text-[60px] leading-none animate-move-vertical-down" />
      </div>

      {/* Deploy → Develop */}
      <div className="flex items-center space-x-64 h-1/3">
        <div className="flex flex-col items-center">
          <SiDocker className="text-blue-400 text-6xl" />
          <p className="text-2xl mt-2">Deploy</p>
        </div>
        <FaArrowLeft className="text-gray-500 dark:text-white text-[60px] leading-none animate-move-horizontal-reverse" />
        <div className="flex flex-col items-center">
          <SiReact className="text-cyan-500 text-6xl" />
          <p className="text-2xl mt-2">Develop</p>
        </div>
      </div>
    </div>
  );
}
