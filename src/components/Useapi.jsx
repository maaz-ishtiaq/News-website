import { useState, useEffect } from 'react';

export function Useapi(category = 'business', country = 'us') {
  const [articles, setArticles] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    // Vercel production: use serverless API
    const url = `/api/news?country=${country}&category=${category}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const list = data.articles || [];
        setArticles(list);
        if (list.length > 0) {
          setRandomIndex(Math.floor(Math.random() * list.length));
        }
      })
      .catch(err => {
        console.error(err);
        setArticles([]);
      });
  }, [category, country]);

  return { articles, randomIndex };
}
