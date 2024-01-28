import { useEffect } from 'react';
import Section from '../components/Section';
import procedure_for_enrollment_banner from './../assets/img/procedure-for-enrollment-banner.png'
import AccordionItem from "../components/AccordionItem.jsx";
import * as PropTypes from "prop-types";

function GuardHouse() {
    return (
        <>
            <ul>
                <li>
                    Personnel
                    <ul>
                        <li>
                            Check Valid ID and provide Client Satisfaction Survey and Feedback
                            Form (ISO)
                        </li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>Present Valid ID</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function Nurse() {
    return (
        <>
            <ul>
                <li>
                    Personnel
                    <ul>
                        <li>Ms. Rona Garcia</li>
                        <li>Check Temperature</li>
                        <li>Provide Health Clearance Slip</li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>Report to the Nurse Office for New Enrollees Only</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function Registrar() {
    return (
        <>
            <ul>
                <li>Ms. Rona Garcia</li>
                <li>Admin Building</li>
                <li>
                    Personnel
                    <ul>
                        <li>Received (Last Sem)</li>
                        <li>Received Enrollment Requirements</li>
                        <li>Assist and Provide Pre-Enrollment Forms</li>
                        <li>Instruct the Students to Log In to the (DIR)</li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>Submit Clearance (Last Sem)</li>
                        <li>Submit Lacking Requirements</li>
                        <li>Log In to Documented Information Registry (DIR)</li>
                        <li>Submit Clearance (Last Sem)</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function ProgramHead() {
    return (
        <>
            <ul>
                <li>
                    Personnel
                    <ul>
                        <li>Assist, Evaluate, and Update Evaluation Sheet</li>
                        <li>Give a Copy of Updated Evaluation Sheets</li>
                        <li>Provide List Subject and Units to Enroll</li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>
                            Present Copy of Grades Issued (Classcard/CFG/Evaluation
                            Sheets/Compiled IP Grades)
                        </li>
                        <li>
                            Copy of Subjects and Units to Enroll from the Temporary Enrollment
                            Form
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function ScholarshipOffice() {
    return (
        <>
            <ul>
                <li>Dr. Rosemarie Pascua</li>
                <li>
                    Personnel
                    <ul>
                        <li>Evaluate Scholarship Requirements</li>
                        <li>
                            Write The Scholarship at the Pre-Enrollment Form Where the
                            Students Qualify
                        </li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>Submit Scholarship Requirements</li>
                        <li>Present Duly Accomplished Pre-Enrollment Form</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function RegistrarUniFAST() {
    return (
        <>
            <ul>
                <li>Mr. Merlvin Mico</li>
                <li>Dr. William Pedro</li>
                <li>
                    Personnel
                    <ul>
                        <li>
                            Encode Subject, Units, and Bill of Payments to the UniFAST System
                        </li>
                        <li>
                            Print 3 Copies of Enrollment Form or Certificate of Enrollment and
                            Billing
                        </li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>Submit Duly Accomplished Pre-Enrollment Form</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function Cashier() {
    return (
        <>
            <ul>
                <li>Mrs. Caren Joy Ingoy</li>
                <li>
                    Personnel
                    <ul>
                        <li>
                            Print 3 Copies of Enrollment Form or Certificate of Enrollment and
                            Billing
                        </li>
                        <li>Sign CEBs</li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>Submit Certificate of Enrollment and Billing (CEB)</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function Dean() {
    return (
        <>
            <ul>
                <li>
                    Personnel
                    <ul>
                        <li>Check, Verify, and Sign Enrollment Form / CEBs</li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>
                            Present (3) Copies of Enrollment Form or CEBs for Verification and
                            Signature
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function RegistrarFinal() {
    return (
        <>
            <ul>
                <li>Dr. William Pedro</li>
                <li>
                    Personnel
                    <ul>
                        <li>Check, Verify, and Sign Enrollment Form / CEBs</li>
                        <li>Update Enrollment Master List</li>
                        <li>Confirm Enrollment to the UniFAST Enrollment System</li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>
                            Present (3) Copies of Enrollment Form or CEBs for Verification and
                            Signature
                        </li>
                        <li>Submit ID for Validation</li>
                        <li>Get Class Card</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

function RegistrarStaff() {
    return (
        <>
            <ul>
                <li>
                    Personnel
                    <ul>
                        <li>Check Enrolled Subject</li>
                        <li>Provide Class Card</li>
                    </ul>
                </li>
                <li>
                    Student
                    <ul>
                        <li>
                            Provide Copies of Enrollment Form or CEBs to the Deans/Program
                            Head and to the Registrar
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}

const ProcedureForEnrollment = () => {

    useEffect(() => {
        document.title = 'Procedure for Enrollment | ISPSC Tagudin';

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
                            <img
                                src={procedure_for_enrollment_banner}
                                className="hero-banner"
                                alt="procedure_for_enrollment_banner"/>
                            <h3>Procedure for Enrollment</h3>

                            <div className="accordion">
                                <AccordionItem title="Step 1: Guard House" content={<GuardHouse/>}/>
                                <AccordionItem title="Step 2: Nurse" content={<Nurse/>}/>
                                <AccordionItem title="Step 3: Registrar's Office" content={<Registrar/>}/>
                                <AccordionItem title="Step 4: Program Heads/Course Coordinators" content={<ProgramHead/>}/>
                                <AccordionItem title="Step 5: Scholarship Office" content={<ScholarshipOffice/>}/>
                                <AccordionItem title="Step 6: Registrar's Office/UniFAST In Charge" content={<RegistrarUniFAST/>}/>
                                <AccordionItem title="Step 6: Cashier's Office" content={<Cashier/>}/>
                                <AccordionItem title="Step 6: Dean's Office" content={<Dean/>}/>
                                <AccordionItem title="Step 7: Registrar's Office" content={<RegistrarFinal/>}/>
                                <AccordionItem title="Step 8: Registrar's Staff" content={<RegistrarStaff/>}/>
                            </div>


           </div>


       </div>
     </div>
    </div>

    </>
  );
};

export default ProcedureForEnrollment;