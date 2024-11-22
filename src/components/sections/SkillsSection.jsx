import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { FullSection } from "../layouts/FullSection"
import { SkillCircle } from "../SkillCircle"
import { useSkillsQuery } from "../../hooks/useSkillsQuery"

export const SkillsSection = () => {
  const { skills } = useSkillsQuery()

  return (
    <FullSection centerY={false}>
      <div className="mb-14">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h1 className="text-3xl font-bold">My Skills</h1>
        </ScrollAnimation>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8">
        {skills.map(({ id, name, icon, level }) => (
          <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={500}>
            <SkillCircle key={id} name={name} icon={icon} level={level} />
          </ScrollAnimation>
        ))}
      </div>
    </FullSection>
  )
}
