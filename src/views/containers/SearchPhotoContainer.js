import React, {useEffect, useCallback} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/search/redux";
import PhotoList from "../components/Photo/PhotoList";
import Consts from "../../constants";

const SearchPhotoContainer = ({match}) => {

    const query = match.params.query;
    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.search);

    const searchPhotos = useCallback(() => {
        dispatch(Action.Creators.searchPhotos({
            query,
            client_id: Consts.CLIENT_ID,
            per_page: 15,
        }))
    }, [dispatch, query]);

    useEffect(() => {
        searchPhotos();
    }, [searchPhotos]);

    // const searchPhotos = () => {
    //     dispatch(Action.Creators.searchPhotos({
    //         query,
    //         client_id: Consts.CLIENT_ID,
    //         per_page: 15,
    //     }))
    // };

    return (
        <Container>
            <PhotoList list={photos.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchPhotoContainer;