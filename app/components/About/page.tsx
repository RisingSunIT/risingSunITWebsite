import SkillsTable from "./skills"
import WorkStyleDiagram from "./workflow"

export default function About() {
  return (
    <section id="about" className="dark:bg-black w-[1440px] h-[608px] pt-120px relative overflow-hidden flex">
      <SkillsTable></SkillsTable>
      <WorkStyleDiagram></WorkStyleDiagram>
    </section>
  )}
