const ResultCard = ({ result }) => {
    const { title, author, url, thumb_url_medium: thumbnail } = result;

    return (
        <a href={url} target="_blank" rel="noreferrer noopener">
            <div>
                <img src={thumbnail} />
                <h3>{title}</h3>
                <h4><i>{author}</i></h4>
                <p></p>
            </div>
        </a>
    )
}

export default ResultCard;