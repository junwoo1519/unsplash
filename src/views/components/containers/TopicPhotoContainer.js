import React, {useEffect} from "react";
import styled from "styled-components";
import PhotoList from "../Photo/PhotoList";
import {useDispatch, useSelector} from "react-redux";
import Consts from "../../../constants";
import {Action} from "../../../redux/topic/redux";
import {ContentContainer} from "../Layout/Layout.Styled";

const TopicPhotoContainer = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch();
    const {slugPhotos} = useSelector(state => state.topic);

    console.log("@@ topicPhotos", slugPhotos);

    useEffect(() => {
        getTopicPhotos()
    }, [id])

    const getTopicPhotos = () => {
        dispatch(Action.Creators.topicPhoto({
            client_id: Consts.CLIENT_ID,
            per_page: 30,
            id,
        }))
    }

    return (
        <Container>
            <PhotoList list={slugPhotos}/>
        </Container>
    )
}

const Container = styled(ContentContainer)`
    margin-top: 80px;
`;

export default TopicPhotoContainer;