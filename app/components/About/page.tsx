import SkillsTable from "./skills"
import WorkStyleDiagram from "./workflow"

export default function About() {
  return (
    <section id="about" className="dark:bg-black pt-120px relative overflow-hidden flex">
      <SkillsTable></SkillsTable>
      <WorkStyleDiagram></WorkStyleDiagram>
    </section>
  )}
