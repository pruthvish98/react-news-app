import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, InputBase, Typography, IconButton, Toolbar, fade, makeStyles, TextField, MenuItem, Menu } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Country from './partials/country'
import Search from './partials/SearchM'
import Clock from 'react-live-clock'
import MoreIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../redux/globleState/globleActions";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: "white"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        background: "white",
        borderRadius: 5
    },
    menuButton: {
        color: "white",
    }
}));

export default function SearchAppBar() {
    const classes = useStyles();
    const selectedDate = useSelector(state => state.globle.date)
    const dispatch = useDispatch()
    const handleDateChange = e => {
        dispatch(setDate(e.target.value));
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function clearSeachHistory() {
        localStorage.removeItem("searchKeywords");
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <Link to="/" className={classes.menuButton}> News</Link>
                    </IconButton>

                    <Typography className={classes.title} variant="body1" noWrap>
                        <Search />
                    </Typography>
                    <Typography className={classes.title} variant="body1" noWrap>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue={selectedDate}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleDateChange}
                            />
                        </form>
                    </Typography>
                    <Clock format={'ddd DD-MM-YYYY HH:mm:ss'} ticking={true} />
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                    </IconButton>
                    <Country />
                    <IconButton aria-label="display more actions" edge="end" color="inherit" >
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            style={{ color: "white" }}
                        >
                            <MoreIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    width: '20ch',
                                },
                            }}
                        >
                            <MenuItem onClick={clearSeachHistory}>
                                Clear Search History
                            </MenuItem>

                        </Menu>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
