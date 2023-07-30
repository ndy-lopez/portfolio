import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Apr 2023 - Jun 2023 "
          iconStyle={{ background: "#3e497a", color: "#ffff" }}
          icon={<SchoolIcon />}
        >
           <h3 className="vertical-timeline-element-title">
            Le Wagon - Web Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montréal, QC
          </h4>
          <p> Learned software fundamentals, databases, front-end development, and web design through Figma, including key frameworks like Ruby on Rails and StimulusJS. Gained experience in deploying complete web applications and adopting best-in-class development workflows, including collaboration on GitHub and automated testing.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 2023 - Mar 2023 "
          iconStyle={{ background: "#3e497a", color: "#ffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Collège de Maisonneuve - JavaScript
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montréal, QC
          </h4>
          <p>Covered fundamental concepts of algorithms, programming structures and basic data structures.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Support Specialist - Vidéotron
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montréal, QC
          </h4>
          <p>Providing expert assistance and resolving technical issues related to telecommunications services and products. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Credit Operations Consultant - Rogers Communications
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montréal, QC
          </h4>
          <p>
          Analyzed and strategized the collection efforts, assessed the financial risks involved, and implemented effective procedures to recover outstanding debts from clients or customers.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
