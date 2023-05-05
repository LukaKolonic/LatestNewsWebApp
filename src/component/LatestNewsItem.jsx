import "../sass/component/latestNewsItem.scss";
import React from 'react';

function formatTime(dateString) {
    const date = new Date(dateString);
    const timeString = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    return timeString;
  }

const LatestNewsItem = (props) => {
    return (
        <div className="item">
            <p className="date">{formatTime(props.article.publishedAt)}</p>
            <p className="newsTitle">{props.article.title}</p>
            <hr className="hr"/>
        </div>
    );
}

export default LatestNewsItem;