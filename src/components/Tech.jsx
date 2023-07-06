import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({name, icon}) => (
        <div key={name} className="w-28 h-28 ">
          <BallCanvas icon={icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")