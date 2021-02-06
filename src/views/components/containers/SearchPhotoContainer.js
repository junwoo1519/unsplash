import React,{useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../../redux/search/redux";
import PhotoList from "../Photo/PhotoList";

const SearchPhotoContainer = ({match}) => {

    const query = match.params.query;
    const dispatch = useDispatch();
    const {results} = useSelector(state => state.search);

    useEffect(() => {
        searchPhotos();
    }, [])

    const searchPhotos = () => {
        dispatch(Action.Creators.searchPhotos({
            query,
            client_id: "Beb3DvOszHNZhGauHt6LdPWtoo1OrvDzIdbluYmIZDs",
            per_page: 15,
        }))
    }

    return (
        <Container>
            <PhotoList list={results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchPhotoContainer;