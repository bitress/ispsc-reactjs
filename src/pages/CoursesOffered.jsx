import {  useEffect } from 'react';
import Section from '../components/Section';
import course_offered_banner from './../assets/img/course_offered_banner.png'
import AccordionItem from '../components/AccordionItem';


const CoursesOffered = () => {
    useEffect(() => {
        document.title = 'What We Offer | ISPSC Tagudin';
    
        return () => {
          document.title = 'Home | ISPSC Tagudin';
        };
      }, []); 

  return (
    <>
    <div className="container">
     <div className="row">
       <div className="col-4">
           <Section></Section>
       </div>

       <div className="col-8">
      <div className="container hero">
        <img src={course_offered_banner} className="hero-banner" alt="Hero Banner" />
        <h3>Courses Offered</h3>
        <div className="accordion">
          <AccordionItem title="GRADUATE PROGRAMS" content={<GraduateProgramsContent />} />
          <AccordionItem title="UNDERGRADUATE PROGRAMS" content={<UndergraduateProgramsContent />} />
          <AccordionItem title="JUNIOR HIGH SCHOOL" content={<JuniorHighSchoolContent />} />
          <AccordionItem title="SENIOR HIGH SCHOOL" content={<SeniorHighSchoolContent />} />
        </div>
      </div>
    </div>
    </div>
   </div>

</>
  );
};

const GraduateProgramsContent = () => {
    return (
      <div>
        <p>Master of Science in Education</p>
        <p>Major:</p>
        <ul>
          <li>General Education</li>
          <li>General Science</li>
          <li>English</li>
          <li>Mathematics</li>
        </ul>
        <p>Master of Arts in Education</p>
        <p>Major:</p>
        <ul>
          <li>Educational Management</li>
        </ul>
      </div>
    );
  };
  
  const UndergraduateProgramsContent = () => {
    return (
      <div>
          <p>Bachelor of Secondary Education</p>
          <p>Major:</p>
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Filipino</li>
            <li>Social Studies</li>
          </ul>
          <p>Bachelor of Elementary Education</p>
          <p>Bachelor of Physical Education</p>
          <p>Bachelor of Science in Business Administration</p>
          <p>Major:</p>
          <ul>
            <li>Human Resource Management</li>
            <li>Marketing Management</li>
            <li>Financial Management</li>
          </ul>
          <p>Bachelor of Science in Mathematics</p>
          <p>Bachelor of Arts in English Language</p>
          <p>Bachelor of Arts in Psychology</p>
          <p>Bachelor of Arts in Social Science</p>
          <p>Bachelor of Science in Entrepreneurship</p>
          <p>Bachelor of Science in Information Technology</p>
          <p>Bachelor of Public Administration</p>
      </div>
    );
  };
  
  const JuniorHighSchoolContent = () => {
    return (
      <div>
        <p>Grade 7 to 10</p>
      </div>
    );
  };
  
  const SeniorHighSchoolContent = () => {
    return (
      <div>
        <p>STEM (Science, Technology, Engineering, and Mathematics)</p>
        <p>ABM (Accountancy, Business and Management)</p>
        <p>HUMSS (Humanities and Social Sciences)</p>
      </div>
    );
  };
  

export default CoursesOffered;