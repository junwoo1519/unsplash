import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import PhotoList from "../../components/Photo/PhotoList";

const Search = ({match}) => {

    const query = match.params.query;
    
    const [data, setData] = useState();
    
    useEffect(() => {
        searchPhotos();
    }, [query])
    
    const searchPhotos = async () => {
        const result = await axios.get("https://api.unsplash.com/search/photos", {
            params: {
                client_id: "Beb3DvOszHNZhGauHt6LdPWtoo1OrvDzIdbluYmIZDs",
                per_page: 15,
                query
            }
        })
        setData(result.data)
    }

    if (!data) return "Loading..."

    return (
        <Container>
            <PhotoList List={data.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Search;