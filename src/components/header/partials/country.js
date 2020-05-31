import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Translate from '@material-ui/icons/Translate';
import { useDispatch, useSelector } from 'react-redux'
import { setCountry } from '../../../redux/globleState/globleActions'

export default function Country() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const globle = useSelector(state => state.globle)
    const dispatch = useDispatch()

    return (
        <div>
            <Button style={{ color: "white" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Translate />
                {(globle.country === "in" ? "India" : "")}
                {(globle.country === "us" ? "US" : "")}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { dispatch(setCountry('in')); handleClose() }}>India</MenuItem>
                <MenuItem onClick={() => { dispatch(setCountry('us')); handleClose() }}>Us</MenuItem>
            </Menu>
        </div>
    );
}