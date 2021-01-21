const formatDate = (dateObj) => dateObj.toISOString().split("T")[0];

// elapsed is the number of days before current date
const getDates = (elapsed) => {
    const today = new Date();
    const prevDate = new Date(today.getTime() - (elapsed*24*60*60*1000));
    return [formatDate(today), formatDate(prevDate)];
}

const getSearchURL = (query, days) => {
    let url = `https://api.parsely.com/v2/search?apikey=arstechnica.com&q=${query}`;

    if (days) {
        const [prev, today] = getDates(days);
        url += `&pub_date_start=${prev}`
        url += `&pub_date_end=${today}`
    }

    return url;
}

const search = (query, days, resultsCallback, errorCallback) => {
    const url = getSearchURL(query, days);

    fetch(url)  
        .then(response => response.json())
        .then(({ data }) => resultsCallback(data))
        .catch(error => errorCallback(`Something went wrong! ${error}`));
}

export default search;