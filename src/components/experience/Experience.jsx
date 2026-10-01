import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Junior Data Analytics Engineer",
      company: "V2 Technology",
      location: "",
      period: "Sep 2026 - Present",
      current: true,
      points: [
        // Add your V2 Technology responsibilities here
        "Working as a Junior Data Analytics Engineer, building and maintaining data pipelines and analytical solutions.",
      ],
    },
    {
      role: "Career Break",
      company: "",
      location: "",
      period: "Jun 2026 - Aug 2026",
      current: false,
      points: [
        "Took a planned career break to address a medical condition and focus on recovery.",
      ],
    },
    {
      role: "Junior Data Analyst",
      company: "Truck Lagbe Ltd",
      location: "Dhaka, Bangladesh",
      period: "Feb 2026 - May 2026",
      current: false,
      points: [
        "Streamlined recurring KPI reporting through Metabase dashboards, reducing manual reporting time by 40% and improving visibility into growth, campaign performance, customer engagement, and marketplace activity.",
        "Developed foundational KPI logic for GMV and customer acquisition, enabling leadership to track marketplace health and credit performance.",
        "Strengthened data reliability by reconciling analytical outputs against source-of-truth tables and validated metric definitions before stakeholder reporting.",
        "Investigated data-quality anomalies using SQL (REGEXP, LIKE) to identify inconsistencies and improve reporting accuracy.",
        "Translated business requirements into analytical queries and reporting logic, collaborating with cross-functional stakeholders to clarify definitions, validate KPIs, and support data-driven decision-making.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-darkBrown text-white">
      <h2 className="text-center text-4xl sm:text-6xl mb-10 font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg ${
              exp.current ? "bg-blue-600" : "bg-blue-600/70"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-bold">
                {exp.role}
                {exp.company && ` | ${exp.company}`}
              </h3>
              {exp.current && (
                <span className="text-xs font-semibold uppercase tracking-wide bg-white/20 px-3 py-1 rounded-full">
                  Current
                </span>
              )}
            </div>
            {(exp.period || exp.location) && (
              <p className="text-sm text-gray-300 mt-1">
                {exp.location && `${exp.location} | `}
                {exp.period}
              </p>
            )}
            <ul className="list-disc pl-5 mt-3 space-y-2 text-base text-gray-100">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;