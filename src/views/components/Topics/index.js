import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {useLocation} from "react-router-dom"
import {TopicItem} from "./TopicItem.Styled";
import TopicsMenu from "./TopicsMenu";
import Consts from "../../../constants";

const Topics = () => {

    const [topics, setTopic] = useState([]);

    useEffect(() => {
        getTopics()
    }, []);

    const getTopics = async () => {
        const result = await axios.get(`https://api.unsplash.com/topics`, {
            params: {
                client_id: Consts.CLIENT_ID,
                per_page: 30

            }
        })
        setTopic(result.data)
    }

    const location = useLocation();
    const withTopics = location.pathname === "/" || location.pathname.startsWith("/topics")

    if (!withTopics) return null;

    return (
        <Container>
            <Nav>
                <Editorial to={"/"}>Editorial</Editorial>
                <Following to={"/following"} shape="following">Following</Following>
            </Nav>
            {/*<TopicItems>*/}
            {/*    {*/}
            {/*        Topics.map((topic, index) => (*/}
            {/*            <Item to={`/topics/${topic.title}`} key={index}>{topic.title}</Item>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</TopicItems>*/}
            <TopicsMenu topics={topics}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  font-size: 14px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

// const TopicItems = styled(TopicItem)`
//   margin: 0 0 0 32px;
// `;

const Editorial = styled(TopicItem)`
`;

const Following = styled(TopicItem)`
  margin: 0 -30px 0 32px;
  position: relative;
`;

export default Topics;