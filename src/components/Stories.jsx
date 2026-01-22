import React from 'react'
import './Stories.css'
import { Useapi } from './Useapi'
function Stories() {
    const {articles,randomIndex } = Useapi('sports');
    if (!articles || articles.length === 0) {
        return <div>Loading stories...</div>;
    }
     articles.sort(()=> Math.random() -0.5)
        
  return (
    <>
    <div className='con'>
     <h3 >Newsly Sports</h3>
        <p>Explore the latest news stories from around the world, curated just for you.</p>
        {articles.slice(0,3).map((article, index) => ( 
            <div className='stories-container'key={index}>
            <div className='story-card'>
                <img  href={article.url}  src={article.urlToImage} alt='Story 1' />
                <div className='story-text'>
                <p>{article.description} </p>
                <a href={article.url} target="_blank"
                >Read more</a></div>
            </div>
                 </div>
        ))}
    </div>
    
          
        
   
           
    </>
  )
}

export default Stories