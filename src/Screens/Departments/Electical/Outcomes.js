import React from "react";
import NavLinks from "./NavLinks";
import Outcomes from "../Reusables/Outcomes";

const ElectricalOutcomes = () => {
  let outcomes = {
    PO: [
      {
        heading: "Basic and Discipline specific knowledge",
        desc: "Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.",
      },
      {
        heading: "Problem analysis",
        desc: "Identify and analyze well-defined engineering problems using codified standard methods.",
      },
      {
        heading: "Design/ development of solutions",
        desc: "Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.",
      },
      {
        heading: "Engineering Tools, Experimentation and Testing",
        desc: "Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.",
      },
      {
        heading:
          "Engineering practices for society, sustainability and environment",
        desc: "Apply appropriate technology in context of society, sustainability, environment and ethical practices.",
      },
      {
        heading: "Project Management",
        desc: "Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.",
      },
      {
        heading: "Life-long learning",
        desc: "Ability to analyze individual needs and engage in updating in the context of technological changes",
      },
    ],
    PSO: [
      "The Electrical Engineer will test and maintain Electrical machines and equipments.",
      "The Electrical Engineer will apply knowledge of Electrical Power Systems to solve domain related problems.",
    ],
    PEO: [
      "Engineer will exhibit an ability to apply knowledge of mathematics, sciences and electrical engineering to identify and solve electrical engineering problems.",
      "Engineer will exercise leadership skills and ethical outlook at appropriate levels as per their experience in practices of engineering discipline with societal and environmental concerns.",
      "Engineer will exhibit effective professional communication skills with an inclination towards lifelong learning.",
    ],
  };
  return (
    <Outcomes
      PEO={outcomes.PEO}
      PSO={outcomes.PSO}
      PO={outcomes.PO}
      deptName="Electrical"
      subMenu={NavLinks}
    />
  );
};

export default ElectricalOutcomes;
