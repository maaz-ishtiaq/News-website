import React from 'react'
import './New.css'
import {Useapi} from './Useapi'
function Nextpage() {
      const { articles: healthArticles ,randomIndex} = Useapi('health');
      const { articles: sportsArticles } = Useapi('sports');
      const { articles: scienceArticles } = Useapi('science');
      const { articles: entertainmentArticles } = Useapi('entertainment');
      const { articles: technologyArticles } = Useapi('technology');
      const { articles: businessArticles } = Useapi('business');
      
    
     const allArticles = [...healthArticles, ...sportsArticles, ...scienceArticles, ...entertainmentArticles, ...technologyArticles, ...businessArticles];
for (let i = allArticles.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1)); 
  [allArticles[i], allArticles[j]] = [allArticles[j], allArticles[i]];
}
  return (
    <>
    <div className='news-con'>
      {allArticles.map((article, index) => (
        <div className="custom-card" key={index}>
          <img src={article.urlToImage} className="custom-card-img" alt={article.title} />
          <div className="custom-card-body">
            <h5 className="custom-card-title">{article.title}</h5>
            <p className="custom-card-text">
              {article.description ? article.description.slice(0, 100) + '...' : 'Click for more details...'}
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="custom-btn">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>

<button type="button" className="btn btn-warning" style={{backgroundColor:"#E36B00"}}
 onClick={() => window.location.href = "/"
}>Back</button>
    </>
  );
}

export default Nextpage