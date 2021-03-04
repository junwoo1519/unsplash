import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/photo/redux";
import Consts from "../../constants";
import CollectionsRelated from "../components/Photo/CollectionsRelated";


const CollectionsRelatedContainer = () => {

    const dispatch = useDispatch();
    const {collection} = useSelector(state => state.photo);

    useEffect(() => {
        getCollection()
    }, []);

    const getCollection = () => {
        dispatch(Action.Creators.collectionsRelated({
            client_id: Consts.CLIENT_ID,
            per_page: 3
        }))
    }

    return (
        <Container>
            {/*<CollectionsRelated {...collection}/>*/}
        </Container>
    )
}

const Container = styled.div`

`;

export default CollectionsRelatedContainer;
