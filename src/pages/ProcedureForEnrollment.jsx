import { useEffect } from 'react';
import Section from '../components/Section';
import procedure_for_enrollment_banner from './../assets/img/procedure-for-enrollment-banner.png'
import AccordionItem from '../components/AccordionItem';

const ProcedureForEnrollment = () => {

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
          
       <div className="col-8">
  <div className="container hero">
    <img
      src={procedure_for_enrollment_banner}
      className="hero-banner"
    />
    <h3>Procedure for Enrollment</h3>
    <div className="accordion">
          {/* <AccordionItem title="Regular and Irregular College Students" content={<GraduateProgramsContent />} />
          <AccordionItem title="New, Transferees, Uniting, Cross Enrolee, Second Courser, Graduate
          School" content={<UndergraduateProgramsContent />} /> */}
        </div>
  </div>
</div>


       </div>
     </div>
   </div>

</>
  );
};

export default ProcedureForEnrollment;