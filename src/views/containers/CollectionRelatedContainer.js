import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/collection/redux";
import Consts from "../../constants";
import CollectionRelated from "../components/Collection/CollectionRelated";

const CollectionRelatedContainer = ({match}) => {

    const id = match.params.id
    const dispatch = useDispatch();
    const {listRelated} = useSelector(state => state.collection);

    useEffect(() => {
        getRelatedList()
    })

    const getRelatedList = () => {
        dispatch(Action.Creators.collectionRelated( {
            client_id: Consts.CLIENT_ID,
            id,
        }))
    }

    return (
        <Container>
            <CollectionRelated listRelated={listRelated}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default CollectionRelatedContainer;