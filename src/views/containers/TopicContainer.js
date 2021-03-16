import React, {useEffect, useCallback} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/topic/redux";
import Consts from "../../constants";
import TopicSlug from "../components/Topics/TopicSlug";

const TopicContainer = ({match}) => {

    const id = match.params.id;
    const dispatch = useDispatch();
    const {slugs} = useSelector(state => state.topic);

    const getSlugAndPhoto = useCallback(() => {
        dispatch(Action.Creators.topicSlug({
            client_id: Consts.CLIENT_ID,
            id,
        }))
    }, [dispatch]);

    useEffect(() => {
        getSlugAndPhoto();
    }, [getSlugAndPhoto])

    // const getSlugAndPhoto = () => {
    //     dispatch(Action.Creators.topicSlug({
    //         client_id: Consts.CLIENT_ID,
    //         id,
    //     }))
    // };

    if (!slugs.id) return null;

    return (
        <Container>
            <TopicSlug {...slugs}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicContainer;