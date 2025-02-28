import SkillsTable from "./skills"
import WorkStyleDiagram from "./workflow"

export default function About() {
  return (
    <section id="about" className="m-4 dark:bg-black relative overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-1/3"><SkillsTable /></div>
      <div className="w-full md:w-2/3 pt-4 md:pt-0 flex flex-col items-center"><WorkStyleDiagram /></div>
    </section>
  )
}
