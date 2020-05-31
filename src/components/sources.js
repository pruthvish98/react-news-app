import React, { useEffect } from 'react';
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchSources } from "../redux/sources/sourceActions";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    width: 600,
    pauseOnHover: true
    // adaptiveHeight: true
};
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 500,

    }
}));
const Sources = (props) => {
    const { loading, sources, status, error } = useSelector(state => state.source);
    const { country } = useSelector(state => state.globle);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSources(country))
    }, [country])
    console.log("sources", sources)
    return (
        <div className="container-fluid mb-4">
            <Slider {...settings} >
                {sources.map((item, i) =>
                    <SouresList key={i} className="mb-4" title={item.name} url={item.url} category={item.category} />
                )}
            </Slider>
        </div>

    )
}

function SouresList(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { title, url, category } = props
    return (
        <Card className={classes.root}>
            <a target="_blank" href={url}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {category}

                        </Typography>
                    </CardContent>
                </div>
            </a>
        </Card>
    );
}

export default Sources