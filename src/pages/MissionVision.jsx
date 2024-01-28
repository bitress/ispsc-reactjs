import { useEffect } from 'react';
import Section from '../components/Section';

const MissionVision = () => {

    useEffect(() => {
        document.title = 'Mission Vision | ISPSC Tagudin';
    
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mission-and-vision">
              {/* Vision Card */}
              <div className="card">
                <h3>Vision</h3>
                <p>
                  A vibrant and nurturing Polytechnic Service College for transforming lives and communities.
                </p>
                <p className="translation-fil">
                  <em>Filipino: (Pangitain) Maningning at mapag-arugang politeknikong serbisyo-kolehiyo para sa pagpapaunlad ng buhay at lipunan.</em>
                </p>
                <p className="translation-il">
                  <em>Iloco: (Sirmata) Narimat ken managtaripato nga serbisyo-kolehiyo politekniko para ti pannakabalbaliw iti biag ken kagimongan.</em>
                </p>
              </div>

              {/* Mission Card */}
              <div className="card">
                <h3>Mission</h3>
                <p>
                  To improve the lives of people and communities through quality instruction, innovations, productivity, initiatives, environment and industry-feasible technologies, resource mobilization and transformational outreach programs and services.
                </p>
                <p className="translation-fil">
                  <em>Filipino: Mapaunlad ang buhay ng tao at lipunan sa pamamagitan ng de-kalidad na pagtuturo, pagkamalikhain, panguguna sa pagiging produktibo, teknolohiyang pangkapaligiran at industria, tamang paggamit ng pinagkukunang yaman at mga program at serbisyong makapagbabago sa kabuhayan.</em>
                </p>
                <p className="translation-il">
                  <em>Iloco: Mapadur-as iti panagbiag dagiti tattao ken gimong babaen iti de-kalidad a panagisuro, panagpartuat, nabunga ken naballigi a gannuat, teknolohiya a mangsaluad iti aglawlaw ken iti industria, naikalintegan a panagusar dagiti pagbaknangan ken pannakaipaay iti programa ken serbisyo nga mangidanon iti panagbalbaliw.</em>
                </p>
              </div>

              {/* Goals and Objectives Card */}
              <div className="card">
                <h3>Goals and Objectives</h3>
                <ol className="card-list" type="1">
                  <li>1. To make the college responsive and relevant to the individual and social needs for optimum human development.</li>
                  <li>2. To offer priority programs in tourism, teacher education, agriculture fishery, agro-forestry, trades, business industry, and Information technology which will generate knowledge base to educate the people and communities.</li>
                  <li>3. To conduct a wide-range of research and extension programs to provide quality training and technologies for inclusive growth.</li>
                  <li>4. To implement government programs and thrusts in the context of regional and national development for poverty alleviation.</li>
                  <li>5. To prepare and develop highly productive and employable professionals, “glocal” (global and local) technopreneurs who are morally-crafted and environmentally-oriented for coping globalization standards.</li>
                </ol>
              </div>

              {/* Core Values Card */}
              <div className="card">
                <h3>Core Values</h3>
                <ul className="card-list">
                  <li><span className="red">P</span>roductivity - The delivery of quality programs in instruction, research, extension, production, and development of responsive, proactive professionals and graduates and professing determination and hard work in the system.</li>
                  <li><span className="red">R</span>esiliency - Refers to the renewal and motivational strategies, looking at the bright side of academic life and cultivating positive attitudes amidst failures and adversities.</li>
                  <li><span className="red">A</span>ccountability - Means the responsibility, answerability, transparency, impartially, decisiveness, and delegation of work roles and streamlining of functions.</li>
                  <li><span className="red">I</span>ngenuity - Refers to prudent use of resources, prudence in spending, cost-cutting measures, and deciding the best possible action considering circumstances.</li>
                  <li><span className="red">S</span>ynergy - Pertains to teamwork, collaboration, orchestration, subordination, and of all partner agencies, sponsors, and stakeholders, parents, alumni, and communities.</li>
                  <li><span className="red">E</span>xcellence - Refers to global orientation, borderless perspective, equal opportunities, empowerment, and transformation, multi-tasking and leading by example.</li>
                </ul>
              </div>

              {/* Strategic Developmental Goals Card */}
              <div className="card">
                <h3>Strategic Developmental Goals ("BRAVE D’ STORM")</h3>
                <ul className="card-list">
                  <li><span className="green">B</span>ridging Networks and Building Communities</li>
                  <li><span className="green">R</span>esource Generation and Employees Empowerment</li>
                  <li><span className="green">A</span>ccreditation and Development of Academic Programs</li>
                  <li><span className="green">V</span>irtual Technology Systems and Website Development</li>
                  <li><span className="green">E</span>mpowering Student Services and Enhancing Pedagogical System</li>
                  <li><span className="green">D</span>evelopment of Quality, Relevant and Accessible Undergraduate and Graduate School System</li>
                  <li><span className="green">S</span>cholarship and Financial Assistance</li>
                  <li><span className="green">T</span>raining of Employees for Global Competitiveness</li>
                  <li><span className="green">O</span>rganizational Immersion and Revolutionary Extension Activities</li>
                  <li><span className="green">R</span>evolutionized Research and Gender Development Programs</li>
                  <li><span className="green">M</span>aintenance, Modernization and Mitigation Measures</li>
                </ul>
              </div>

              {/* Philosophy Card */}
              <div className="card">
                <h3>Philosophy</h3>
                <p>
                  <span className="blue">F</span>lourish ISPSC,  <br />
                  <span className="blue">D</span>eliver Quality Education and Services, and  <br />
                  <span className="blue">L</span>aunch Academic Excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     </div>
   </div>

</>
  );
};

export default MissionVision;