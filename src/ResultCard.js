import "./ResultCard.css"

const ResultCard = ({ result }) => {
    const { title, author, url, thumb_url_medium: thumbnail, pub_date: pubDate } = result;

    const formattedDate = pubDate ? new Date(pubDate).toLocaleDateString() : "";

    return (
        <a href={url} target="_blank" rel="noreferrer noopener">
            <div className="card">
                <div class={"title"}>{title}</div>
                <div class="image-box"><img src={thumbnail} /></div>
                <div class="information">
                    <div class="information-row">
                        {author}
                    </div>
                    <div class="information-row">
                        <i>{formattedDate}</i>
                    </div>
                </div>
                <p></p>
            </div>
        </a>
    )
}

export default ResultCard;