import { SiPython, SiDjango, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiPhp, SiFlutter, SiPostgresql, SiMongodb, SiDocker, SiAwsorganizations, SiFigma, SiJira, SiTypescript } from "react-icons/si";
import { TbFlameFilled } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";

const skills = [
  { icon: <SiPython className="text-blue-400" />, name: "Python", year: "2019~", level: 4 },
  { icon: <SiDjango className="text-green-700" />, name: "Django", year: "2022~", level: 2 },
  { icon: <SiHtml5 className="text-orange-500" />, name: "HTML", year: "2019~", level: 4 },
  { icon: <SiCss3 id="skillCSS" className="scroll-mt-[130px] text-blue-500" />, name: "CSS", year: "2019~", level: 4 },
  { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript", year: "2019~", level: 4 },
  { icon: <SiTypescript id="skillTypescript" className="scroll-mt-[130px] text-blue-500" />, name: "TypeScript", year: "2022~", level: 3 },
  { icon: <SiReact id="skillReact" className="scroll-mt-[130px] text-cyan-500" />, name: "React", year: "2022~", level: 3 },
  { icon: <SiNextdotjs id="skillNextJs" className="scroll-mt-[130px] text-black dark:text-white" />, name: "Next.js", year: "2024~", level: 2 },
  { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js", year: "2021~", level: 3 },
  { icon: <SiNestjs className="text-red-600" />, name: "NestJS", year: "2024~", level: 2 },
  { icon: <SiPhp className="text-indigo-600" />, name: "PHP", year: "2022~", level: 2 },
  { icon: <SiFlutter id="skillFlutter" className="scroll-mt-[130px] text-blue-500" />, name: "Flutter", year: "2021~", level: 2 },
  { icon: <div id="skillFlame" className="scroll-mt-[130px] w-5 h-5 flex justify-center items-center relative">
    <TbFlameFilled className="absolute text-[#f21531] text-3xl" />
    <TbFlameFilled className="absolute text-[#ff8735] text-2xl top-[1px]" />
    <TbFlameFilled className="absolute text-[#ffc031] text-l top-[6px]" />
    </div>, name: "Flame", year: "2025~", level: 1 },
  { icon: <SiPostgresql className="text-blue-600" />, name: "SQL", year: "2022~", level: 4 },
  { icon: <SiMongodb className="text-green-500" />, name: "NoSQL", year: "2020~", level: 3 },
  { icon: <SiDocker className="text-blue-400" />, name: "Docker", year: "2022~", level: 4 },
  { icon: <SiAwsorganizations className="text-orange-400" />, name: "AWS", year: "2022~", level: 3 },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma", year: "2023~", level: 2 },
  { icon: <SiJira className="text-blue-600" />, name: "Jira", year: "2021~", level: 1 },
];

export default function SkillsTable() {
  return (
      <div>
        <h1 className="text-[#36c1cf] text-4xl text-center pb-4">Technologies</h1>
        <table className="w-full">
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index} className="text-lg">
                <td>{skill.icon}</td>
                <td>{skill.name}</td>
                <td className="pr-2">{skill.year}</td>
                <td className="flex">
                  {Array.from({ length: skill.level }).map((_, i) => (
                    <FaGear key={i} className="text-gray-500 dark:text-gray-300 animate-[spin_5s_linear_infinite]" />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}