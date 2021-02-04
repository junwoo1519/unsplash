import React, {useEffect} from "react";
import styled from "styled-components";
import PhotoList from "../../components/Photo/PhotoList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/reducer";

const List = () => {

    const dispatch = useDispatch();
    const {list} = useSelector(state => state);

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
       dispatch(Action.Creators.getList({
       }))
    }

    return (
        <Container>
            <PhotoList list={list}/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 50px;
`;

export default List;