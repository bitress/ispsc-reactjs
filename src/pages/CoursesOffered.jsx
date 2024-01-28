import { useEffect } from 'react';
import Section from '../components/Section';
import course_offered_banner from './../assets/img/course_offered_banner.png'

const CoursesOffered = () => {

    useEffect(() => {
        document.title = 'Contact | ISPSC Tagudin';
    
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
                <img src={course_offered_banner} alt="Courses Offered Banner" className="hero-banner" />
                <h3>Courses Offered</h3>
                <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-header">GRADUATE PROGRAMS</div>
                        <div className="accordion-content">
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
                    </div>
                    <div className="accordion-item">
                  <div className="accordion-header">JUNIOR HIGH SCHOOL</div>
                  <div className="accordion-content">
                      <p>Grade 7 to 10</p>
                  </div>
                </div>

                <div className="accordion-item">
                    <div className="accordion-header">SENIOR HIGH SCHOOL</div>
                    <div className="accordion-content">
                        <p>STEM (Science, Technology, Engineering, and Mathematics)</p>
                        <p>ABM (Accountancy, Business and Management)</p>
                        <p>HUMSS (Humanities and Social Sciences)</p>
                    </div>
                </div>
            </div>
                    <div className="accordion-item">
                        <div className="accordion-header">SENIOR HIGH SCHOOL</div>
                        <div className="accordion-content">
                            <p>STEM (Science, Technology, Engineering, and Mathematics)</p>
                            <p>ABM (Accountancy, Business and Management)</p>
                            <p>HUMSS (Humanities and Social Sciences)</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
   </div>

</>
  );
};

export default CoursesOffered;