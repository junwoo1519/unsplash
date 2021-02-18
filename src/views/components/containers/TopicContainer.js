import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/topic/redux";
import Consts from "../../../constants";
import TopicPhoto from "../Topics/TopicPhoto";
import TopicSlug from "../Topics/TopicSlug";

const TopicContainer = ({match}) => {

    const query = match.params.query;
    const dispatch = useDispatch();
    const {slug} = useSelector(state => state.topic);

    console.log("@@ slug", slug);

    useEffect(() => {
        getSlugAndPhoto();
    }, [query])

    const getSlugAndPhoto = () => {
        dispatch(Action.Creators.topicSlug( {
            client_id: Consts.CLIENT_ID,
            query
        }))
    }

    return (
        <Container>
            <TopicSlug {...slug}/>
            <TopicPhoto/>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicContainer;