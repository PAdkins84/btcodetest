import './news-feed.scss';

export const NewsFeed = props => (
    <div className="card-list">
        {props.news && props.news.filter((newsItem, idx) => idx < 10).map(newsItem => {
            return (
                <div className="card-item">
                    <h1 key={newsItem.id}>{newsItem.title}</h1>
                    <h2>Author: {newsItem.author}</h2>
                    <p>{newsItem.content.substring(0, 150)}</p>
                </div>
            )
        })}
    </div>
);