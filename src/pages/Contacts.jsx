import { useEffect } from 'react';
import Section from '../components/Section';

const Contacts = () => {

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
      <div className="container">
        <div className="lyrics">
          <h2>Contacts</h2>

          <div className="card">

            <h3>General Contact Information</h3>
            <ul>
              <li>Email: <a href="mailto:ispsctagudin@yahoo.com">ispsctagudin@yahoo.com</a></li>
              <li>Phone: 077-674-1474</li>
              <li>Address: Quirino, Tagudin, Ilocos Sur</li>
            </ul>

            <h3>Office Of The President</h3>
            <ul>
              <li>Telefax: (077) 732-5512</li>
              <li>Email: <a href="mailto:ispsc_2705@yahoo.com">ispsc_2705@yahoo.com</a></li>
            </ul>

            <h3>Registrar</h3>
            <ul>
              <li>Cellphone No.: 09306166132</li>
              <li>Email: <a href="mailto:registrarispsc@yahoo.com">registrarispsc@yahoo.com</a></li>
              <li>Messenger: <a href="https://www.messenger.com/t/1846888500">Liam Pedro</a></li>
            </ul>

          </div>

          <div className="card">
            <h3>Google Maps</h3>
          </div>

          <div className="yt-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.8534056395447!2d120.44399129710378!3d16.93736891728953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e6a477e86e37%3A0x4dbcd7fff796de95!2sIlocos%20Sur%20Polytechnic%20State%20College%20-%20Tagudin%20Campus!5e0!3m2!1sen!2sph!4v1664431964190!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
     </div>
   </div>

</>
  );
};

export default Contacts;