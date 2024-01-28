import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import newsJSON from '../data/news.json';

function Home() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);

  const fetchNews = () => {
    setNewsData(newsJSON);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const total_pages = Math.ceil(newsData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNewsData = newsData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    document.title = 'Home | ISPSC Tagudin';

    return () => {
      document.title = 'Home | ISPSC Tagudin';
    };
  }, []);

  return (
    <>
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Section />
          </div>

          <div className="col-8">
            <div className="container hero">
              <h3>
                Welcome to{" "}
                <span style={{color: "var(--maroon)"}}>
        Ilocos Sur Polytechnic State College
      </span>
              </h3>
              <div className="hero-content">
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fssctagudin%2Fvideos%2F1366186200979346%2F&show_text=false&width=560&t=0"
                    style={{border: "none", overflow: "hidden"}}
                    scrolling="no"
                    frameBorder={0}
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
                <p>
                  <span>Welcome Back, Panthers!</span> <br/>
                  “𝐓𝐡𝐞 𝐬𝐭𝐚𝐫𝐭 𝐨𝐟 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐧𝐞𝐰 𝐛𝐫𝐢𝐧𝐠𝐬 "The vacay era has finally ended as
                  we welcome the fresh start of our learning journey. Welcome back,
                  ISPSCians!" The vacay era has finally ended as we welcome the fresh
                  start of our learning journey. Welcome back, ISPSCians! oray for another
                  academic year that awaits to showcase our wit and perseverance.
                </p>
              </div>
            </div>

            <div className="container hero">
              <h3>School News</h3>
              {currentNewsData.map((newsItem) => (
                  <div className="blog" key={newsItem.news_id}>
                    <div className="blog-content">
                      <h4>
                        <Link to={`news/${newsItem.news_id}`}>
                          {newsItem.news_title}
                        </Link>
                      </h4>
                      <p className="inline-content">
                        {newsItem.news_image && (
                            <img
                                className="blog-image"
                                src={newsItem.news_image}
                                alt="Dummy Image"
                            />
                        )}
                        {newsItem.news_content}
                      </p>
                      <p style={{float: 'right'}}>
                        <i className="fal fa-calendar"></i>{' '}
                        {newsItem.date_posted &&
                            new Date(newsItem.date_posted).toDateString()}
                      </p>
                    </div>
                  </div>
              ))}
              <div className="container">
                <ul className="pagination">
                  {currentPage > 1 && (
                      <li>
                        <a
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                          Prev
                        </a>
                      </li>
                  )}

                  {Array.from({length: total_pages}, (_, index) => (
                      <li key={index}>
                        <a
                            className={`page-link ${
                                currentPage === index + 1 ? 'active' : ''
                            }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </a>
                      </li>
                  ))}

                  {currentPage < total_pages && (
                      <li>
                        <a
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                          Next
                        </a>
                      </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
