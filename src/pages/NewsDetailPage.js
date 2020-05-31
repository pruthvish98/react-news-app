import React from 'react';
import PopularHeadlines from '../components/PopularHeadlines'
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import { Redirect } from 'react-router-dom';
const NewsDetailPage = (props) => {
    if (props.location.state === undefined) {
        return (<Redirect to="/" />)
    }

    const { source, author, title, description, url, urlToImage, publishedAt, content } = props.location.state
    const imageStyle = { width: "1080px", marginTop: "25px" }
    return (
        <>
            <div className="container-fluid mt-2" style={{ display: "flex" }}>
                <div className="col-md-8" style={{ marginLeft: "15px" }}>
                    <div className="mb-2">
                        <img src={urlToImage} style={imageStyle} />
                    </div>
                    <Typography component="h6" variant="h4">
                        {title}
                        <Typography component="h5" variant="caption">{moment(publishedAt).format('ddd DD-MM-YYYY hh:mm:ss')}</Typography>

                    </Typography>
                    <hr></hr>
                    <div >
                        <Typography component="subtitle2" variant="subtitle2">
                            Author : {author}
                            <div></div>
                            Source : {source.name}
                        </Typography>
                    </div>
                    <hr></hr>
                    <Typography component="h6" variant="h6">
                        Description : {description}
                    </Typography>

                    <Typography component="h6" variant="body1">
                        Content : {content} <a target="_blank" href={url}>Read more</a>
                    </Typography>

                </div>
                <div className="col-md-4">
                    <PopularHeadlines />
                </div>
            </div>
        </>
    )
}
export default NewsDetailPage