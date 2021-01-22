import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import HomeList from "../../component/Home/HomeList";

const List = () => {

    const [List, setList] = useState([])

    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
       const result = await axios.get(`https://api.unsplash.com/photos`, {
           params: {
               client_id: "Beb3DvOszHNZhGauHt6LdPWtoo1OrvDzIdbluYmIZDs",
               per_page: 30
           }
       })
        setList(result.data)
    }

    return (
        <Container>
            <HomeList List={List}/>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 50px;
`;

export default List;