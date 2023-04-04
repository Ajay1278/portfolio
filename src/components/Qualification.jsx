import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { qualification } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const QualificationCard = ({ Qualify }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Qualify.date}
      iconStyle={{ background: Qualify.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={Qualify.icon}
            alt={Qualify.company_name}
            className='w-[100%] h-[90%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{Qualify.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {Qualify.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {Qualify.points.map((point, index) => (
          <li
            key={`Qualify-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Qualify = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Qualification
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {qualification.map((Qualify, index) => (
            <QualificationCard
              key={`Qualify-${index}`}
              Qualify={Qualify}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Qualify, "work");
