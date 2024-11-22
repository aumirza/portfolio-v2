import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { SkillCircle } from "../SkillCircle"
import { useSkillsQuery } from "../../hooks/useSkillsQuery"

export const SkillsSection = () => {
  const { skills } = useSkillsQuery()

  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="mb-14">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="mb-2 text-2xl font-bold border-b-2 md:text-3xl border-primary">
            My Skills
          </h2>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8">
        {skills.map(({ id, name, icon, level }) => (
          <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={500}>
            <SkillCircle key={id} name={name} icon={icon} level={level} />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}
