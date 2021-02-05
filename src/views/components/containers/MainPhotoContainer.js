import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/photo/redux";
import PhotoList from "../Photo/PhotoList";

const MainPhotoContainer = () => {

    const dispatch = useDispatch();
    const {list} = useSelector(state => state.photo);

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        dispatch(Action.Creators.getPhotos({}))
    }
    
    return (
        <Container>
            <PhotoList list={list}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default MainPhotoContainer;