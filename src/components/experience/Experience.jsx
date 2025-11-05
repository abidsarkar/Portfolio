import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-darkBrown text-white">
      <h2 className="text-center text-4xl sm:text-6xl mb-10 font-semibold font-poppins bg-clip-text text-transparent radial-gradient-text">
        Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-blue-600 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold">Trainee Backend Developer</h3>
          <p className="text-sm text-gray-300">
            bdCalling IT Ltd | Apr 2025 - July 2025
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-base text-gray-100">
            <li>
              Built secure backend systems for a job portal featuring role-based
              authentication, ensuring appropriate data access permissions
              across admin, jobseeker, and employer and jobs types.
            </li>
            <li>
              Developed core backend functionalities for a doctor appointment
              system, enabling patient registration, schedule management, and
              automated booking logic with efficient API endpoints.
            </li>
            
            <li>
              Collaborating with frontend developers and product teams Implement Api integration to frontend using RTK.
            </li>
            <li>
              Following MVC architecture and applying best practices in backend
              development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
