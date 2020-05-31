import React from 'react';
import { Row, Col, Container } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/globleState/globleActions";

const CatHead = () => {
    const globle = useSelector(state => state.globle);
    const dispatch = useDispatch();
    const categories = [
        { "name": "Business", "value": "business", "count": 0 },
        { "name": "Entertainment", "value": "entertainment", "count": 0 },
        { "name": "Health", "value": "health", "count": 0 },
        { "name": "Science", "value": "science", "count": 0 },
        { "name": "Sports", "value": "sports", "count": 0 },
        { "name": "Technology", "value": "technology", "count": 0 }
    ]
    function changeCategory(value) {
        dispatch(setCategory(value))
        if (localStorage.getItem('category') === null || localStorage.getItem('category') === undefined) {
            localStorage.setItem('category', JSON.stringify(categories))
        } else {
            let data = JSON.parse(localStorage.getItem('category'));
            function search(nameKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].value === nameKey) {
                        return [i, myArray[i].count];
                    }
                }
            }
            let resultObject = search(value, data);
            if (resultObject !== undefined) {
                data[resultObject[0]] = { ...data[resultObject[0]], "count": resultObject[1] + 1 }
            }
            localStorage.setItem('category', JSON.stringify(data))
            console.log(localStorage.getItem('category'))
        }
    }

    return (
        <Container>
            <hr />
            <Row>
                {categories.map((cat, i) =>
                    <Col key={i}>
                        <button style={{ "border": "none", "background": "none" }} onClick={() => { changeCategory(cat.value) }} >{cat.name}</button>
                    </Col>)}
            </Row>
            <hr />
        </Container >
    )
}
export default CatHead