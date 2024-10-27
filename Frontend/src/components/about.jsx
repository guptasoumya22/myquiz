// import React from "react";
// import "../components_style/about.css";

// const about = () => { 
//   return (
//     <div className="container  about_body">
//       <div className="h1">About Us</div>
//       <div className="h3">
//         Developed on the MERN stack, this responsive quiz app offers a
//         comprehensive assessment experience. Assessors effortlessly create tests
//         , customizing parameters like duration, expiry, and question count (up
//         to 20). With secure authentication, assessors access test results and
//         self-take functionalities. Examinees provide info, ensuring singular
//         test attempts before expiry; auto-submission occurs on time lapse. Data
//         privacy is ensured: dynamic question rotation thwarts cheating. A
//         robust, user-friendly tool for efficient evaluation and engaging
//         examination.
//       </div>
//       <br />
//       <div className="h2">Team Members</div>
//       {/* cards */}
//       <div className="row about-img">
//         <div className="col-lg-4 col-md-6 col-sm-12 about-card-img">
//           <div className="card5 vedi"></div>
//           <p className="text1">
//             Name : Vedi Gupta <br /> Enroll No. : 211B343
//           </p>
//         </div>

//         <div className="col-lg-4 col-md-6 col-sm-12 about-card-img">
//           <div className="card5 sunit"></div>
//           <p className="text1">
//             Name : Sunit Pal <br /> Enroll No. : 211B384
//           </p>
//         </div>

//         <div className="col-lg-4 col-md-6 col-sm-12 about-card-img">
//           <div className="card5 soumya"></div>
//           <p className="text1">
//             Name : Soumya Gupta <br /> Enroll No. : 211B317
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default about;

import React from "react";
import "../components_style/about.css";

const About = () => {
  return (
    <div className="container about-body">
      <div className="about-header">About MyQuiz</div>

      {/* cards */}
      <div className="about-content">
        <div className="about-card">
          <div className="about-card-img soumya"></div>
          <p className="about-card-text">
            Soumya Gupta <br /> soumyagupta1022@gmail.com
          </p>
        </div>
        <div className="about-description">
          <h3 className="about-subheader">Project Developer</h3>
          <p>
            Hi, I'm Soumya Gupta, the developer of MyQuiz, a dynamic online
            platform built on the MERN stack.
          </p>
          <p>
            MyQuiz is an innovative solution for educational engagement,
            designed to streamline the process of creating and participating in
            quizzes. The platform features two primary roles: Teacher and
            Student. Teachers can effortlessly create quizzes and generate a
            unique 6-digit code for each quiz. Students join the quiz using this
            code, enabling a seamless and interactive learning experience.
            MyQuiz enhances the teaching process by providing a user-friendly
            interface, ensuring easy quiz creation and participation, and
            facilitating real-time feedback and assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;