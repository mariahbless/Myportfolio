
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaServer, FaDatabase, FaCode } from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';

const SkillsPage = () => {
  const technicalSkills = [
    { name: 'HTML', icon: <FaHtml5 color="#E44D26" />, level: 85 },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" />, level: 90 },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" />, level: 75 },
    { name: 'React', icon: <FaReact color="#61DBFB" />, level: 85 },
    { name: 'Python', icon: <FaPython color="#3776AB" />, level: 80 },
    { name: 'Flask/Django', icon: <FaServer color="#4CAF50" />, level: 75 },
    { name: 'MySQL/Postman', icon: <FaDatabase color="#4479A1" />, level: 80 },
    { name: 'Hosting', icon: <FaCode color="#FF5733" />, level: 65 },
  ];

  const softSkills = [
    { name: 'Professionalism & Integrity', level: 95 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Collaboration', level: 85 },
    { name: 'Creativity & Innovation', level: 80 },
    { name: 'Time Management', level: 90 },
  ];

  return (
    <div style={{ background: '#eff3f8', minHeight: '100vh', padding: '50px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px', color: '#02274d', fontWeight: 'bold' }}>My Skills</h1>

      {/* Technical Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', marginBottom: '50px' }}>
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '25px 20px',
              textAlign: 'center',
              width: '200px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{skill.icon}</div>
            <h6 style={{ fontWeight: '600', marginBottom: '8px', fontSize: '1rem' }}>{skill.name}</h6>
            <ProgressBar
              now={skill.level}
              style={{ height: '6px', borderRadius: '6px' }}
              variant="info"
            />
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#02274d', fontWeight: '600' }}>Soft Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '50px' }}>
        {softSkills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: '#02274d',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center',
              width: '200px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h6 style={{ fontWeight: '600', marginBottom: '10px', fontSize: '0.95rem' }}>{skill.name}</h6>
            <ProgressBar
              now={skill.level}
              style={{ height: '8px', borderRadius: '8px', backgroundColor: '#eaeaea' }}
              variant="info"
            />
          </div>
        ))}
      </div>

      {/* Closing Paragraph */}
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
          I combine my technical expertise with creativity and dedication to deliver high-quality projects.
          Continuously learning and improving, I strive to stay ahead in the fast-evolving tech world.
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;















// import React from 'react';
// import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaServer, FaDatabase, FaCode } from 'react-icons/fa';

// const SkillsPage = () => {
//   const technicalSkills = [
//     { name: 'HTML 75%', icon: <FaHtml5 color="#E44D26" />, level: 85 },
//     { name: 'CSS 80%', icon: <FaCss3Alt color="#1572B6" />, level: 90 },
//     { name: 'JavaScript 65%', icon: <FaJs color="#F7DF1E" />, level: 75 },
//     { name: 'React 70%', icon: <FaReact color="#61DBFB" />, level: 85 },
//     { name: 'Python 75%', icon: <FaPython color="#3776AB" />, level: 80 },
//     { name: 'Flask/Django 75%', icon: <FaServer color="#4CAF50" />, level: 75 },
//     { name: 'MySQL/Postman 85%', icon: <FaDatabase color="#4479A1" />, level: 80 },
//     { name: 'Hosting 60%', icon: <FaCode color="#FF5733" />, level: 65 },
//   ];

//   const softSkills = [
//     { name: 'Professionalism & Integrity', level: 95 },
//     { name: 'Problem Solving', level: 90 },
//     { name: 'Team Collaboration', level: 85 },
//     { name: 'Creativity & Innovation', level: 80 },
//     { name: 'Time Management', level: 90 },
//   ];

//   return (
//     <Container fluid style={{ background: '#eff3f8ff', minHeight: '100vh', padding: '20px 10px' }}>
//       <h1 className="text-center mb-5" style={{ color: '#02274d', fontWeight: 'bold' }}>My Skills</h1>
// {/* Technical Skills */}
// <Row className="mb-5 g-4 justify-content-center">
//   {technicalSkills.map((skill, index) => (
//     <Col xs={6} md={3} key={index} className="d-flex justify-content-center">
//       <div
//         style={{
//           background: 'cream',
//           borderRadius: '40px',
//           padding: '15px',
//           textAlign: 'center',
//           width: '60%', // fills column
//           boxShadow: '0 4px 40px rgba(0,0,0,0.1)',
//           transition: 'transform 0.3s, box-shadow 0.3s',
//           marginLeft:'100px',
//           marginRight:'400px',
//           gap:'40px'
//         }}
//         onMouseEnter={e => {
//           e.currentTarget.style.transform = 'translateY(-5px)';
//           e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
//         }}
//         onMouseLeave={e => {
//           e.currentTarget.style.transform = 'translateY(0)';
//           e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
//         }}
//       >
//         <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{skill.icon}</div>
//         <h6 style={{ fontWeight: '600', marginBottom: '5px', fontSize: '1rem' }}>{skill.name}</h6>
//         <ProgressBar
//           now={skill.level}
//           style={{ height: '6px', borderRadius: '6px' }}
//           variant="info"
//         />
//       </div>
//     </Col>
//   ))}
// </Row>


//       {/* Soft Skills */}
//       <h2 className="text-center mb-4" style={{ color: '#02274d', fontWeight: '600' }}>Soft Skills</h2>
//       <Row className="justify-content-center g-4">
//         {softSkills.map((skill, index) => (
//           <Col xs={6} sm={4} md={2} key={index}>
//             <div
//               style={{
//                 background: '#02274d',
//                 color: 'white',
//                 padding: '15px',
//                 borderRadius: '15px',
//                 textAlign: 'center',
//                 boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.3s',
//               }}
//               onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
//               onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
//             >
//               <h6 style={{ fontWeight: '600', marginBottom: '8px', fontSize: '0.95rem' }}>{skill.name}</h6>
//               <ProgressBar
//                 now={skill.level}
//                 style={{ height: '8px', borderRadius: '8px', backgroundColor: '#eaeaea' }}
//                 variant="info"
//               />
//             </div>
//           </Col>
//         ))}
//       </Row>

//       {/* Closing Paragraph */}
//       <Row className="mt-5">
//         <Col xs={12} md={8} className="mx-auto text-center">
//           <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
//             I combine my technical expertise with creativity and dedication to deliver high-quality projects.
//             Continuously learning and improving, I strive to stay ahead in the fast-evolving tech world.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SkillsPage;
