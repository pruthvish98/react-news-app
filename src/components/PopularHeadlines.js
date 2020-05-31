import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import { fetchHeadlines } from "../redux/headlines/headLineActions";
import HeadLines from './Headlines'
import CircularProgress from '@material-ui/core/CircularProgress';
import AOS from 'aos';
const PopularHeadlines = () => {

    const headLines = useSelector(state => state.headLines);
    const { country, } = useSelector(state => state.globle);
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
        dispatch(fetchHeadlines(country))
    }, [country])

    return (
        <>
            <Row>
                <h4>Popular headlines</h4>
                {headLines.loading && <CircularProgress />}
                {headLines.articles.length > 0 && headLines.articles.map((item, i) =>
                    <div data-aos="fade-up" key={i} className="col-md-10 mb-3">
                        <HeadLines title={item.title} url={item.url} source={item.source} author={item.author} description={item.description}
                            content={item.content} headLines={true} urlToImage={item.urlToImage} publishedAt={item.publishedAt} />

                    </div>)}

            </Row>
        </>
    )
}
export default PopularHeadlines