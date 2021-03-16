import React,{useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/search/redux";
import PhotoList from "../components/Photo/PhotoList";
import Consts from "../../constants";

const SearchPhotoContainer = ({match}) => {

    const query = match.params.query;
    const dispatch = useDispatch();
    const {photos} = useSelector(state => state.search);

    useEffect(() => {
        searchPhotos(query);
    }, [query])

    const searchPhotos = () => {
        dispatch(Action.Creators.searchPhotos({
            query,
            client_id: Consts.CLIENT_ID,
            per_page: 15,
        }))
    }

    return (
        <Container>
            <PhotoList list={photos.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchPhotoContainer;