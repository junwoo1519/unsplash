import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/photo/redux";
import Consts from "../../../constants";
import Photo from "../Photo/Photo";

const PhotoContainer = () => {

    const dispatch = useDispatch();
    const {TopPhoto} = useSelector(state => state.photo);

    useEffect(() => {
        getPhoto()
    }, [])

    const getPhoto = () => {
        dispatch(Action.Creators.getPhoto({
            client_id: Consts.CLIENT_ID,
        }))
    }

    return (
        <Container>
            <Photo photo={TopPhoto}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoContainer;