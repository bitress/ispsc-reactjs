import { useEffect } from 'react';
import Section from '../components/Section';


const BriefHistory = () => {
  return (
    <div className="col-8">
      <div className="container hero">
        <h3>Brief History</h3>
        <p className="brief_history">Tagudin Campus is the seat of governance in the South Cluster. It was known formerly as the Tagudin General Comprehensive High School established which started as the Tagudin High School and became a national high school by virtue of RA 4447 which was signed into law in June 19, 1965. After its integration into ISPSC, it became the College of Arts and Sciences. Today it houses the College of Teacher Education, the College of Business and Hospitality Management, the College of Arts and Sciences, and the College of Information Technology.</p>
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  return (
    <div className="col-12">
      <div className="section">
        <div className="card">
          <h3>Welcome to ISPSC Tagudin Campus</h3>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <strong>Dr. Tessie Dela Cruz</strong><br />
                  Dean, Graduate School
                </li>
                <li>
                  <strong>Dr. Ernest D. Padiwan</strong><br />
                  Dean, College of Arts and Sciences
                </li>
                <li>
                  <strong>Dr. Shirley P. Palma</strong><br />
                  Dean, College of Teacher Education
                </li>
                <li>
                  <strong>Atty. Carlo Manglioan</strong><br />
                  Dean, College of Business, Management and Entrepreneurship
                </li>
                <li>
                  <strong>Mrs. Femarie M. Capistrano</strong><br />
                  Principal, Laboratory High School
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <strong>DR. EDERLINA M. SUMAIL</strong><br />
                  Campus Administrator
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const About = () => {

    useEffect(() => {
        document.title = 'About | ISPSC Tagudin';
    
        return () => {
          document.title = 'Home | ISPSC Tagudin';
        };
      }, []); 
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-4">
            <Section />
        </div>

      <BriefHistory />
      <WelcomeSection />
      </div>
    </div>

</>
  )
}

export default About;
