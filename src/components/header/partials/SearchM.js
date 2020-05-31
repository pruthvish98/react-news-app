import React, { useEffect } from 'react';
import { setSearch } from "../../../redux/globleState/globleActions";
import { searchNews } from "../../../redux/searchNews/searchActions";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom'
const Search = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const selectedDate = useSelector(state => state.globle.date)
    const search = useSelector(state => state.globle.search)
    let keywords = JSON.parse(localStorage.getItem('searchKeywords'));
    const onChange = (e) => {
        // dispatch(setSearch(e.target.value))
        console.log(e.target.value)
    };

    useEffect(() => {
        keywords = JSON.parse(localStorage.getItem('searchKeywords'));
        if (keywords !== null) {
            keywords.sort(function (a, b) {
                return b.count - a.count
            })
        } else {
            keywords = []
        }
    }, [search])
    const onKeyDown = e => {

        if (e.keyCode === 13) {
            dispatch(setSearch(e.target.value))
            dispatch(searchNews(e.target.value, selectedDate))
            if (localStorage.getItem('searchKeywords') === null || localStorage.getItem('searchKeywords') === undefined) {
                localStorage.setItem('searchKeywords', JSON.stringify([{ "value": e.target.value, "count": 1 }]))
            } else {
                let data = JSON.parse(localStorage.getItem('searchKeywords'));
                function search(nameKey, myArray) {
                    for (var i = 0; i < myArray.length; i++) {
                        if (myArray[i].value === nameKey) {
                            return [i, myArray[i].count];
                        }
                    }
                }
                let resultObject = search(e.target.value, data);
                if (resultObject !== undefined) {
                    data[resultObject[0]] = { "value": e.target.value, "count": resultObject[1] + 1 }
                } else {
                    let value = e.target.value.trim()
                    if (value !== "") {
                        data.push({ "value": e.target.value, "count": 1 })
                    }
                }
                localStorage.setItem('searchKeywords', JSON.stringify(data))

            }
            if (history.location.pathname !== "/") {
                history.push("/");
            }
        }
    }
    if (keywords !== null) {
        keywords.sort(function (a, b) {
            return b.count - a.count
        })
    } else {
        keywords = []
    }

    const style = {
        background: "white", borderRadius: 5, marginLeft: 10, paddingLeft: 3
    }
    return (<>
        <div style={{ width: 500 }}>
            <Autocomplete
                fullWidth
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                style={style}
                options={keywords.map(option => option.value)}
                renderInput={params => (
                    <TextField
                        {...params}
                        autoComplete={true}
                        label="Search here..."
                        style={style}
                        InputProps={{ ...params.InputProps, type: 'search' }}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                    />
                )}
            />
        </div>
    </>
    )



}
export default Search