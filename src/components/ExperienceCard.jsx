import { VerticalTimelineElement } from "react-vertical-timeline-component"
import ReactHtmlParser from 'react-html-parser'; 

const ExperienceCard = ({experience:{date, iconBg,icon, company_name,title, points}}) => {
  return (
    <VerticalTimelineElement
        contentArrowStyle={{borderRight: '7px solid  #232631'}}
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        date={date}
        iconStyle={{ background: iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={icon}
                    alt={company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">
                {title}
            </h3>
            <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{company_name}</p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map((point, index) => (
                <li key={`exp-point-${index}`} className="text-white text-[14px] pl-1 tracking-wider [&>a]:text-[#915eff]">{ReactHtmlParser(point)}</li>
            ))}
        </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard