import React, {useEffect} from "react";
import styled from "styled-components";
import PhotoRelated from "../Photo/PhotoRelated";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/photo/redux";
import Consts from "../../../constants";

const PhotoRelatedContainer = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch();
    const {relatedPhotos} = useSelector(state => state.photo);
    
    console.log("@@ relatedPhot", relatedPhotos);

    useEffect(() => {
        getRelatedPhotos()
    }, [])

    const getRelatedPhotos = () => {
        dispatch(Action.Creators.getRelatedPhotos({
            id,
            client_id: Consts.CLIENT_ID,
            per_page: 15,
        }))
    }

    return (
        <Container>
            <PhotoRelated photos={relatedPhotos}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoRelatedContainer;