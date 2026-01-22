import React from 'react';
import { Useapi } from './Useapi';
import { useState } from 'react';
import { useParams } from "react-router-dom";

import './New.css';

function Page() {
  const { category } = useParams();       

const {articles} = Useapi(category)

console.log("category in page", category);
  return (
    <>
    <div className='news-con'>
      {articles.map((article, index) => (
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

    </>
  );
}

export default Page;
