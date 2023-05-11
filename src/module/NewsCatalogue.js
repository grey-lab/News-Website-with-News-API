import React, {useState, useEffect} from "react";
import NewsElement from './NewsElement'
import axios from "axios";

// Declaring constant for the news catalogue
const NewsCatalogue = () => {
    var topic;
    topic = "business";
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&apiKey=7fc57ab8422243e5afa1e88b4573d02e`)
            setArticles(response.data.articles)
            // Print the data
            console.log(response)
        }
        getArticles()
    },[])
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsElement
                        title={article.title}
                        description={article.description}
                        url = {article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsCatalogue