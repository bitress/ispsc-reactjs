import { useEffect } from 'react';
import Section from '../components/Section';

const AdmissionRequirements = () => {

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

       <div className="col-9">
          


       </div>
     </div>
   </div>

</>
  );
};

export default AdmissionRequirements;