import { useState, useEffect } from 'react';
import announcementsData from '../data/announcements.json'
function Section(){

    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        setAnnouncements(announcementsData);
    }, []);


    return (
        <>
        <div className="section">
            <div className="card">
              <h3>Announcements</h3>
              <ul id='announcements'>
                  {announcements.map((announcement) => (
                      <li key={announcement.announcement_id} style={{ marginBottom: "8px" }}>
                          {`${announcement.announcement_date}: ${announcement.announcement_content}`}
                      </li>
                  ))}
              </ul>
            </div>

            <div className="card">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a target="_blank" href="https://www.ispsctagudin.info/student-portal/" rel="noreferrer">
                    <i className="far fa-browser"></i> Student Portal
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.ispsctagudin.info/library/" rel="noreferrer">
                    <i className="far fa-books"></i> eLibrary
                  </a>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>School Calendar</h3>
              <div className="yt-embed">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&showNav=1&showTitle=0&src=OWRmYmVmZDAwY2JhMTM3MTJjNGQ3NzA3ZDA4YjE0ZGU1MDU4ZTI3OTk5NjQ2YWIyOWY5OTg0MTc2OTdlODExNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4"
                  style={{ border: 'solid 1px #777' }}
                  width="800"
                  height="600"
                ></iframe>
              </div>
            </div>

      
          </div>
          </>
    )
}

export default Section;