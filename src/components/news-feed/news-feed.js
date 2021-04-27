import './news-feed.scss';

export const NewsFeed = props => (
    <div className="card-list">
        {props.news && props.news.filter((newsItem, idx) => idx < 10).map((newsItem, index) => {
            return (
                <div key={index} className="card-item">
                    <h1 className="news-headline">{newsItem.title}</h1>
                    <h2>Author: {newsItem.author}</h2>
                    <p>{newsItem.content.substring(0, 150)}</p>
                    <a href={newsItem.url}>Link to article</a>
                </div>
            )
        })}
    </div>
);