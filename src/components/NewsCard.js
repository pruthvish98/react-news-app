import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FullScreenDialog from './fsDialog';
import moment from 'moment'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function NewsCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { source, author, title, description, url, urlToImage, publishedAt, content } = props

    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
                subheader={moment(publishedAt).format('ddd DD-MM-YYYY hh:mm:ss')}
            />
            <Link to={{ pathname: "/news-detail", state: props }}>
                <CardMedia
                    className={classes.media}
                    image={urlToImage}
                    title={source.name}
                /></Link>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <FullScreenDialog title={title} source={source} url={url} author={author} description={description}
                    urlToImage={urlToImage} publishedAt={publishedAt} content={content} />
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {content}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}
export default NewsCard

