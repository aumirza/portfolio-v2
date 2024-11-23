import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { SkillCircle } from "../SkillCircle"
import { useSkillsQuery } from "../../hooks/useSkillsQuery"

Array.prototype.filterAndDifferntiate = function (cb) {
  const filtered = []
  const remaining = []
  for (let index = 0; index < this.length; index++) {
    const element = this[index]
    if (cb(element, index, this)) {
      filtered.push(element)
    } else {
      remaining.push(element)
    }
  }
  return [filtered, remaining]
}

export const SkillsSection = () => {
  const { skills } = useSkillsQuery()

  const [currentSkills, remaining] = skills.filterAndDifferntiate(
    skill => skill.isCurrent
  )
  console.log(currentSkills, remaining)

  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="mb-10">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="mb-2 text-2xl font-bold border-b-2 md:text-3xl border-primary">
            My Skills
          </h2>
        </ScrollAnimation>
      </div>

      <div className="max-w-3xl">
        <div className="flex flex-col gap-5 mb-14">
          <h3 className="text-2xl">Current Stack</h3>

          <div className="grid grid-cols-4 gap-5 md:grid-cols-7">
            {currentSkills.map(({ id, name, icon, level }) => (
              <ScrollAnimation
                animateIn="zoomIn"
                animateOnce={true}
                delay={500}
              >
                <SkillCircle key={id} name={name} icon={icon} level={level} />
              </ScrollAnimation>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl">Previously Worked With</h3>

          <div className="grid grid-cols-5 gap-5 md:grid-cols-8">
            {remaining.map(({ id, name, icon, level }) => (
              <ScrollAnimation
                animateIn="zoomIn"
                animateOnce={true}
                delay={500}
              >
                <SkillCircle
                  imageClassName="filter brightness-0 hover:brightness-75"
                  key={id}
                  name={name}
                  icon={icon}
                  level={level}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
