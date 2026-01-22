import React from 'react';
import { Useapi } from './Useapi';
import { useState } from 'react';
import './New.css';
function News({category}) {

  const { articles: healthArticles ,randomIndex} = Useapi('health');
  const { articles: sportsArticles } = Useapi('sports');
  const { articles: scienceArticles } = Useapi('science');
  const { articles: entertainmentArticles } = Useapi('entertainment');
  const { articles: technologyArticles } = Useapi('technology');
  const { articles: businessArticles } = Useapi('business');
  

//
  // Combine articles
  const allArticles = [...healthArticles, ...sportsArticles, ...scienceArticles, ...entertainmentArticles, ...technologyArticles, ...businessArticles];
for (let i = allArticles.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1)); // 0 se i ke beech random index
  [allArticles[i], allArticles[j]] = [allArticles[j], allArticles[i]]; // swap
}
  return (
    <>
    <div className='news-con'>
      {allArticles.slice(0,24).map((article, index) => (
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

<button type="button" class="btn btn-warning" style={{backgroundColor:"#FF7A00"}} onClick={() => window.location.href = "/Next"
}>Next</button>
    </>
  );
}

export default News;
