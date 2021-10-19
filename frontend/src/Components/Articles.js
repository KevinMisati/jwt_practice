import React,{useState,useEffect} from 'react'
import axiosInstance from './axiosApi'

const Articles = () => {
    const [articles,setArticles] = useState(
        []
    )
    const [isAuthenticated,setIsAuthenticated] = useState(false)
     useEffect(() => {
        axiosInstance.get('/articles/')
        .then(resp => {
            setArticles(resp.data)
        })
    },[])  
    return (
        <div>
            <h1>Articles</h1>
            {
                articles.map(article => {
                    return (
                        <h2 key ={article.id}>{article.title}</h2>
                    )
                })
            }
            {/* {isAuthenticated ? articles.map(article => {
                        return (
                            <h2 key={article.id}>{article.title}</h2>
                        )
                    }) : '' }
            <div>
                <div>
                    {
                        articles.map(article => {
                            return (
                                <h2 key={article.id}>{article.title}</h2>
                            )
                        })
                    }
                </div> */}
                {/* {
                    articles.map(article => {
                        return (
                            <h2 key={article.id}>{article.title}</h2>
                        )
                    })
                } */}
            </div> 
        //</div>
    )
}

export default Articles
