import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Dialog, List, ListItem,
    ListItemText, Divider, AppBar, Toolbar, IconButton, Typography, Slide, CardMedia, Card
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';

import moment from 'moment'
const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        color: 'white'
    },
    imageStyle: {
        width: "1080px", marginTop: "25px"
    },
    flex: {
        display: "flex"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { source, author, title, description, url, urlToImage, publishedAt, content } = props

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Read more
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button> */}
                    </Toolbar>
                </AppBar>

                <div style={{ marginLeft: "15px" }}>
                    <div className={classes.flex}>
                        <div className="mb-2">
                            <img src={urlToImage} className={classes.imageStyle} />
                        </div>
                        <Typography component="h6" variant="h6">
                            Description : {description}
                        </Typography>
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


                    <Typography component="h6" variant="body1">
                        Content : {content} <a target="_blank" href={url}>Read more</a>
                    </Typography>

                </div>
            </Dialog>
        </div>
    );
}
