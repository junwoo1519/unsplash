import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/search/redux";
import SearchList from "../Search/SearchList";
import CollectionItem from "../Search/CollectionItem";
import Consts from "../../../constants";

const SearchCollectionContainer = ({match}) => {

    const dispatch = useDispatch();
    const query = match.params.query;
    const {collections} = useSelector(state => state.search)

    useEffect(() => {
        searchCollection();
    }, [])

    const searchCollection = () => {
        dispatch(Action.Creators.searchCollections({
            query,
            client_id: Consts.CLIENT_ID,
            per_page: 15,
        }))

    }

    const render = (item, index) => {

        return (
            <CollectionItem {...item}/>
        )
    }

    return (
        <Container>
            <SearchList list={collections.results}
                        render={render}
            />
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchCollectionContainer;