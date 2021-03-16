import React, {useEffect, useCallback} from "react";
import styled from "styled-components";
import PhotoList from "../components/Photo/PhotoList";
import {useDispatch, useSelector} from "react-redux";
import Consts from "../../constants";
import {Action} from "../../redux/topic/redux";
import {ContentContainer} from "../components/Layout/Layout.Styled";

const TopicPhotoContainer = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch();
    const {slugPhotos} = useSelector(state => state.topic);

    const getTopicPhotos = useCallback(() => {
        dispatch(Action.Creators.topicSlug({
            client_id: Consts.CLIENT_ID,
            id,
        }))
    }, [dispatch, id]);
    
    useEffect(() => {
        getTopicPhotos()
    }, [getTopicPhotos])

    // const getTopicPhotos = () => {
    //     dispatch(Action.Creators.topicPhoto({
    //         client_id: Consts.CLIENT_ID,
    //         per_page: 30,
    //         id,
    //     }));
    // };

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