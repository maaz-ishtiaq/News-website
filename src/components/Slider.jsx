import React, { use, useEffect, useState } from 'react';
import './Slider.css'
import { Useapi } from './Useapi';
import logo from './logo.png'

function Slider() {
  const { articles ,randomIndex} = Useapi()
  const article = articles[randomIndex];
  
  return (
    <div className='pt-5'>
      {articles.length > 0 && (
        <>
          <div className='img-container'>
            <div className='image' style={{ backgroundImage: `url(${article.urlToImage})` }}>
              <h4>{article.title} </h4>
              <br />
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="button">
                Explore Now <i className="ri-arrow-right-long-line" style={{ fontSize: '22px', marginLeft: '8px', color: 'white' }}></i>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
