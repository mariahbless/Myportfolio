



import React from "react";

// ✅ Import images
import contactImg from "../Picture/logo.jpg";
import image5 from "../Picture/linkedin.png";
import image6 from "../Picture/x.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive React portfolio to showcasing skills and job centered ideas.",
    link: "https://mariahbless.github.io/Hunback-frontend/#/",
    screenshot: contactImg,
  },
  {
    title: "My personal portfolio",
    description: "Personale portfolio website showcasing my skills,projects and abilities",
    link: "https://your-store-link.com",
    screenshot: image5,
  },
  {
    title: "DIFA-UG Website",
    description: "A REST API built with Flask,MySQL,Python,React js,html and css for organisation management and donation management",
    link: "https://difa-ug.org/",
    screenshot: image6,
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ padding: "50px 20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      
      {/* Introduction */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#02274d", marginBottom: "15px" }}>My Projects</h1>
        <p style={{ color: "#555", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
          A selection of my work — each project reflects my learning, creativity, and problem-solving journey. Explore the projects to see my skills in action.
        </p>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px"
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "20px",
              width: "280px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            {/* Image */}
            <img
              src={project.screenshot}
              alt={project.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />

            {/* Content */}
            <div style={{ padding: "20px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "10px", color: "#02274d" }}>
                {project.title}
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#555", flex: 1, marginBottom: "15px" }}>
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#02274d",
                  color: "#fff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "background-color 0.3s"
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#053362"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#02274d"}
              >
                Click to View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




// import React from "react";

// // ✅ Import images
// import contactImg from "../Picture/logo.jpg";
// import image5 from "../Picture/linkedin.png";
// import image6 from "../Picture/x.png";

// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "A responsive React portfolio to showcase my skills and projects.",
//     link: "https://your-portfolio-link.com",
//     screenshot: contactImg,
//   },
//   {
//     title: "E-Commerce Store",
//     description: "An online store with cart, checkout, and admin dashboard.",
//     link: "https://your-store-link.com",
//     screenshot: image5,
//   },
//   {
//     title: "Contact Manager API",
//     description: "A REST API built with Flask and MySQL for managing contacts.",
//     link: "https://github.com/yourusername/contact-manager",
//     screenshot: image6,
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       {/* Introduction */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-3">My Projects</h1>
//         <p className="text-gray-600 max-w-xl mx-auto">
//           A selection of my work — each project reflects my learning and problem-solving journey.
//         </p>
//       </div>

//       {/* Horizontal Row of Cards */}
//       <div className="flex space-x-6 justify-center">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="w-48 flex flex-col items-center rounded-xl shadow-md hover:shadow-lg transition bg-white"
//           >
//             {/* Image */}
//             <img
//               src={project.screenshot}
//               alt={project.title}
//               className="rounded-t-xl w-24 h-24 object-cover mt-4"
//             />

//             {/* Content */}
//             <div className="p-4 flex flex-col items-center">
//               <h2 className="text-md font-semibold mb-1 text-center">{project.title}</h2>
//               <p className="text-gray-600 text-sm text-center">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-3 w-full inline-block text-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
//               >
//                 View Project
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
