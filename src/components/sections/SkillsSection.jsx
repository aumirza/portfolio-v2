import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { SkillCircle } from "../SkillCircle"
import { useSkillsQuery } from "../../hooks/useSkillsQuery"
import { Button } from "../ui/Button"
import { Link } from "gatsby"

function filterAndDifferntiate(array, cb) {
  const filtered = []
  const remaining = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (cb(element, index, array)) {
      filtered.push(element)
    } else {
      remaining.push(element)
    }
  }
  return [filtered, remaining]
}

export const SkillsSection = () => {
  const { skills } = useSkillsQuery()

  const [currentSkills, remaining] = filterAndDifferntiate(
    skills,
    skill => skill.isCurrent
  )

  return (
    <div className="flex flex-col items-center justify-center gap-20 my-20">
      <div>
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
                key={id}
                animateIn="zoomIn"
                animateOnce={true}
                delay={500}
              >
                <SkillCircle
                  className="brightness-75 saturate-100"
                  name={name}
                  icon={icon}
                  level={level}
                />
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
                key={id}
              >
                <SkillCircle
                  className="filter brightness-0 hover:brightness-75"
                  name={name}
                  icon={icon}
                  level={level}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      <div>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <Button className="py-2" asChild>
            <Link to="/about#experience">
              View my work experience and educational qualification
            </Link>
          </Button>
        </ScrollAnimation>
      </div>
    </div>
  )
}
