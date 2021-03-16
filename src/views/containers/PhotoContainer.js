import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photo/redux";
import Consts from "../../constants";
import Photo from "../components/Photo/Photo";

const PhotoContainer = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch();
    const {topPhoto} = useSelector(state => state.photo);

    useEffect(() => {
        getTitlePhoto()
    });

    const getTitlePhoto = () => {
        dispatch(Action.Creators.getPhoto({
            client_id: Consts.CLIENT_ID,
            id,
        }))
    }

    if (!topPhoto.id) return null;

    return (
        <Container>
            <Photo {...topPhoto}/>
        </Container>
    )
}

const Container = styled.div`
`;

export default PhotoContainer;