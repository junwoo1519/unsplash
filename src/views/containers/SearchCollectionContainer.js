import React, {useEffect, useCallback} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/search/redux";
import SearchList from "../components/Search/SearchList";
import CollectionItem from "../components/Search/CollectionItem";
import Consts from "../../constants";

const SearchCollectionContainer = ({match}) => {

    const dispatch = useDispatch();
    const query = match.params.query;
    const {collections} = useSelector(state => state.search)

    const searchCollection = useCallback(() => {
        dispatch(Action.Creators.getPhoto({
            client_id: Consts.CLIENT_ID,
            query,
        }))
    }, [dispatch, query]);

    useEffect(() => {
        searchCollection();
    }, [searchCollection]);

    // const searchCollection = () => {
    //     dispatch(Action.Creators.searchCollections({
    //         query,
    //         client_id: Consts.CLIENT_ID,
    //         per_page: 15,
    //     }))
    // };

    const render = (item, index) => {

        return (
            <CollectionItem {...item}/>
        )
    }
    
    console.log("@@ collections", collections);

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