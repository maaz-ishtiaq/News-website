import React from 'react'
import { Useapi } from './Useapi';
import './Newsitems.css'
function Newsitems() {
  const { articles, randomIndex } = Useapi('sports');
  const article = articles[randomIndex];
  return (
    <div className='container'>
      {articles.length > 0 && (
        <>
          <div className='cards'>
            <div className='left-card'>
              <div className="news-item-container">
                <div className="card">
                  <a href={article.url}>
                    <img src={article.urlToImage} className="card-img-top card-image" alt={article.title} />
                  </a>
                  <div className="card-body card-b">
                    <p className="card-text card-t">{article.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='side-card'>
              <h4>{article.author} </h4>
              <hr />
              <p>{article.description}</p>
            </div>
          </div>
        </>
      )}


    </div>

  )
}

export default Newsitems