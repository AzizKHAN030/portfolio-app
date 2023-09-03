import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies  } from "../constants"
import { useEffect, useState } from "react";

const Tech = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', (e)=>{
      setIsMobile(e.matches);
    })

    return () => {
      mediaQuery.removeEventListener('change', (e)=>{
        setIsMobile(e.matches);
      })
    }
  },[])

  const renderDesktop = (name, icon) =>{
    return  <div key={name} className="w-28 h-28 ">
              <BallCanvas icon={icon}/>
            </div>
  }

  const renderMobile = (name, icon) =>{
      return  <div key={name} className="w-28 h-28 rounded-full bg-white p-2">
                <img src={icon} className="rounded-full"/>
              </div>
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({name, icon}) => ( isMobile? renderMobile(name, icon) : renderDesktop(name, icon) ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")