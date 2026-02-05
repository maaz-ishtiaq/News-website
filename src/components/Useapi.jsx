import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Useapi(category = 'business', country = 'us') {
  const [articles, setArticles] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const url = `/api/news?country=${country}&category=${category}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        if (data.articles.length > 0) {
          setRandomIndex(Math.floor(Math.random() * data.articles.length));
        }
      })
      .catch(<Link to="/"></Link>);
  }, [category, country]);

  return { articles ,randomIndex};
}
