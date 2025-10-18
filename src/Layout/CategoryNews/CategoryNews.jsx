import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
  const [news, setNews] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();
  const IntID = parseInt(id);

  useEffect(() => {
    if (IntID === 0) {
      setNews(data);
    } else if (IntID === 1) {
      const filtered = data.filter(news => news.others.is_today_pick === true);
      setNews(filtered);
    } else {
      const filtered = data.filter(news => news.category_id === IntID);
      setNews(filtered);
    }
  }, [data, IntID]);

  return (
    <div>
      <h1>
        Total Data <span className="text-secondary font-bold">{news.length}</span> - Found
      </h1>

      <div className="grid grid-cols-1 gap-5 mt-4">
        {news.map(item => (
          <NewsCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
