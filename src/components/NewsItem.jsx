import React from 'react';

function NewsItem({ title, date, content, isImportant = false }) {
  return (
    <div className={`news-item ${isImportant ? 'important' : ''}`}>
      <div className="news-title">{title}</div>
      <div className="news-date">{date}</div>
      <div className="news-content">{content}</div>
    </div>
  );
}

export default NewsItem;
