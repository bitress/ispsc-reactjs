import { useEffect } from 'react';
import Section from '../components/Section';

const Hymn = () => {

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
                    <h2>ISPSC HYMN</h2>
                    <p>
                        I<br />
                        Dreams and visions within the minds of the nobles<br />
                        A place to stay, a chance to live and grow<br />
                        Men endowed with wisdom and honor, molded pride of society.
                    </p>
                    <p className="refrain">
                        Refrain:<br />
                        We’re singing victorious praises,<br />
                        Ilocos Sur Polytechnic State College<br />
                        The place where you and I belong,<br />
                        Long live our ALMA MATER.
                    </p>
                    <p>
                        II<br />
                        Once realized, built close to every heart<br />
                        With warm motherly embrace for all<br />
                        Like a knight in shining armor, Guiding star of searching souls.
                    </p>
                    <p className="refrain">
                        Refrain:<br />
                        We’re singing victorious praises,<br />
                        Ilocos Sur Polytechnic State College<br />
                        The place where you and I belong,<br />
                        Long live our ALMA MATER.
                    </p>
                    <p className="bridge">
                        Bridge:<br />
                        Your quest to provide us with enlightened minds<br />
                        To prime us competently in our endeavors<br />
                        Enabling each to share wherever we are<br />
                        Towards greater heights, we go forth and serve<br />
                        God and fellowmen, far-reaching we will shine.
                    </p>
                    <p className="refrain">
                        Refrain:<br />
                        We’re singing victorious praises,<br />
                        Ilocos Sur Polytechnic State College<br />
                        The place where you and I belong,<br />
                        Long live our ALMA MATER (2X)<br />
                        Long Live ISPSC.
                    </p>
                    <p className="composer">Music & lyrics by JOEL PE</p>
                </div>

                <div className="yt-embed">
                    <iframe
                        src="https://www.youtube.com/embed/78F-UVZDxec?si=uSlwC_MrGKm9CSFi"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

     </div>
   </div>

</>
  );
};

export default Hymn;