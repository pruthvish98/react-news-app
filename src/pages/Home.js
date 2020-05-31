import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import { categoryNews } from "../redux/categaoryNews/categoryActions";
import NewsCard from '../components/NewsCard';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createFilter } from 'react-search-input'
import Sources from '../components/sources';
import PopularHeadlines from '../components/PopularHeadlines'
import CatHead from '../components/header/CatHead';
import AOS from 'aos';
const Home = () => {
    const catNews = useSelector(state => state.category);
    const searched = useSelector(state => state.searchResult);
    const state = useSelector(state => state);
    const { category, country, search } = useSelector(state => state.globle);
    const dispatch = useDispatch();

    const KEYS_TO_FILTERS = ['title', 'description']
    const searchResult = searched.articles.filter(createFilter(search, KEYS_TO_FILTERS))
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
        let categoryFilter = JSON.parse(localStorage.getItem('category'));
        if (categoryFilter !== null && category === "") {
            categoryFilter.sort(function (a, b) {
                return b.count - a.count
            })
            categoryFilter = categoryFilter[0].value
        } else {
            categoryFilter = category
        }
        dispatch(categoryNews(country, categoryFilter))
    }, [category, country, search])


    console.log("state", state)
    return (
        <>
            <CatHead />
            <Sources />
            <div className="container-fluid" style={{ display: "flex" }}>
                <div className="col-md-8" style={{ marginLeft: "15px" }}>
                    {(search != "" && searchResult.length > 0) ? <h3> Showing Result of {search} </h3> : ""}
                    {(category != "" && catNews.articles.length > 0 && search === "") ? `Showing Result of ${category} Category` : ""}
                    {(search !== "" && searchResult.length === 0 && (searchResult.loading !== true)) ? <h3> No Result found of {search}   </h3> : ""}
                    {(searched.loading) ? <LinearProgress /> : ""}
                    {(search !== "" && searchResult.length > 0 &&
                        <Row>
                            {searchResult.map((item, i) =>
                                <Col data-aos="fade-up" key={i} className="col-md-4" >
                                    <NewsCard title={item.title}
                                        source={item.source} url={item.url} author={item.author} description={item.description}
                                        urlToImage={item.urlToImage} publishedAt={item.publishedAt} content={item.content} />
                                </Col>
                            )}
                        </Row>)}
                    {(catNews.loading) ? <LinearProgress /> : ""}
                    {(search === "" && catNews.articles.length > 0 &&
                        <Row>
                            {catNews.articles.map((item, i) =>
                                <Col data-aos="fade-up" key={i} className="col-md-4" >
                                    <NewsCard title={item.title}
                                        source={item.source} url={item.url} author={item.author} description={item.description}
                                        urlToImage={item.urlToImage} publishedAt={item.publishedAt} content={item.content} />
                                </Col>
                            )}
                        </Row>)}
                </div>
                <div className="col-md-4">
                    <PopularHeadlines />
                </div>
            </div>
        </>
    )
}
export default Home