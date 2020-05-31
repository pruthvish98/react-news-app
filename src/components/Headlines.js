import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { source, author, title, description, url, urlToImage, publishedAt, content, headLines } = props
    return (
        <Card className={classes.root}>
            {headLines &&
                <CardMedia
                    className={classes.cover}
                    image={urlToImage}
                    title={title}
                />
            }
            <Link to={{ pathname: "/news-detail", state: props }}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {publishedAt}

                        </Typography>
                    </CardContent>
                </div>
            </Link>
        </Card>
    );
}
