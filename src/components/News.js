import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import spinner from '../components/spinner.gif'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(true)
    const [pageNo, setpageNo] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const updateNews = async () => {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=af20bff6d80245d9abb9f4a21eddeb04&page=${pageNo}&pageSize=9`;
        setloading(true);
        let response = await fetch(url);
        props.setProgress(40);
        let data = await response.json();
        props.setProgress(70);
        setArticles(articles.concat(data.articles))
        settotalResults(data.totalResults)
        setpageNo(pageNo)
        setloading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title =`${props.category[0].toUpperCase()}${props.category.slice(1)} - NewsMonkey`;
        updateNews();
    },[pageNo])
   
    const fetchMoreData = async () => {
        setpageNo(pageNo+1)
    }

    return (
        <>
            <h2 className="text-center" style={{ marginTop: '90px' }}>Top {props.category === 'general' ? '' : `${props.category[0].toUpperCase()}${props.category.slice(1)}`} News Headlines in India</h2>
            {loading &&
                <div className="container text-center" style={{ marginTop: '230px' }}>
                    <img src={spinner} alt="loading" />
                </div>
            }
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loader />}
            // endMessage={
            //     <p style={{ textAlign: "center" }}>
            //         <b>Yay! You have seen it all</b>
            //     </p>
            // }
            >
                <div className="container my-4">
                    <div className="row my-3">
                        {
                            articles.map((element) => {
                                return <div className="col-md-4 d-flex justify-content-center mb-3" key={element.url}>
                                    <NewsItem title={element.title} desc={element.description ? element.description : 'No description available'} imageUrl={element.urlToImage ? element.urlToImage : 'https://dummyimage.com/398x248/ffffff/000000&text=Image+Not+Availabe'} url={element.url} source={element.source.name} date={element.publishedAt} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News
