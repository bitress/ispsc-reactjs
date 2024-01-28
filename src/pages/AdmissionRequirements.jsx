import Section from '../components/Section';
import AccordionItem from '../components/AccordionItem';
import admission_requirements_banner from '../assets/img/admission_requirements_banner.png'
function SeniorHighGraduate() {
    return (
        <>
            <ul>
                <li>SF 9 (Senior High School Report Card)</li>
                <li>Certificate of Good Moral Character</li>
                <li>
                    Birth Certificate issued by the Philippine Statistic Authority
                    (PSA); formerly NSO
                </li>
                <li>
                    2 pcs. passport size, white background, with name tag (i.e. DELA
                    CRUZ, Juan)
                </li>
            </ul>
        </>
    );
}

function ALSPassers() {
    return (
        <>
            <ul>
                <li>
                    ALS Rating (Passed) Certificate idicating that the student is
                    eligible for admission to college
                </li>
                <li>Certificate of Good Moral Character</li>
                <li>
                    Birth Certificate issued by the Philippine Statistic Authority
                    (PSA); formerly NSO
                </li>
                <li>
                    2 pcs. passport size, white background, with name tag (i.e. DELA
                    CRUZ, Juan)
                </li>
            </ul>
        </>
    );
}

function Transferees() {
    return (
        <>
            <p>Transfer Credentials</p>
            <ul>
                <li>Certificate of Good Moral Character</li>
                <li>Certificate of Final Grades</li>
                <li>Certificate of Good Moral Character</li>
                <li>Transfer Certificate</li>
                <li>Certificate of Good Moral Character</li>
            </ul>
            <p>
                Birth Certificate issued by the Philippine Statistic Authority
                (PSA); formerly NSO
            </p>
            <p>
                2 pcs. passport size, white background, with name tag (i.e. DELA
                CRUZ, Juan)
            </p></>
    );
}

function CrossEnrollee() {
    return (
        <>
            <p>Permit to Cross-enroll</p>
        </>
    );
}

function ReturningStudents() {
    return (
        <>
            <p>Evaluation Sheet (signed by Program Head or Dean)</p>
            <p>
                Certificate of Final Grades / Class Cards from previous semester
            </p>
        </>
    );
}

const AdmissionRequirements = () => {

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
                                    src={admission_requirements_banner}
                                    className="hero-banner"
                                />
                                <h3>Admission Requirements</h3>
    <div className="accordion">
         <AccordionItem title="High School Graduate of Old Basic Curriculum (2015 and below)" content={<HSGraduateOldCurriculum />} />
        <AccordionItem title="Senior High School Graduate (2016 and above)" content={<SeniorHighGraduate/>}/>
        <AccordionItem title="ALS/A&E Passers (Secondary Level)" content={<ALSPassers/>}/>
        <AccordionItem title="Transferees (In-bound)" content={<Transferees/>}/>
        <AccordionItem title="Cross-Enrollee (In-bound from other school)" content={<CrossEnrollee/>}/>
        <AccordionItem title="Returning Students" content={<ReturningStudents/>}/>
    </div>
  </div>
</div>


       </div>
     </div>
   </div>

</>
  );
};

const HSGraduateOldCurriculum = () => {

  return (
    <>
      <ul>
            <li>High School Report Card (Form 138)</li>
            <li>Certificate of Good Moral Character</li>
            <li>
              Birth Certificate issued by the Philippine Statistic Authority
              (PSA); formerly NSO
            </li>
            <li>
              2 pcs. passport size, white background, with name tag (i.e. DELA
              CRUZ, Juan)
            </li>
          </ul>
    </>
  )

}

export default AdmissionRequirements;