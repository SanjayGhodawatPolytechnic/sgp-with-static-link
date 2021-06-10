import React from "react";
import NavLinks from "./NavLinks";
import Outcomes from "../Reusables/Outcomes";

const ETCOutcomes = () => {
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
      "Engineer will be able to apply knowledge of Analog & Digital systems to provide solutions to multi-disciplinary problems.",
      "Engineer will be able to implement hardware and software co-designs for signal processing and communication applications.",
    ],
    PEO: [
      "Engineer will attain excellence in the profession by applying basic and disciplinary knowledge to provide solutions for the societal challenges.",
      "Engineer will work in multi-disciplinary fields of engineering with concern towards environmental issues.",
      "Engineer will exhibit effective communication skills, a strong team spirit and inclination towards lifelong learning with ethical values.",
    ],
  };
  return (
    <Outcomes
      PEO={outcomes.PEO}
      PSO={outcomes.PSO}
      PO={outcomes.PO}
      deptName="E &amp; TC"
      subMenu={NavLinks}
    />
  );
};

export default ETCOutcomes;
